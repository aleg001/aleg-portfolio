<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/aleg001/aleg-portfolio"
        target="_blank"
        text
      >
        <span class="mr-2">GitHub</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <PortfolioMain />
    </v-main>
  </v-app>
</template>

<script>
import PortfolioMain from './components/PortfolioMain.vue'

export default {
  name: 'App',

  components: {
    PortfolioMain,
  },

  data: () => ({
    //
  }),
}
</script>
