<template>
  <v-container class="mt-10" style="border-radius: 30px">
    <v-row class="text-center mt-4" justify="center">
      <v-col cols="auto">
        <v-btn
          text
          class="no-uppercase font-weight-light"
          style="font-family: 'Cardo', serif; font-size: 28px"
          @click="$router.push('/about')"
          to="/about"
        >
          <span style="font-family: 'Cardo', sans-serif; text-transform: none"
            >About</span
          >
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          text
          class="no-uppercase font-weight-light"
          style="font-family: 'Cardo', serif; font-size: 28px"
          @click="$router.push('/portfolio')"
          to="/portfolio"
        >
          <span style="font-family: 'Cardo', sans-serif; text-transform: none"
            >Portfolio</span
          >
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          text
          href="mailto: gom20347@uvg.edu.gt"
          class="no-uppercase font-weight-light"
          style="font-family: 'Cardo', serif; font-size: 28px"
        >
          <span style="font-family: 'Cardo', sans-serif; text-transform: none"
            >Contact</span
          >
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SkillsDev',

  data: () => {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  height: 15%;
  background-color: #f2ebe0;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Cantarell&family=Oswald:wght@200&display=swap');
</style>
