#!/bin/bash

# This script pushes ONLY the build folder to GitHub
# So you can download it as a ZIP

echo "Creating production branch with build files..."

cd /app/frontend/build

# Initialize a new git repo in the build folder
git init

# Add all build files
git add .

# Commit
git commit -m "Production build - Ready for deployment"

# Rename to main branch
git branch -M production

# Add your GitHub remote (REPLACE WITH YOUR ACTUAL REPO URL)
# Example: git remote add origin https://github.com/yourusername/islamic-library.git
echo ""
echo "Now run these commands with YOUR GitHub URL:"
echo ""
echo "cd /app/frontend/build"
echo "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo "git push -f origin production"
echo ""
echo "This will create a 'production' branch with ONLY the website files"
