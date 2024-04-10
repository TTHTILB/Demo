<template>
    <form @submit.prevent="displayLog">
        <label>Display count:
            <select class="form_count" v-model="count">
                <option class="form_option_c" value="5">5</option>
                <option class="form_option_c" value="10">10</option>
                <option class="form_option_c" value="20">20</option>
                <option class="form_option_c" value="50">50</option>
            </select><br>
        
        </label>
        
        <label>Game:
            <select class="form_appid" v-model="appid">
                <option class="form_option_a" value="1086940">Baldur's Gate 3</option>
                <option class="form_option_a" value="730">counter strike 2</option>
                <option class="form_option_a" value="271590">Grant Theft Auto 5</option>
                <option class="form_option_a" value="8500">EVE Online</option>
                <option class="form_option_a" value="553850">Helldivers 2</option>
                <option class="form_option_a" value="2358720">Black Myth: Wukong</option>
            </select >

            
            <button class="form_button" type="submit">search</button>
            
        </label>
        <div>
            <div><img :src = "_src" class="_img"></div>
            <ul>
                <li class="news_div" v-for="item in items" :key="item.gid">
                <a class = "header" :href="item.url" v-html="item.title "></a>
                <p v-html="item.contents"></p>
                <hr class="_hr">
                </li>
            </ul>
        </div>
    </form>
    
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            count:'5',
            _count:'',
            appid:'1086940',
            _appid:'',
            url:'',
            _src:'',
            items:[]
        }
    },
    methods:{
        /**HTTP request to express server*/ 
        displayLog(){
            this._count = this.count
            this._appid = this.appid
            this.url = 'http://127.0.0.1:3000/steam-news'//destination address
            console.log(this._appid);
            //-------------
            axios.post(this.url,{
                'appid':this._appid,//appid corresponds to game
                'count':this._count//how  many news  to display 
                
            })
            //callback method, return data in res
            .then(res => {
                console.log(res)
                this.items = res.data.appnews.newsitems
                console.log(this.items)
                this.dynamicBackground();
            })
            .catch(err => {
                console.log(err)
            })
            //--------------------
            //console.log(items);
            
        },
        /**check if which game is selected, and display the relative image */
        dynamicBackground(){
            if(this._appid=='1086940')
            {
                this._src = 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg'
            }
            else if(this._appid=='730')
            {
                this._src = 'https://cdn.akamai.steamstatic.com/steam/apps/730/ss_ef82850f036dac5772cb07dbc2d1116ea13eb163.1920x1080.jpg?t=1698860631'
            }
            else if(this._appid=='271590')
            {
                this._src = 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2Fgrand-theft-auto-v-gta-online-playstation-5-ps5-xbox-series-x-s-new-features-001.jpg?cbr=1&q=90'
            }
            else if(this._appid=='8500')
            {
                this._src = 'https://images.squarespace-cdn.com/content/v1/5f9f06c44dd1ed19b7080797/1604951584651-QEM70NQ8DOF1H7GWVICC/IohAwFi.jpg'
            }
            else if(this._appid=='553850')
            {
                this._src = 'https://image.api.playstation.com/vulcan/ap/rnd/202309/2116/3f1bd2f20b06047e0f029d44c909a2a58b45e7fc6ae1dd0f.jpg'
            }
            else if(this._appid=='2358720')
            {
                this._src = 'https://assetsio.gnwcdn.com/impressive-looking-black-myth-wukong-gets-new-12-minute-gameplay-video-1629458263082.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'
            }
        }
        
    }
    
}
</script>

<style>

</style>