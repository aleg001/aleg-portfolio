<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <img
          :src="piano"
          @mouseover="piano = compu"
          @mouseout="piano = require('../assets/piano.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Ale G</h1>
        <h1>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
        <br />

        <p class="subheading font-weight-regular">
          Third year Computer Science Student at Universidad del Valle de
          Guatemala
        </p>
        <p class="subheading font-weight-regular">
          pssss... hover over the piano ;)
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PortofolioMain',

  data: () => {
    return {
      piano: require('../assets/piano.png'),
      compu: require('../assets/desktop.png'),
      typeValue: '',
      typeStatus: true,
      typeArray: ['Full Stack Dev', 'Músico', 'Estudiante UVG'],
      typingSpeed: 80,
      erasingSpeed: 1,
      newTextDelay: 500,
      typeArrayIndex: 0,
      charIndex: 0,
    }
  },
  methods: {
    writeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        )
        this.charIndex += 1
        setTimeout(this.writeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.deleteText, this.newTextDelay)
      }
    },
    deleteText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.deleteText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0
        setTimeout(this.writeText, this.typingSpeed + 1000)
      }
    },
  },
  created() {
    setTimeout(this.writeText, this.newTextDelay + 400)
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}

h1 {
  span.typed-text {
    color: black;
  }
  span.cursor {
    display: inline-block;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }
}
@keyframes cursorBlink {
  49% {
    margin-left: 1%;
    background-color: gray;
  }
  50% {
    margin-left: 1%;
    background-color: transparent;
  }
  50% {
    margin-left: 1%;
    background-color: transparent;
  }
}
</style>
