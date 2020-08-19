export default function ({
  initialScale = 0.95,
  transitionDuration = 0.75,
  edgeDistance = 40
} = {}) {
  if (
    window.matchMedia('screen').matches &&
    !window.matchMedia('(prefers-reduced-motion:reduce)').matches &&
    'IntersectionObserver' in window
  ) {
    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(el) {
        if (el.intersectionRatio > 0) {
          el.target.style.opacity = '1'
          el.target.style.transform = 'scale(1.0)'
        } else {
          el.target.style.opacity = '0'
          el.target.style.transform = `scale(${initialScale})`
          el.target.style.transitionDuration = `${transitionDuration}s, ${transitionDuration}s`
          el.target.style.transitionProperty = 'opacity, transform'
          el.target.style.transitionTimingFunction = 'ease-out, ease-out'
        }
      })
    }, {
      rootMargin: `-${edgeDistance}px 0px -${edgeDistance}px 0px`
    })
    document.querySelectorAll('.fadable').forEach(function(targetEl) {
      observer.observe(targetEl)
    })
  }
}