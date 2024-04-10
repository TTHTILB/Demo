<template>
    <form @submit.prevent="displayLog">
        <label>input steam id
        <input type="text" required v-model="steam_id">
        <h1>{{ output }}</h1>
        
        </label>
        <label>input game appid
            <input type="text" required v-model="appid">
            <p>{{ items }}</p>
        </label>
        <button type="submit">Submit</button>
    </form>
    
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            steam_id:'',
            output:'',
            appid:'',
            _appid:'',
            key:'44000E5DD5CBF014BBE0691A620D68C8',
            url:'',
            items:[]
        }
    },
    methods:{
        displayLog(){
            this.output = this.steam_id
            this._appid = this.appid
            this.url = 'http://127.0.0.1:3000/api'
            console.log(this.steam_id);
            //-------------
            axios.post(this.url,{
                'appid':this.appid,
                'key':this.key,
                'steamid':this.steam_id
                
            })
            .then(res => {
                console.log(res)
                console.log(res.data.playerstats.achievements)
                this.items = res.data.playerstats.achievements
            })
            .catch(err => {
                console.log(err)
            })
            //--------------------
            console.log(items);
        }
    }
    
}
</script>

<style>

</style>