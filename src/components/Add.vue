<template>
<Header/>
<h1>Hello , Welcome On Add Resturent Page</h1>
<form class="add">
<input type="text" placeholder="enter name" name="name" v-model="this.resturent.name" />
<input type="text" placeholder="enter address" name="address" v-model="this.resturent.address" />
<input type="text" placeholder="enter contact" name="contact" v-model="this.resturent.contact" />
<button type="button" v-on:click="addResturent">Add New Resturent</button>
</form>

</template>
<script>
 import Header from './Header.vue'
 import axios from 'axios'
export default{
    
    name:"add resturent",
    components:{
        Header
    },
    data(){
        return{
            resturent:{
                name:'',
                address:'',
                contact:'',
            }
        }
    },
    methods:{
       async addResturent(){
            console.warn(this.resturent)
            let result= await  axios.post("http://localhost:3000/restaurent",{
                name:this.resturent.name,
                address:this.resturent.address,
                contact:this.resturent.contact,
            });
            if(result.status==201){
                this.$router.push({name:'HomePage'});
            }
            console.warn("result", result)
        }
    },
       mounted(){
        let user= localStorage.getItem('user-info');
        if (!user){
            this.$router.push({name:'SignUp'})
        }
    }
  
}
</script>