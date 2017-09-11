function updateArticle () {
  // window.scrollTo(0, 0)
  // var scrollTop = $(window).scrollTop();
  var blogParts = document.querySelectorAll('.markdown-body h2')
  var blogPartsLink = document.querySelectorAll('.progress a')
  var bottomOfBlogOffset = document.querySelector('.reference').offsetTop

  blogParts.forEach(function (blogTitle, index) {
    let partHeight = null

    if (index + 1 < blogParts.length) {
      partHeight = blogParts[index + 1].offsetTop - blogParts[index].offsetTop
    } else {
      partHeight = bottomOfBlogOffset - blogParts[index].offsetTop
    }

    if (blogTitle.offsetTop > window.scrollY) {
      blogPartsLink[index].classList.remove('read', 'reading')
    } else if (window.scrollY >= blogTitle.offsetTop && blogTitle.offsetTop + partHeight > window.scrollY) {
      blogPartsLink[index].classList.remove('read')
      blogPartsLink[index].classList.add('reading')
      const process = ((window.scrollY - blogTitle.offsetTop) /
      partHeight).toFixed(2)
        // TODO: update process bar
        console.log('>>>> process', process);
    } else {
      blogPartsLink[index].classList.remove('reading')
      blogPartsLink[index].classList.add('read')
    }
  })
}

window.addEventListener('scroll', function (e) {
  updateArticle()
})
