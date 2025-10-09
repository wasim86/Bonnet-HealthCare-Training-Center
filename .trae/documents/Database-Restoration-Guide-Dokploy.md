# Database Restoration Guide for Dokploy Live Server

## Overview
This guide provides step-by-step instructions for restoring a SQL Server database backup (.bak file) to your live JECA Insurance application deployed on Dokploy.

## Prerequisites
- ✅ JECA Insurance application successfully deployed on Dokploy
- ✅ Local database backup file (.bak format)
- ✅ Access to Dokploy dashboard
- ✅ SQL Server container running and healthy

## Current Deployment Configuration
Your docker-compose.yml already includes the necessary backup volume mount:
```yaml
jeca-sqlserver:
  volumes:
    - jeca_sqldata:/var/opt/mssql
    - ./database-backup:/backup  # Backup directory mount
```

## Method 1: Using Dokploy Dashboard (Recommended)

### Step 1: Prepare Your Backup File
1. **Locate your local backup file** (e.g., `JecaInsurance.bak`)
2. **Verify file integrity** - ensure the .bak file is not corrupted
3. **Note the original database name** from your backup

### Step 2: Upload Backup File to Dokploy
1. **Access Dokploy Dashboard**
   - Navigate to your Dokploy server URL
   - Login to your account

2. **Navigate to Your Project**
   - Find your `jeca-full-stack` project
   - Click on the project to open it

3. **Access File Manager**
   - Look for "Files" or "File Manager" section
   - Navigate to the project root directory

4. **Create/Access Backup Directory**
   - Create a `database-backup` folder if it doesn't exist
   - This maps to the `/backup` directory inside the SQL Server container

5. **Upload Your Backup File**
   - Upload your `.bak` file to the `database-backup` directory
   - Wait for upload completion

### Step 3: Access SQL Server Container
1. **Open Container Terminal**
   - In Dokploy dashboard, find your `jeca-sqlserver` container
   - Click on "Terminal" or "Console" to access the container shell

2. **Verify Backup File**
   ```bash
   ls -la /backup/
   ```
   - Confirm your .bak file is present

### Step 4: Restore Database
1. **Connect to SQL Server**
   ```bash
   /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "JecaInsurance2024!" -C
   ```

2. **Check Existing Databases**
   ```sql
   SELECT name FROM sys.databases;
   GO
   ```

3. **Get Logical File Names from Backup**
   ```sql
   RESTORE FILELISTONLY FROM DISK = '/backup/YourBackupFile.bak';
   GO
   ```
   - Note the LogicalName values (typically database name and database name_Log)

4. **Restore Database**
   ```sql
   USE master;
   GO
   
   -- Drop existing database if it exists
   IF EXISTS (SELECT name FROM sys.databases WHERE name = 'JecaInsurance')
   BEGIN
       ALTER DATABASE JecaInsurance SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
       DROP DATABASE JecaInsurance;
   END
   GO
   
   -- Restore from backup
   RESTORE DATABASE JecaInsurance 
   FROM DISK = '/backup/YourBackupFile.bak'
   WITH 
       MOVE 'YourLogicalDataFileName' TO '/var/opt/mssql/data/JecaInsurance.mdf',
       MOVE 'YourLogicalLogFileName' TO '/var/opt/mssql/data/JecaInsurance.ldf',
       REPLACE;
   GO
   ```

5. **Verify Restoration**
   ```sql
   USE JecaInsurance;
   GO
   SELECT COUNT(*) FROM INFORMATION_SCHEMA.TABLES;
   GO
   ```

6. **Exit SQL Server**
   ```sql
   EXIT
   ```

## Method 2: Using Docker Commands (Alternative)

### Step 1: Copy Backup File to Container
```bash
# From your local machine (if you have Docker access)
docker cp /path/to/your/backup.bak jeca-sqlserver:/backup/
```

### Step 2: Execute Restoration Commands
```bash
# Access container
docker exec -it jeca-sqlserver /bin/bash

# Run SQL commands as shown in Method 1, Step 4
```

## Method 3: Using SCP/SFTP (Advanced)

