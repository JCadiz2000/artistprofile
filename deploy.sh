#!/usr/bin/env/ sh
set -e

npm run build

cd dist
echo 'www.kadisumusic.com' > CNAME

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:JCadiz2000/artistprofile.git master:gh-pages

cd -