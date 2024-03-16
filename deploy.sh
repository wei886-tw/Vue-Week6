# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME


git add -A
git commit -m 'deploy'


# if you are deploying to https://wei886-tw.github.io/Week6
# git push -f git@github.com:wei886-tw/Week6.git main:gh-pages

cd -