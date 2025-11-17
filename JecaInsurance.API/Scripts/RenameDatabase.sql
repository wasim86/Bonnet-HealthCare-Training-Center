-- Rename database from JecaInsurance to BonnetHealthcare
-- Run with: sqlcmd -S .\SQLEXPRESS -E -i JecaInsurance.API\Scripts\RenameDatabase.sql

USE master;

IF DB_ID(N'JecaInsurance') IS NULL
BEGIN
    RAISERROR('Source database JecaInsurance not found.', 16, 1);
    RETURN;
END

IF DB_ID(N'BonnetHealthcare') IS NOT NULL
BEGIN
    RAISERROR('Target database BonnetHealthcare already exists. Aborting rename.', 16, 1);
    RETURN;
END

PRINT 'Setting JecaInsurance to SINGLE_USER...';
ALTER DATABASE [JecaInsurance] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;

PRINT 'Renaming database to BonnetHealthcare...';
ALTER DATABASE [JecaInsurance] MODIFY NAME = [BonnetHealthcare];

PRINT 'Restoring MULTI_USER mode...';
ALTER DATABASE [BonnetHealthcare] SET MULTI_USER;

PRINT 'Database rename completed successfully.';