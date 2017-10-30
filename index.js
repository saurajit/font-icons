fs = require('fs'),
path = require('path');
const webfont = require('webfont').default;
const output_dir = 'out';
const icon_dir = 'svg';
const icon_glob = 'svg' + '/**/*.svg';


if (!fs.existsSync(output_dir)){
    fs.mkdirSync(output_dir);
}

webfont({
  files: icon_glob,
  fontName: 'zaloni-icon',
  template: 'css',
  fontId: 'id',
  destStyles: 'hello',
  verbose: true
})
.then((result) => {
  console.log('\r\nSVG files found: ', result.config.foundFiles.join(', '), '\r\n');
  fs.writeFile(output_dir + path.sep + result.config.fontName + '.' + result.config.template, result.styles, function (err) {
      if (err) 
          return console.log('Error: ', result.config.template.toUpperCase() + ' style file not generated');
      console.log(result.config.template.toUpperCase() + ' style file generated');
  });
  
  result.config.formats.forEach(function(format) {
    fs.writeFile(output_dir + path.sep + result.config.fontName + '.' + format, result[format], function (err) {
      if (err) 
          return console.log('Error: ', format.toUpperCase() + ' font style file not generated');
      console.log(format.toUpperCase() + ' font style file generated');
    });
  });
  
}, (error) => {
  console.log(error);
});