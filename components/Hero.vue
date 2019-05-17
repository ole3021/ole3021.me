<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <aside class="side">
          <figure class="image">
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
            <p>I do Node.js, Flutter, Nest.js, Loopback, MongoDB, Rethink DB, etc</p>
          </div>
          <div class="contact">
            <a class="button is-dark" href="mailto: ole3021@gmail.com">Get in touch</a>
          </div>
          <ul class="social">
            <li>
              <a href="https://twitter.com/ole3021" target="_blank">
                <i class="fab fa-twitter"/>
              </a>
            </li>
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
          </ul>
        </main>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@import "../node_modules/bulma/sass/utilities/_all.sass"

.container
  display: flex
  position: relative
  min-height: 40vh
  // min-height: 70vh
  justify-content: space-around
  justify-content: space-evenly
  align-items: center
  +touch
    flex-direction: column

  +desktop
    justify-content: space-around
    justify-content: space-evenly
    
.about
  max-width: 37rem    

.side
  +touch
    max-height: 15rem
    max-width: 15rem
    margin-bottom: 2rem

  +desktop
    max-height: 20rem
    max-width: 20rem
    order: 2

.name 
  font-size: 2.25rem
  line-height: 1.125
  margin-bottom: 0.5rem

.hr 
  background-color: #ff470f
  border: none
  content: ''
  height: 4px
  margin-bottom: 1.5rem
  margin-top: 1.5rem
  transform-origin: center left
  width: 4rem

.job,
  font-family: 'Monsterrat', 'Quicksand', sans-serif
  letter-spacing: 0.3rem
  text-transform: uppercase

.contact
  margin-top: 1rem

.social
  display: flex
  margin-top: 1rem
  
  li
    margin-right: 0.5rem
    text-align: center
    height: 2rem
    width: 2rem

  a
    align-items: center
    font-size: 1.7rem
    opacity: 0.5
    will-change: opacity, transform

  a:hover
    opacity: 1
    // transform: scale(1.5) FIXME: not working

  a:active 
    opacity: 1
    // transform: scale(1) FIXME: not working
</style>
