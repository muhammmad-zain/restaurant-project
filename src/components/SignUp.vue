<template>
<img class="logo" src="../assets/resto-logo.png" />
<h1>sign up</h1>
<div class="register">
<input type="text" v-model="name" placeholder="Name" />
<input type="text" v-model="email"  placeholder="E mail" />
<input type="password" v-model="password"  placeholder="password" />
<button v-on:click="SignUp">Sign Up</button></div>
<p>
<router-link to='/login'>Login</router-link>
</p>

</template>

<script>
import axios from 'axios'
export default{
    name : 'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
                    }
    },
    methods:{
       async SignUp() 
        {
            console.warn("signup", this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/user",
            {
                email:this.email,
                name:this.name,
                passsword:this.password
            });
            console.warn(result);
            
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'HomePage'})
        }
    },
    mounted(){
        let user= localStorage.getItem('user-info');
        if (user){
            this.$router.push({name:'HomePage'})
        }
    }
}
</script>
<style>

</style>