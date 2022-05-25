<template>
  <v-container class="mt-15">
    <h1
      class="tracking-in-expand text-center display-3 font-weight-bold mt-5"
      style="font-family: 'Abel', sans-serif"
    >
      [ Skills ]
    </h1>

    <v-row>
      <v-card
        class="mx-auto mt-15 rounded-lg blur-in"
        color="#6C757C"
        max-width="344"
        max-height="500"
        rounder
      >
        <v-img
          src="https://blogthinkbig.com/wp-content/uploads/sites/4/2019/03/Python-Example-Logo-e1555498232969.jpg?resize=450%2C220"
          height="100px"
        ></v-img>

        <v-card-title style="font-weigth: bold; color: white">
          Python
        </v-card-title>

        <v-container>
          <progress-bar size="large" val="85" bar-color="#A8B5E0">
          </progress-bar>
        </v-container>

        <v-card-text style="color: white">
          Python was the first programming language that I learned.</v-card-text
        >
      </v-card>

      <v-card
        class="mx-auto mt-15 rounded-lg blur-in"
        max-width="344"
        max-height="500"
      >
        <v-img
          src="https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png"
          height="100px"
        ></v-img>

        <v-card-title> Vue JS </v-card-title>

        <v-container>
          <progress-bar size="large" val="80" bar-color="#6C759C">
          </progress-bar>
        </v-container>

        <v-card-text>
          The first framework that I used, this entire portfolio is made on Vue
          JS.</v-card-text
        >
      </v-card>

      <v-card
        class="mx-auto mt-15 rounded-lg blur-in"
        color="#6C757C"
        max-width="344"
        max-height="500"
      >
        <v-img
          src="https://edteam-media.s3.amazonaws.com/blogs/original/3a0fa242-1b90-42bf-831d-5ea432759ab0.jpg"
          height="100px"
        ></v-img>

        <v-card-title style="color: white"> React </v-card-title>

        <v-container>
          <progress-bar size="large" val="60" bar-color="#A8B5E0">
          </progress-bar>
        </v-container>

        <v-card-text style="color: white">
          One of the frameworks that I enjoy using to build Front End projects
          quickly.
        </v-card-text>
      </v-card>
    </v-row>

    <v-row>
      <v-card
        class="mx-auto mt-15 rounded-lg blur-in"
        max-width="344"
        max-height="500"
      >
        <v-img src="https://i.imgur.com/x1AJ8Tp.jpeg" height="100px"></v-img>

        <v-card-title> C# </v-card-title>

        <v-container>
          <progress-bar size="large" val="35" bar-color="#6C759C">
          </progress-bar>
        </v-container>

        <v-card-text>
          I have used C# primarily for Game Dev, on Unity.</v-card-text
        >
      </v-card>

      <v-card
        class="mx-auto mt-15 rounded-lg blur-in"
        color="#6C757C"
        max-width="344"
        max-height="500"
      >
        <v-img
          src="https://geekflare.com/wp-content/uploads/2021/06/postgresql-installation-1200x385.jpg"
          height="100px"
        ></v-img>

        <v-card-title style="color: white">PostgreSQL </v-card-title>

        <v-container>
          <progress-bar size="large" val="60" bar-color="#A8B5E0">
          </progress-bar>
        </v-container>

        <v-card-text style="color: white"
          >My main backend technology. Used on various of my projects.
        </v-card-text>
      </v-card>

      <v-card class="mx-auto mt-15 rounded-lg blur-in" max-width="344">
        <v-img
          src="https://i.ytimg.com/vi/BKmzY8Bu8GY/maxresdefault.jpg"
          height="100px"
        ></v-img>

        <v-card-title> Assembler </v-card-title>

        <v-container>
          <progress-bar size="large" val="40" bar-color="#6C759C">
          </progress-bar>
        </v-container>

        <v-card-text
          >Learned the basics of Assembler programming on a Raspberry
          Pi.</v-card-text
        >
      </v-card>
    </v-row>
    <v-row>
      <v-card
        class="mx-auto mt-15 mb-15 rounded-lg blur-in"
        color="#6C757C"
        max-width="344"
      >
        <v-img
          src="https://www.cursosgis.com/wp-content/uploads/1-52.jpg"
          height="100px"
        ></v-img>

        <v-card-title style="color: white"> Javascript </v-card-title>

        <v-container>
          <progress-bar size="large" val="85" bar-color="#A8B5E0">
          </progress-bar>
        </v-container>

        <v-card-text style="color: white"
          >Before starting with frameworks, I learned Javascript.</v-card-text
        >
      </v-card>

      <v-card
        class="mx-auto mt-15 mb-15 rounded-lg blur-in"
        max-width="344"
        max-height="500"
      >
        <v-img
          src="https://i.ytimg.com/vi/ni3LEc3kvas/maxresdefault.jpg"
          height="100px"
        ></v-img>

        <v-card-title> HTML/CSS </v-card-title>

        <v-container>
          <progress-bar size="large" val="90" bar-color="#6C759C">
          </progress-bar>
        </v-container>

        <v-card-text> The fundamentals of web development.</v-card-text>
      </v-card>

      <v-card
        class="mx-auto mt-15 mb-15 rounded-lg blur-in"
        color="#6C757C"
        max-width="344"
        max-height="500"
      >
        <v-img
          src="https://www.softzone.es/app/uploads-softzone.es/2020/09/Programar-Java.jpg"
          height="100px"
        ></v-img>

        <v-card-title style="color: white"> Java </v-card-title>

        <v-container>
          <progress-bar size="large" val="50" bar-color="#A8B5E0">
          </progress-bar>
        </v-container>

        <v-card-text style="color: white">
          I have used Java on some projects for college assignments.
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
export default {
  data: () => ({}),
  components: {
    ProgressBar,
  },
}
</script>

<style scoped>
/* ----------------------------------------------
  Generated by AnimatiSS
  Licensed under FreeBSD License
  URL: https://xsgames.co/animatiss
  Twitter: @xsgames_
---------------------------------------------- */

.blur-in {
  animation: blur-in 1s linear both;
}
@keyframes blur-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

/* ----------------------------------------------
  Generated by AnimatiSS
  Licensed under FreeBSD License
  URL: https://xsgames.co/animatiss
  Twitter: @xsgames_
---------------------------------------------- */

.tracking-in-expand {
  animation: tracking-in-expand 2s linear both;
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.2em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.glitch1 {
  animation: glitch 1s linear infinite;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(3px, 0) skew(0deg);
  }
  4%,
  60% {
    transform: translate(-3px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

.glitch1:before,
.glitch1:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.glitch1:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(2px, -2px);
  }
  4%,
  60% {
    transform: translate(-2px, 2px);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

.glitch1:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {
  2%,
  64% {
    transform: translate(-2px, 0);
  }
  4%,
  60% {
    transform: translate(-2px, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Cantarell&family=Oswald:wght@200&display=swap');
</style>
