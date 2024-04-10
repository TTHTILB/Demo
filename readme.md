## Tools Used:
1. **VS Code**: Integrated Development Environment (IDE).
2. **Vue/Vue Template**: Frontend JavaScript framework for building user interfaces.
3. **Axios**: An extension for making HTTP requests from the frontend.
4. **Nodemon**: Utility for automatically restarting the server when changes are detected.
5. **Postman**: API testing tool for sending HTTP requests and viewing responses.
6. **Express**: Backend framework for building server-side applications.
7. **Express Generator**: Command-line tool for generating Express application scaffolding.







## Techniques Used:

1. **v-show**: Conditionally show a component.
   - **Example**:
     ```html
     <ul class="about_ul" v-show="display">
     ```
     ```javascript
     export default {
       data() {
         return {
           display: false
         };
       },
     }
     ```

2. **v-for**: Loop through a list.
   - **Example**:
     ```html
     <li class="news_div" v-for="item in items">
       <p v-html="item.contents"></p>
     </li>
     ```
     ```javascript
     export default {
       data() {
         return {
           items: ['a', 'b', 'c']
         };
       },
     }
     ```

3. **v-html**: Display content/text.
   - **Example**: See the example above.

4. **v-if**: Trigger actions/events in a condition.
   - **Example**:
     ```html
     <button id="music_start" @click="Display" v-if="!isDipslay">start</button>
     ```
     ```javascript
     export default {
       data() {
         return {
           isPlaying: false // Control play or pause music
         };
       },
     }
     ```

5. **@click**: Click method in Vue.
   - **Example**: See the example above.

6. **$props**: Parse value from mother to child.
   - **Example**:
     - *ShowStat.vue*:
       ```html
       <h1 class="game_title">{{ title }}</h1>
       ```
       ```javascript
       export default {
         props: ['title'],
       }
       ```
     - *App.vue*:
       ```html
       <showstate :title="title" />
       ```
       ```javascript
       export default {
         data() {
           return {
             title: 'Game News Spot',
           }
         }
       }
       ```

7. **$emit**: Parse value from child to mother.
   - **Example**:
     - *Music.vue*:
       ```html
       <button id="music_start" @click="Display" v-if="!isDipslay">start</button>
       ```
       ```javascript
       export default {
         data() {
           return {
             isDipslay: false // Show or hide buttons
           };
         },
         methods: {
           Display() {
             this.isDipslay = !this.isDipslay;
             this.$emit('_display', this.isDipslay); // Parse value from child to mother
           },
         }
       }
       ```
     - *App.vue*:
       ```html
       <playmusic @_display="ReceiveDisplay" />
       ```
       ```javascript
       export default {
         data() {
           return {
             display: false,
           }
         },
         methods: {
           ReceiveDisplay(_display) {
             this.display = _display;
           }
         }
       }
       ```

8. **Routing**: Avoid frequent refresh to a page.
   - **Example**:
     - *main.ts*:
       ```javascript
       import Form from './components/Form.vue'
       import About from './components/About.vue'

       const router = createRouter({
           history: createWebHistory(),
           routes:[{path:'/about', name: 'about', component:About},
               {path: '/', name:'form', component:Form}
           ]
       })
       ```
     - *App.vue*:
       ```html
       <router-link to="/">Home</router-link>|
       <router-link to="/about">About</router-link><br>
       <router-view />
       ```


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