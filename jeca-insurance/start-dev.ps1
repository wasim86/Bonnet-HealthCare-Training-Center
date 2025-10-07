# PowerShell script to kill any process on port 3000 and start development server
Write-Host "Checking for processes on port 3000..." -ForegroundColor Yellow

# Find processes using port 3000
$processes = netstat -ano | findstr :3000 | findstr LISTENING

if ($processes) {
    Write-Host "Found processes on port 3000. Killing them..." -ForegroundColor Red
    
    # Extract PIDs and kill them
    $processes | ForEach-Object {
        $fields = $_ -split '\s+'
        $pid = $fields[-1]
        if ($pid -match '^\d+$') {
            Write-Host "Killing process with PID: $pid" -ForegroundColor Red
            taskkill /PID $pid /F
        }
    }
    
    # Wait a moment for processes to be killed
    Start-Sleep -Seconds 2
}

Write-Host "Starting development server on port 3000..." -ForegroundColor Green
npm run dev