### Step 1: Upload via SCP
```bash
# Upload to server (replace with your server details)
scp YourBackupFile.bak user@your-server:/path/to/dokploy/project/database-backup/
```

### Step 2: Follow Method 1 from Step 3

## Post-Restoration Verification

### Step 1: Verify Database Connection
1. **Check API Health Endpoint**
   - Visit: `http://jecainsurancefl.com:9080/api/health`
   - Should return successful response

2. **Test Database Queries**
   - Access your application frontend
   - Try creating a test quote to verify database connectivity

### Step 2: Verify Data Integrity
1. **Check Table Counts**
   ```sql
   USE JecaInsurance;
   GO
   SELECT 
       t.name AS TableName,
       p.rows AS RowCount
   FROM sys.tables t
   INNER JOIN sys.partitions p ON t.object_id = p.object_id
   WHERE p.index_id < 2
   ORDER BY t.name;
   GO
   ```

2. **Verify Sample Data**
   ```sql
   -- Check quotes table
   SELECT TOP 10 * FROM Quotes ORDER BY CreatedDate DESC;
   GO
   ```

## Connection String Verification

Your current connection string in docker-compose.yml:
```yaml
ConnectionStrings__DefaultConnection=Server=jeca-sqlserver;Database=JecaInsurance;User Id=sa;Password=${SQL_SA_PASSWORD:-JecaInsurance2024!};TrustServerCertificate=true;MultipleActiveResultSets=true;
```

**Important**: Ensure the database name in the connection string matches your restored database name.

## Troubleshooting Common Issues

### Issue 1: "Database already exists"
**Solution**: Use the DROP DATABASE command before restoration (shown in Step 4 above)

### Issue 2: "Logical file names don't match"
**Solution**: 
1. Run `RESTORE FILELISTONLY` to get correct logical names
2. Update the MOVE statements with correct logical file names

### Issue 3: "Permission denied"
**Solution**:
```bash
# Fix file permissions in container
chown mssql:mssql /backup/YourBackupFile.bak
chmod 644 /backup/YourBackupFile.bak
```

### Issue 4: "Container not accessible"
**Solution**:
1. Verify container is running: Check Dokploy dashboard
2. Restart container if needed
3. Check container logs for errors

### Issue 5: "Connection timeout"
**Solution**:
1. Wait for SQL Server to fully initialize (can take 2-3 minutes)
2. Check health check status in Dokploy
3. Verify SA password is correct

## Best Practices for Production

### 1. Backup Before Restoration
```sql
-- Create backup of current database before restoration
BACKUP DATABASE JecaInsurance 
TO DISK = '/backup/JecaInsurance_PreRestore_' + FORMAT(GETDATE(), 'yyyyMMdd_HHmmss') + '.bak';
GO
```

### 2. Maintenance Mode
- Consider putting your application in maintenance mode during restoration
- Update nginx configuration to show maintenance page

### 3. Verify Application Functionality
- Test all major features after restoration
- Check quote creation, data retrieval, and form submissions
- Monitor application logs for any database-related errors

### 4. Monitor Performance
- Check database performance after restoration
- Verify indexes are properly restored
- Monitor query execution times

## Security Considerations

1. **Remove Backup Files**: Delete backup files from the server after successful restoration
2. **Change Default Passwords**: Consider changing SA password after restoration
3. **Audit Access**: Review who has access to the database restoration process
4. **Encrypt Backups**: Use encrypted backups for sensitive data

## Quick Reference Commands

### Access SQL Server Container
```bash
# Via Dokploy dashboard terminal or:
docker exec -it jeca-sqlserver /bin/bash
```

### Connect to SQL Server
```bash
/opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "JecaInsurance2024!" -C
```

### Basic Restoration Template
```sql
USE master;
GO
RESTORE DATABASE JecaInsurance 
FROM DISK = '/backup/YourBackupFile.bak'
WITH REPLACE;
GO
```

## Support and Next Steps

After successful restoration:
1. ✅ Verify all application features work correctly
2. ✅ Test quote creation and data retrieval
3. ✅ Monitor application logs for any issues
4. ✅ Consider setting up automated backup schedules
5. ✅ Document any custom configurations or data changes

Your JECA Insurance application should now be running with your restored database on the live Dokploy server!