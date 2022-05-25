<template>
  <v-app>
    <v-app-bar app color="white" style="position: fixed">
      <Navigator />
      <v-spacer></v-spacer>
      <bar-buttons></bar-buttons>
    </v-app-bar>

    <v-main style="background-color: #96a39b">
      <h1
        class="tracking-in-expand text-center display-3 font-weight-bold mt-5"
        style="font-family: 'Abel', sans-serif; color: white"
      >
        [ Portfolio ]
      </h1>
      <ProjectGrid style="background-color: #96a39b"></ProjectGrid>
    </v-main>
  </v-app>
</template>

<script>
import ProjectGrid from '@/components/ProjectGrid.vue'
import BarButtons from '../components/BarButtons.vue'
import Navigator from '../components/Navigator.vue'

export default {
  name: 'PortfolioView',

  components: {
    BarButtons,
    Navigator,
    ProjectGrid,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Cantarell&family=Oswald:wght@200&display=swap');
</style>

<!--
  FONTS:
  1) Titulos
  2) Subtitulos
  3) Parrafos
font-family: 'Oswald', sans-serif;
font-family: 'Abel', sans-serif;
font-family: 'Cantarell', sans-serif;

-->
