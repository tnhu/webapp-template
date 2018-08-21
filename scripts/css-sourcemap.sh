#
# Extract css sourcemap from inline sourcemap to external file.
# Note: Chrome does not load the external sourcemap, Firefox does.
#

cd dist

for css in *.css; do
  sourcemap=`tail -1 -q $css`
  sourcemapJSON=`echo $sourcemap | awk -F ',' '{ print $2 }' | awk -F ' ' '{ print $1 }' | base64 --decode`
  sourcemapURL="/*# sourceMappingURL=/$css.map */"

  echo $sourcemapJSON > $css.map

  sed -i '' -e '$ d' $css

  echo "$sourcemapURL" >> $css
done

cd ..