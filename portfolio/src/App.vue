<template>
  <v-app>
    <v-app-bar app color="black" dark style="position: fixed">
      <div class="d-flex align-center"></div>
      <v-btn
        href="https://api.whatsapp.com/send?phone=50250176509&text=Informaci%C3%B3n%20de%20servicios%20tecnol%C3%B3gicos"
        target="_blank"
        text
        class="no-uppercase font-weight-bold"
      >
        <span class="no-uppercase font-weight-bold">Whatsapp</span>
      </v-btn>
      <v-btn
        href="mailto: gom20347@uvg.edu.gt"
        target="_blank"
        text
        class="no-uppercase font-weight-bold"
      >
        <span class="no-uppercase font-weight-bold">Email</span>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/aleg001/aleg-portfolio"
        target="_blank"
        text
        class="no-uppercase font-weight-bold"
      >
        <span class="no-uppercase font-weight-bold">GitHub</span>
      </v-btn>

      <v-btn
        href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-60340219b/"
        target="_blank"
        text
        class="no-uppercase font-weight-bold"
      >
        <span class="no-uppercase font-weight-bold">LinkedIn</span>
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
