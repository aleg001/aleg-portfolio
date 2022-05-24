<template>
  <v-app>
    <v-app-bar app color="white" style="position: fixed">
      <v-spacer></v-spacer>
      <bar-buttons></bar-buttons>
    </v-app-bar>

    <v-main style="background-color: #96a39b">
      <PortfolioMain />
      <Second />
    </v-main>
  </v-app>
</template>

<script>
import BarButtons from './components/BarButtons.vue'
import PortfolioMain from './components/PortfolioMain.vue'
import Second from './components/Skills.vue'

export default {
  name: 'App',

  components: {
    PortfolioMain,
    Second,
    BarButtons,
  },

  data: () => ({
    //
  }),
}
</script>
