var containerEl = document.querySelector('.blogs')

var mixer = mixitup(containerEl)

function handleTargetClick (e) {
  var targetEl

  if (!(targetEl = e.target).matches('.mix')) {
      // If clicked element is not a target, return
    return
  }

  mixer.remove(targetEl)
}

containerEl.addEventListener('click', handleTargetClick)
