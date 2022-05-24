<template>
  <v-container class="mt-10" style="border-radius: 30px">
    <v-row class="text-center mt-4" justify="center">
      <v-col cols="auto">
        <v-btn
          href="https://api.whatsapp.com/send?phone=50250176509&text=Informaci%C3%B3n%20de%20servicios%20tecnol%C3%B3gicos"
          target="_blank"
          text
          class="no-uppercase font-weight-bold"
          style="font-size: 23px"
        >
          <span style="font-family: 'Abel', sans-serif; text-transform: none"
            >About</span
          >
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          href="mailto: gom20347@uvg.edu.gt"
          target="_blank"
          text
          class="no-uppercase font-weight-bold"
          style="font-family: 'Cardo', serif; font-size: 23px"
        >
          <span style="font-family: 'Abel', sans-serif; text-transform: none"
            >Portfolio</span
          >
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          href="https://github.com/aleg001/aleg-portfolio"
          target="_blank"
          text
          class="no-uppercase font-weight-bold"
          style="font-size: 23px"
        >
          <span style="font-family: 'Abel', sans-serif; text-transform: none"
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
