<template>
<div class="login">
    <img class="logo" src="../assets/resto-logo.png" />
    <h1>Login</h1>

    <input type="text" v-model="email" placeholder="e mail" />
    <input type="password" v-model="password" placeholder="password" />
    <button v-on:click="login">Login</button>
</div>
<p>
    <router-link to='/signup'>Sign UP</router-link>
</p>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            console.warn(result);
            if (result.status == 200 & result.data.length > 0)
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            this.$router.push({
                name: 'HomePage'
            })
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if (user) {
                this.$router.push({
                    name: 'HomePage'
                })
            }
        }
    }
}
</script>
