<template>
    <!--formatting info-->
    <div class="about_body">
        <h1 class="about_header1">Tools and Techniques used:</h1>
        <button class="about_button" @click="isDisplay">show/hide</button>
        <ul class="about_ul" v-show="display">
            <li class ="about_ul" >
                <p v-for="text in texts" :key="text">
                <a class="about_a" v-html="text"></a>
                </p>
            </li>
            <hr>
            <h1 class="about_header1">Provider of API service:</h1>
            <li class ="about_ul">
                <a class="about_a" v-html="text2"></a>
            </li>
            <li class ="about_ul">
                <h2 class="about_header1" v-html="text3"></h2>
                <h3 class="about_header1" v-html="text4_header"></h3><br><hr>
                <a class="about_a" v-html="text4_intro"></a><br>
                <a class="about_a" v-html="text4_link_instance"></a><br>
                
                <a class="about_a" v-for="(content, index) in text4_contents" :key="index">
                    <li><strong>{{ content }}</strong><br></li>
                
                    <span>{{ text4_content_descriptions[index] }}</span><br>
                </a>
                        
                
            </li>
            <b class="about_b" v-html="text4_des"></b><br>  
            <li class ="about_ul" v-for="(content, index) in text4_content2" :key="index">
                    <a class="about_a" v-html="content"></a>
            </li>
            
        </ul>
        
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            display:false,
            texts:['Express JS','Express application generator', 'VUE', 'nodemon', 'postman API platform', 'libraries and dependencies like cors/axios/routers'],
            text2:'steam API and steam DB',
            text3:'Specification of how to access steam API used in this web page:',
            text4_header:'GetNewsForApp (v0002):',
            text4_intro:'GetNewsForApp returns the latest of a game specified by its appID.',
            text4_link_instance:'Example URL: http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json',
            text4_header2:'Arguments',
            text4_contents: [
                'appid:',
                'count:',
                'maxlength:',
                'format:'
            ],
            text4_content_descriptions: [
                'AppID of the game you want the news of.',
                'How many news entries you want to get returned.',
                'Maximum length of each news entry.',
                'Output format. json (default), xml or vdf.'
            ],
            text4_header3:'Result layout',
            text4_des:'An appnews object containing:',
            text4_content2:['appid, the AppID of the game you want news of', 
                            'newsitems, an array of news item information:', 
                            'An ID, title and url.', 
                            'A shortened excerpt of the contents (to maxlength characters), terminated by "..." if longer than maxlength.', 
                            'A comma-separated string of labels and UNIX timestamp.'
                        ]
        }
        
    },
    methods:{
        /**content display control */
        isDisplay(){
            this.display = !this.display;
        }

    }
}

</script>
<style>

</style>