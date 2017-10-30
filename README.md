# font-icons

To generate the fonts, run

```
npm install
npm start
```

Font icons will be generated in the directory `out` against the SVG files in the directory `svg`. All the SVG icons needs to be put in the directory `svg`.

To change these default locations, edit the file `index.js`:

```
const output_dir = 'out';
const icon_glob = 'svg' + '/**/*.svg';
```