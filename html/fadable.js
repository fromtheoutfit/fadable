if ('IntersectionObserver' in window) {
  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(el) {
      if (el.intersectionRatio > 0) {
        // Opacity and scale when the element is in view:
        el.target.style.opacity = '1'
        el.target.style.transform = 'scale(1.0)'
      } else {
        // Configure: Opacity and scale when the element is out of view:
        el.target.style.opacity = '0'
        el.target.style.transform = 'scale(0.95)'
        // Configure: Animation duration:
        el.target.style.transitionDuration = '0.75s, 0.75s'
        el.target.style.transitionProperty = 'opacity, transform'
        // Configure: Animation timing function:
        el.target.style.transitionTimingFunction = 'ease-out, ease-out'
      }
    })
  }, {
    // Configure: The distance from the browser viewport’s edges.
    // The order is top edge, right edge, bottom edge, and left edge.
    rootMargin: '-40px 0px -40px 0px'
  })
  document.querySelectorAll('.fadable').forEach(function(targetEl) {
    observer.observe(targetEl)
  })
}