<template>
    <div>
      <button id="music" @click="togglePlayback" v-show="isDipslay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
      <button id="music_start" @click="Display" v-if="!isDipslay">start</button>
    </div>
  </template>
  
  <script>
  import audioFile from '@/assets/made-arrangement-genshin-impact.mp3'; // Replace 'audio.mp3' with your audio file path
  export default {
  data() {
    return {
      isPlaying: false,//control play or pause music
      audio: new Audio(audioFile),//create an audio object
      isDipslay:false//show or hide buttons
    };
  },
  methods: {
    /**control display of some components */
    Display(){
        this.isDipslay = !this.isDipslay
        this.$emit('_display', this.isDipslay)//parse value from child to mother
        this.togglePlayback()
    },
    /**provide control of play or pause to the music */
    togglePlayback() {
        //check if music is playing
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }
};
</script>