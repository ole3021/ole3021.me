<template>
  <div class="box">
    <article class="content article-content">
      <h1>The Title of a content</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
      <h2>Second level</h2>
      <p>Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
    </article>
  </div>
</template>

<style lang="sass">
@import "../node_modules/bulma/sass/utilities/_all.sass"

.box
  position: absolute
  z-index: 0
  +desktop
    font-size: $size-large
    margin: 4rem 9rem
    margin-top: -20rem 
  +touch
    font-size: $size-medium
    margin: 2rem 6rem
    margin-top: -20rem 
  +mobile
    font-size: $size-small
    margin: 1rem 1rem
    margin-top: -20rem 

.article-content
  margin: 1rem 1rem
</style>
