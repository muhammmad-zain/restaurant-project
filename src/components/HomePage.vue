<template>
<Header />
<h1>Hello {{name}} , Welcome On Home Page</h1>
<table border="1">
<tr>
<td>id</td>
<td>name</td>
<td>address</td>
<td>contact</td>
<td>Action</td>
</tr>

<tr v-for="item in resturents" :key="item.id">
<td>{{item.id}}</td>
<td>{{item.name}}</td>
<td>{{item.address}}</td>
<td>{{item.contact}}</td>
<td><router-link :to="'/update/'+item.id">Update</router-link>

</td>
<button v-on:click="deleteResturent(item.id)">Delete</button>

</tr>
</table>
</template>
<script>
import axios from 'axios'
 import Header from './Header.vue'
export default{
    
    name:"HomePage",
    
        data(){
            return{
                name:'',
                resturents:[],
            }
        },
        components:{
        Header
    },
    methods:{
       async  deleteResturent(id){
                 let result= await axios.delete("http://localhost:3000/restaurent/"+id);
                 if (result.status==200){
                 this.loadresturent()
                 }
        
    },
   async loadresturent(){
         let user= localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if (!user){
            this.$router.push({name:'SignUp'})
        }
        let result= await axios.get("http://localhost:3000/restaurent");
       
        this.resturents=result.data;
    }
    },
     mounted(){
          let user= localStorage.getItem('user-info');
       
          if (!user) {
                this.$router.push({
                    name: 'Login'
                })
            }
     }
}
</script>
<style>
td{
    width:150px;
    height:40px;
}
</style>