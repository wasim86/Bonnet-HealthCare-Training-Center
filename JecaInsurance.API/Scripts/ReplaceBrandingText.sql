-- Replace occurrences of JECA branding text with Bonnet Healthcare in all varchar/nvarchar columns
-- Run AFTER database has been renamed to BonnetHealthcare
-- Run with: sqlcmd -S .\SQLEXPRESS -E -i JecaInsurance.API\Scripts\ReplaceBrandingText.sql

USE [BonnetHealthcare];

IF DB_ID(N'BonnetHealthcare') IS NULL
BEGIN
    RAISERROR('Database BonnetHealthcare not found. Ensure rename completed.', 16, 1);
    RETURN;
END

PRINT 'Starting branding text replacement across tables...';

DECLARE @Olds TABLE (val NVARCHAR(100));
INSERT INTO @Olds(val)
VALUES (N'Jeca Insurance'),
       (N'JECA INSURANCE'),
       (N'JecaInsurance'),
       (N'jecainsurence');

DECLARE @old NVARCHAR(100);
DECLARE cur CURSOR FAST_FORWARD FOR SELECT val FROM @Olds;

OPEN cur;
FETCH NEXT FROM cur INTO @old;

WHILE @@FETCH_STATUS = 0
BEGIN
    DECLARE @batch NVARCHAR(MAX) = N'';

    SELECT @batch = @batch + N'
    UPDATE ' + QUOTENAME(s.name) + N'.' + QUOTENAME(t.name) + N'
    SET ' + QUOTENAME(c.name) + N' = REPLACE(' + QUOTENAME(c.name) + N', N''' + REPLACE(@old, '''', '''''') + N''', N''Bonnet Healthcare'')
    WHERE ' + QUOTENAME(c.name) + N' LIKE N''%' + REPLACE(@old, '''', '''''') + N'%'';'
    FROM sys.tables t
    JOIN sys.schemas s ON s.schema_id = t.schema_id
    JOIN sys.columns c ON c.object_id = t.object_id
    JOIN sys.types ty ON ty.user_type_id = c.user_type_id
    WHERE ty.name IN ('varchar','nvarchar')
      AND t.is_ms_shipped = 0
      AND t.name NOT IN ('__EFMigrationsHistory');

    PRINT 'Applying replacements for value: ' + @old;
    EXEC sp_executesql @batch;

    FETCH NEXT FROM cur INTO @old;
END

CLOSE cur;
DEALLOCATE cur;

PRINT 'Branding text replacement completed.';