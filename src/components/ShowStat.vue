<template>
    <div class = "game">
        <h1 class="game_title">{{ title }}</h1>
        </div>
    <div>
        <h1 class="game_des">{{ describe }}</h1>
        </div>
    
    </template>

<script>
export default{
    /**using props to parse values from App.vue to ShowState.vue */
    props:[
        'title',
        'describe',
        
    ]
}

</Script>
