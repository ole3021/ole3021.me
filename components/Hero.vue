<template>
  <div class="hero">
    <div class="wallpaper"></div>
    <div class="content">
      <aside class="side">
        <figure class="picture">
          <div class="picture-shadow"></div>
          <img
            id="pictureImage"
            class="picture-image"
            src="images/alex.jpg"
            srcset="images/alex.jpg 1x, images/alex@2x.jpg 2x, images/alex@3x.jpg 3x, images/alex@4x.jpg 4x"
            alt="Portrait of Alex Jefferson"
            width="320"
            height="320"
          >
        </figure>
      </aside>
      <main class="about">
        <h1 class="name">Hi, I'm Alex Jefferson</h1>
        <p class="job">Tech recruiter</p>
        <hr class="hr">
        <div class="description">
          <p>I spend my time traveling the world, helping startups and tech business hire the best people.</p>
        </div>
        <div class="contact">
          <a class="button" href="mailto: ole3021@gmail.com">Get in touch</a>
        </div>
        <ul class="social">
          <li>
            <a>
              <i class="fab fa-twitter"/>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-github"/>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-linkedin"/>
            </a>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<style>
.wallpaper {
  background-image: url('../static/images/austria.jpg');
  background-position: center;
  background-size: cover;
  opacity: 0.2;
  position: fixed;
}

.content {
  display: flex;
  position: relative;
  min-height: 80vh;
}

.side {
  max-height: 20rem;
  max-width: 20rem;
}

.about {
  max-width: 26rem;
}

@media screen and (max-width: 799px) {
  .content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 3rem;
  }

  .side {
    margin-bottom: 3rem;
    width: 100%;
  }
}

@media screen and (min-width: 800px) {
  .content {
    align-items: center;
    justify-content: space-around;
    justify-content: space-evenly;
    padding: 4rem;
  }

  .side {
    flex-grow: 0;
    flex-shrink: 0;
    height: 20rem;
    margin-left: 4rem;
    order: 2;
    width: 20rem;
  }

  .about {
    flex-grow: 1;
    flex-shrink: 1;
  }
}

.job {
  color: #ffe479;
  font-size: 0.75rem;
}

.hr {
  background-color: #ff470f;
  border: none;
  content: '';
  height: 1px;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  transform-origin: center left;
  width: 4rem;
}

.description {
  font-size: 1.5rem;
}

.contact {
  display: inline-block;
  margin-top: 1.5rem;
  vertical-align: top;
}

.button {
  background-color: #fff;
  border-radius: 290486px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: #9013fe;
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1;
  padding: 1.25em 2em;
  text-shadow: none;
  transition-property: box-shadow, transform;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  will-change: box-shadow, transform;
}

.social {
  display: flex;
  margin-top: 1.5rem;
}

.social li {
  height: 2rem;
  margin-right: 0.5rem;
  text-align: center;
  width: 2rem;
}

.social a {
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: center;
  opacity: 0.5;
  transition-property: opacity, transform;
  width: 2rem;
  will-change: opacity, transform;
}

.social a:hover {
  opacity: 1;
  transform: scale(1.25);
}

.social a:active {
  opacity: 1;
  transform: scale(1.1);
}
</style>
