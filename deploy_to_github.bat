@echo off
set GIT_EXE="C:\Users\HELLO\AppData\Local\GitHubDesktop\app-3.4.2\resources\app\git\cmd\git.exe"

echo ========================================================
echo   Deploying Madhuram Donawat's Portfolio to GitHub
echo ========================================================
echo.

echo 1. Checking git status...
%GIT_EXE% status
echo.

echo 2. Pushing main branch to GitHub origin...
%GIT_EXE% push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! Pushed to https://github.com/Madhuram1412/madhuram-portfolio
    echo   GitHub Actions will now build and deploy to GitHub Pages!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   NOTE: If the repository doesn't exist on GitHub yet,
    echo   please create it first at https://github.com/new
    echo   with repository name: madhuram-portfolio
    echo.
    echo   Or use GitHub Desktop to click "Publish repository"!
    echo ========================================================
)

echo.
pause
