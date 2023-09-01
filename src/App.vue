<template>

<router-view />
</template>

<script>
export default {
    name: 'App'

}
</script>

<style>
#app {
    font-family: Awenir, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    

},
body{
    margin:0px;
    padding:0px;
}
.logo{
    width:150px;
}
.register input, .login input, .add input {
        border: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button,.login button, .add button{
    width: 180px;
    height: 40px;
    border: 1px solid;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>
