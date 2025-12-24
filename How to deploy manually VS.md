# Manual Deployment Instructions for Production Site

# Go to the main branch in local repo

	git checkout main

# Install dependenciy in Main Branch 

	yarn install

# Make changes to the files e.g.mock.js

# Committ changes

	git add .
	git commit -m "Describe your change"
	git push origin main

# Build site. Open terminal in front end folder and run:

	yarn build

# Confirm build output:

	dir build

	You should see:

		index.html
		static/

# Preparing build files for deployment
## You cannot switch branches yet, because the build folder is not committed and would disappear. So you must temporarily store the build output outside the repository.

	mkdir ..\_prod_build
	Copy-Item build\* ..\_prod_build -Recurse

# Switch to prod

	git checkout prod

# Remove existing production files
## This ensures no old or stale files remain.

	git rm -rf .

## At this point, only .git remains.

# Copy new build files into prod

	Copy-Item ..\_prod_build\* . -Recurse

## Verify contents:

	dir

# Correct contents:

	index.html
	static/

# Incorrect contents:

	src
	node_modules
	package.json

	If incorrect files appear, stop.

# Commit and push production build

	git add .
	git commit -m "Deploy production build"
	git push origin prod

# The prod branch on GitHub now contains the live site files.

	git checkout main

# Remove the temporary folder:

	rmdir ..\_prod_build -Recurse

# Deploying on the server (Plesk)

	In Plesk, pull from Prod branch:
