<template>
  <v-container class="mt-15">
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

        <v-card-text> My favorite framework, used on this project.</v-card-text>
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

        <v-card-text style="color: white"> TO DO </v-card-text>
      </v-card>
    </v-row>

    <v-row>
      <v-card
        class="mx-auto mt-15 rounded-lg blur-in"
        max-width="344"
        max-height="500"
      >
        <v-img
          src="https://www.softzone.es/app/uploads-softzone.es/2022/03/programar-c.jpg?x=480&y=375&quality=40"
          height="100px"
        ></v-img>

        <v-card-title> C++ </v-card-title>

        <v-container>
          <progress-bar size="large" val="35" bar-color="#6C759C">
          </progress-bar>
        </v-container>

        <v-card-text> TODO</v-card-text>
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

        <v-card-text style="color: white">TODO </v-card-text>
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

        <v-card-text> TODO</v-card-text>
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

        <v-card-text style="color: white"> TODO</v-card-text>
      </v-card>

      <v-card
        class="mx-auto mt-15 mb-15 rounded-lg blur-in"
        max-width="344"
        max-height="500"
      >
        <v-img
          src="https://www.imaginanet.com/thumb.php?n=blog%2F10herramientas.jpg&w=640&h=250&x=0&y=0"
          height="100px"
        ></v-img>

        <v-card-title> HTML/CSS </v-card-title>

        <v-container>
          <progress-bar size="large" val="90" bar-color="#6C759C">
          </progress-bar>
        </v-container>

        <v-card-text> TODO</v-card-text>
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

        <v-card-text style="color: white"> TODO</v-card-text>
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
  animation: blur-in 0.6s linear both;
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
</style>
