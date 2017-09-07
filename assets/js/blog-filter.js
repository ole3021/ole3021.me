var containerEl = document.querySelector('.blogs')
var categoryFls = document.querySelectorAll('.blogs-filter .categories .filter')
var currentCategoryPlacehodler = document.querySelector('.blogs-filter .categories .placeholder a')

var mixer = mixitup(containerEl)

function handleTargetClick (e) {
  var targetEl

  if (!(targetEl = e.target).matches('.mix')) {
      // If clicked element is not a target, return
    return
  }

  mixer.remove(targetEl)
}

function handleCategoriesFilterClick (e) {
  var targetFl = e.target

  currentCategoryPlacehodler.innerHTML = targetFl.innerHTML
  categoryFls.forEach(function (filter) {
    filter.classList.toggle('dropdown-open')
  })
}

function showCategoriesList (e) {
  categoryFls.forEach(function (filter) {
    filter.classList.toggle('dropdown-open')
  })
}

containerEl.addEventListener('click', handleTargetClick)
currentCategoryPlacehodler.addEventListener('click', showCategoriesList)
categoryFls.forEach(function (filter) {
  filter.addEventListener('click', handleCategoriesFilterClick)
})
