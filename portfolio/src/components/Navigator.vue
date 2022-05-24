<template>
  <v-container class="text-left" style="background-color: white">
    <v-btn
      href="https://api.whatsapp.com/send?phone=50250176509&text=Informaci%C3%B3n%20de%20servicios%20tecnol%C3%B3gicos"
      target="_blank"
      text
      class="no-uppercase font-weight-bold"
    >
      <span class="no-uppercase font-weight-bold">Homepage</span>
    </v-btn>
    <v-btn
      href="mailto: gom20347@uvg.edu.gt"
      target="_blank"
      text
      class="no-uppercase font-weight-bold"
    >
      <span class="no-uppercase font-weight-bold">About</span>
    </v-btn>

    <v-btn
      href="https://github.com/aleg001/aleg-portfolio"
      target="_blank"
      text
      class="no-uppercase font-weight-bold"
    >
      <span class="no-uppercase font-weight-bold">Portfolio</span>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'NavigatorBar',
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Abel', sans-serif;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Poppins:wght@200&family=Roboto&display=swap');
</style>
