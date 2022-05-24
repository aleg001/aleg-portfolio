<template>
  <v-app>
    <v-app-bar app color="white" style="position: fixed">
      <NavigatorVue />
      <v-spacer></v-spacer>
      <bar-buttons></bar-buttons>
    </v-app-bar>

    <v-main style="background-color: #96a39b">
      <PortfolioMain />
      <ContactInfo />
    </v-main>
  </v-app>
</template>

<script>
import BarButtons from '../components/BarButtons.vue'
import ContactInfo from '../components/Menu.vue'
import NavigatorVue from '../components/Navigator.vue'
import PortfolioMain from '../components/PortfolioMain.vue'

export default {
  name: 'App',

  components: {
    PortfolioMain,
    ContactInfo,
    BarButtons,
    NavigatorVue,
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
