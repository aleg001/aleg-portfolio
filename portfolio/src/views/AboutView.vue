<template>
  <v-app>
    <v-app-bar app color="white" style="position: fixed">
      <Navigator />
      <v-spacer></v-spacer>
      <bar-buttons></bar-buttons>
    </v-app-bar>
    <skill-card></skill-card>
    <experience-card></experience-card>
  </v-app>
</template>

<script>
import BarButtons from '../components/BarButtons.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import Navigator from '../components/Navigator.vue'
import SkillCard from '../components/SkillCard.vue'

export default {
  name: 'AboutView',

  components: {
    BarButtons,
    Navigator,
    SkillCard,
    ExperienceCard,
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
