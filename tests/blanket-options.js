/* globals blanket, module */
// jscs: disable

var options = {
  modulePrefix: 'dubtrack-ui',
  filter: '//.*dubtrack-ui/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    lcovOptions: {
      outputFile: 'lcov.dat',
      renamer: function (moduleName) {
        var expression = /^dubtrack-ui/;
        var name = moduleName.replace(/^dubtrack-ui\/config/, 'config');
        return name.replace(expression, 'app') + '.js';
      }
    },
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
