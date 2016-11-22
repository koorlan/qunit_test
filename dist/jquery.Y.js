/*! Y - v0.1.0 - 2016-11-22
* https://github.com/korlan/qunit2
* Copyright (c) 2016 Your Name; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.Y = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.Y = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.Y.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.Y.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].Y = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
