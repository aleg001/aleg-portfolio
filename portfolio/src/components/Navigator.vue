<template>
  <v-container class="text-left" style="background-color: white">
    <v-btn
      text
      class="no-uppercase font-weight-bold"
      @click="$router.push('/')"
    >
      <span class="no-uppercase font-weight-bold">Home</span>
    </v-btn>
    <v-btn
      text
      class="no-uppercase font-weight-bold"
      @click="$router.push('/about')"
      to="/about"
    >
      <span class="no-uppercase font-weight-bold">About</span>
    </v-btn>

    <v-btn
      text
      class="no-uppercase font-weight-bold"
      @click="$router.push('/portfolio')"
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
