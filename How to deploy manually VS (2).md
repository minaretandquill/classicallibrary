### Manual Deployment Instructions for Production Site

	git checkout main
	git add .
	git commit -m "Describe your change"
	git push origin main
	yarn build

	git add .
	git commit -m "Describe your change"
	git push origin main

	rmdir C:\temp\ -Recurse
	mkdir C:\temp\prod_build
	Copy-Item build\* C:\temp\prod_build -Recurse -Force


	git checkout prod
	git rm -rf .
	Copy-Item C:\temp\prod_build\* . -Recurse -Force
	git add .
	git commit -m "Deploy production build"
	git push origin prod

	git checkout main
	rmdir C:\temp\ -Recurse