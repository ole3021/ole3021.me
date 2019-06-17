<template>
  <section class="hero is-medium is-primary has-background">
    <img class="hero-background is-transparent" src="images/austria.jpg" alt="background">
    <div class="hero-body">
      <div class="container">
        <aside class="avatar">
          <figure class="image is-256x256">
            <img
              class="is-rounded"
              src="images/alex.jpg"
              srcset="images/alex.jpg 1x, images/alex@2x.jpg 2x, images/alex@3x.jpg 3x, images/alex@4x.jpg 4x"
              alt="Portrait of Oliver Wang"
            >
          </figure>
        </aside>
        <main class="about">
          <h1 class="name">Hi, I'm Oliver Wang</h1>
          <p
            class="job"
          >I'm a Backend Developer, Architect, Scrum Master, and Open-Source Contributor</p>
          <hr class="hr">
          <div class="description">
            <p>I use TypeScript, Node.js, GraphQL, Nest.js, Flutter, MongoDB, PostgreSQL, etc</p>
          </div>
          <div class="contact">
            <a class="button is-light" href="mailto: ole3021@gmail.com">Get in touch</a>
          </div>
          <ul class="social">
            <li>
              <a href="https://github.com/ole3021" target="_blank">
                <i class="fab fa-github"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ole3021/" target="_blank">
                <i class="fab fa-linkedin"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ole3021" target="_blank">
                <i class="fab fa-twitter"/>
              </a>
            </li>
          </ul>
        </main>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@import "../node_modules/bulma/sass/utilities/_all.sass"

.hero
  &.has-background
    position: relative
    overflow: hidden
  &-background
    position: absolute
    object-fit: cover
    object-position: center center
    width: 100%
    height: 100%
    &.is-transparent
      opacity: 0.3


.container
  display: flex
  justify-content: space-around
  justify-content: space-evenly
  align-items: center
  +touch
    flex-direction: column
  +desktop
    justify-content: space-around
    justify-content: space-evenly

.avatar
  +touch
    margin-bottom: 2rem
  +desktop
    order: 2


.about
  .name
    font-size: 2.25rem
    line-height: 1.125
    margin-bottom: 0.5rem
  .job,
    font-family: 'Monsterrat', 'Quicksand', sans-serif
    letter-spacing: 0.3rem
    text-transform: uppercase
  .hr
    background-color: #ff470f
    border: none
    content: ''
    height: 4px
    margin: 1rem 0
    transform-origin: center left
    width: 4rem
  .contact
    margin-top: 1rem
  .social
    display: flex
    margin-top: 1rem
    li
      margin-right: 0.7rem
      text-align: center
      height: 2rem
      width: 2rem
    a
      align-items: center
      font-size: 1.9rem
      opacity: 0.5
      will-change: opacity, transform
      transition-duration: 0.3s
    a:hover
      opacity: 1
      transition-duration: 0.3s
    a:active
      opacity: 1
</style>
