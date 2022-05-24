<template>
  <v-container style="border-radius: 91px" class="mt-5">
    <v-row class="text-center">
      <v-col cols="12">
        <img
          :src="compu"
          @mouseover="compu = piano"
          @mouseout="compu = require('../assets/desktop.png')"
          class="my-3 mt-15 mb-5"
          contain
          height="200"
        />
        <img
          :src="require('../assets/Ale.jpeg')"
          height="200"
          class="ml-15 my-3 mt-15 mb-5"
          style="border-radius: 30px"
        />
      </v-col>

      <v-col class="mb-10">
        <h1 class="display-2 font-weight-bold mb-1">
          Hello, I'm <u style="text-decoration: underline">Ale G</u>
        </h1>
        <h1>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
        <br />

        <p
          class="subheading font-weight-light mb-10"
          style="font-family: 'Cantarell', sans-serif"
        >
          Third year Computer Science Student at Universidad del Valle de
          Guatemala.
          <br />
          <br />
          Currently working at <b>ALMA Project</b>
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
      typeArray: ['Full Stack Dev', 'Musician', 'Student'],
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
  height: 70%;
  background-color: #efece5;
}

h1 {
  span.typed-text {
    color: rgb(97, 95, 95);
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
