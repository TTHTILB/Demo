tools that are used:
1. vs code:
2. vue/vue template:
3. axios: An extension for HTTP request.
4. nodemon: Used in viewing changes of web in read time.
5. postman: Used to test HTTP request for backend.
6. express: A framwork to build server.
7. express generator: An extension to create server template.

techniques that are used:
1. v-show: show component in a condition.
    e.g: 
    in HTML:
    <ul class="about_ul" v-show="display">

    in js/ts:
    export default {
  data() {
    return {
      display:false
    };
  },
    

    
    
2. v-for: loop through a list.
    e.g:
    in HTML:
    <li class="news_div" v-for="item in items">
    <p v-html="item.contents"></p></li>

    in js/ts:
    export default {
  data() {
    return {
      items:['a', 'b', 'c']
    };
  },
    


3. v-html: display content/text.
    e.g: see the example above

4. v-if: trigger actions/events in a condition.
    e.g:
    in HTML:
    <button id="music_start" @click="Display" v-if="!isDipslay">start</button>

    in js/ts:
    export default {
  data() {
    return {
      isPlaying: false,//control play or pause music
    };
  },


5. @click: click method in vue.
    e.g:
    see the example above
6. $props: parse value from mother to child.
    e.g:
    ShowStat.vue:
    in HTML:
    <h1 class="game_title">{{ title }}</h1>

    in js/ts:
    export default{
    /**using props to parse values from App.vue to ShowState.vue */
    props:[
        'title',
    ]

    App.vue:
    in HTML:
    <showstate :title = "title"/>
    in js/ts:
    export default {
    data(){
        return {
            title: 'Game News Spot',
        }
    }
}
7. $emit: parse value from child to mother.
    e.g:
    Music.vue:
    in HTML:
    <button id="music_start" @click="Display" v-if="!isDipslay">start</button>
    in js/ts:
      data() {
    return {
      isDipslay:false//show or hide buttons
    };
  },
    methods:{
        Display(){
        this.isDipslay = !this.isDipslay
        this.$emit('_display', this.isDipslay)//parse value from child to mother
    },
    }

    App.vue:
    in HTML:
    <playmusic @_display = "ReceiveDisplay"/>

    in js/ts:
    data(){
        return {
            display:false 
        }
    },
    methods:{
      ReceiveDisplay(_display){
        this.display = _display
      }
    }
8. Routing: avoid frequent refresh to a page.
    e.g:
    main.ts:
    import Form from './components/Form.vue'
    import About from './components/About.vue'

    const router = createRouter({
        history: createWebHistory(),
        routes:[{path:'/about', name: 'about', component:About},
            {path: '/', name:'form', component:Form}
        ]
    })

    App.vue:
    in HTML:
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link><br>
      <router-view />

To run this web app:
npm create vue@latest (used to create a project)

add typescript (Yes)

cd <project name>

npm install

npm install cors axios -s

npm install vue-router@4

(npm i -g nodemon)

copy and paste the src folder and index.html to directory

express <name>

cd <server name>

npm install express cors axios -s

npm install -g express-generator

copy and paste all contents (files and folders) inside demo-server to your created server directory

run the server first:
npm start

start a new terminal

then run web app:
npm run dev