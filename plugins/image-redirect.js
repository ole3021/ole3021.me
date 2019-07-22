import Vue from 'vue'

Vue.prototype.$updateBlogImagesSource = blogImages => {
  for (const img of blogImages) {
    img.src = `https://raw.githubusercontent.com/ole3021/blogs/master/blog-images/${
      img.src.split('blog-images/')[1]
    }`
  }
}
