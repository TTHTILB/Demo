<script >

export default {


  name:'App',
  
  data(){
        return {
            /**declare variables */
            title: 'Game News Spot',
            describe: 'No Game No Life!!!',
            display:false //control show and hide of the page
        }
    },
    methods:{
      /**this method takes boolean var and parse it to and built in method v-show */
      ReceiveDisplay(_display){
        this.display = _display
      }
    }
}
</script>

<template>
  <!--playmusic component, a custom method _display is used to parse value from child component to mother component-->
  <playmusic @_display = "ReceiveDisplay"/>
  <div class="overall" v-show="display">
    <div class="title">
      <!--showstate component-->
      <showstate 
      :title = "title"/>
      <showstate
      :describe = "describe "/>  
      
    </div>
    <!--router component-->
    <div class="content">
      <div class="router_v">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link><br>
      </div>
    <!--where the content of router component displays-->
      <router-view />
    </div>

  </div>
</template>

<style>
.test{
  color: blue;
}
.test2{
  color: aqua;
}

</style>
