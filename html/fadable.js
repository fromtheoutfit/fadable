// Get the height of the browser viewport:
var vpHeight = window.innerHeight;
// Get the current scroll position, from the top:
var scrollTop = document.documentElement.scrollTop;
// Figure out where the bottom of the browser viewport is by adding the two
// prior values:
var vpBottom = vpHeight + scrollTop;
// Set a distance from the bottom of the browser viewport at which we'll fade
// in the fadable things:
var distFromVpBottom = 200;
// Select all of the fadable things:
var fadables = document.querySelectorAll('.fadable');

// Execute immediately:
// ----------------------------------------------------------------------------
// For each of the fadables:
Array.prototype.forEach.call(fadables, function(el, i) {
  // Find its top edge:
  var elTop = el.getBoundingClientRect().top;
  // If its top edge is farther down -- a greater number -- than the bottom of
  // the browser viewport:
  if (elTop > vpBottom) {
    // Add a class of fadable--faded to it, which uses CSS to set its opacity
    // to 0:
    el.classList.add('fadable--faded');
  }
});

// Execute on scroll:
// ----------------------------------------------------------------------------
document.addEventListener('scroll', function() {
  // Select all of the things that are already faded:
  var fadeds = document.querySelectorAll('.fadable--faded');
  // For each one of them:
  Array.prototype.forEach.call(fadeds, function(el, i) {
    // Find its top edge:
    var elTop = el.getBoundingClientRect().top;
    // If its top edge is above -- a lesser number -- the bottom of the browser
    // viewport, less the distance defined earlier:
    if (elTop < (vpBottom - distFromVpBottom)) {
      // Remove the fadable--faded class from it:
      el.classList.remove('fadable--faded');
    }
  });
});
