#/bin/bash
bundle install

if [ $1 = "serve" ]
  then
    bundle exec jekyll serve --livereload --host 0.0.0.0
elif [ $1 = "build_prod" ]
  then
    JEKYLL_ENV=production bundle exec jekyll build
fi
