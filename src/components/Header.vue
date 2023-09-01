<template>

<div class="header">
<router-link to="/home">Home</router-link>
<router-link to="add">add resturent</router-link>

<a v-on:click="logOut" href="#">LogOut</a>
</div>
</template>
<script>
export default{
    name:'Header',
    methods:{
        logOut(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style>
.header{
    background-color:#333;
    overflow:hidden;
}
.header a{
     float:left;
    color:white;
    text-align:center;
    padding:10px 14px;
    font-size:20px;
    margin-right:6px;
    text-decoration:none;
}
.header a:hover{
    background-color:green;
    color:skyblue;
}
</style>