var fadable = {

  fadeDistance: 200,
  fadeClass   : 'fadable--invisible',
  vpHeight    : null,
  fadeLine    : null,
  fadables    : null,
  resizeTimer : null,

  initialize: function() {
    fadable.inspectEnvironment();
    fadable.selectFadables();
    fadable.prepareFadables();
    fadable.bindEvents();
  },

  inspectEnvironment: function() {
    fadable.vpHeight = window.innerHeight;
    fadable.fadeLine = fadable.vpHeight - fadable.fadeDistance;
  },

  selectFadables: function() {
    fadable.fadables = document.querySelectorAll('.fadable');
  },

  prepareFadables: function() {
    Array.prototype.forEach.call(fadable.fadables, function(el, i) {
      if (el.getBoundingClientRect().top > fadable.vpHeight) {
        el.classList.add(fadable.fadeClass);
      }
    });
  },

  showInvisibles: function() {
    Array.prototype.forEach.call(fadable.fadables, function(el, i) {
      if (el.getBoundingClientRect().top < fadable.fadeLine) {
        el.classList.remove(fadable.fadeClass);
      }
    });
  },

  bindEvents: function() {
    document.addEventListener('scroll', function() {
      fadable.showInvisibles();
    });

    window.addEventListener('resize', function() {
      clearTimeout(fadable.resizeTimer);
      fadable.resizeTimer = setTimeout(function() {
        fadable.inspectEnvironment();
        fadable.prepareFadables();
        fadable.showInvisibles();
      }, 250);
    });
  }

}

document.onreadystatechange = function() {
  if (document.readyState == 'complete') {
    fadable.initialize();
  }
}
