<template>
<Header/>
<h1>Hello , Welcome On Update Resturent Page</h1>
<form class="add">
<input type="text" placeholder="enter name" name="name" v-model="this.resturent.name" />
<input type="text" placeholder="enter address" name="address" v-model="this.resturent.address" />
<input type="text" placeholder="enter contact" name="contact" v-model="this.resturent.contact" />
<button type="button" v-on:click="updateResturent">Update resturent</button>
</form>


</template>
<script>
 import Header from './Header.vue'
 import axios from 'axios'
export default{
    
    name:"update resturent",
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
      async  updateResturent(){
            
            
            console.warn(this.resturent)
            let result= await  axios.put("http://localhost:3000/restaurent/"+this.$route.params.id,{
                name:this.resturent.name,
                address:this.resturent.address,
                contact:this.resturent.contact,
        });
        if(result.status==200){
                this.$router.push({name:'HomePage'});
            }
    }
    },
      async mounted(){
        let user= localStorage.getItem('user-info');
        if (!user){
            this.$router.push({name:'SignUp'})
        }
        const result= await axios.get("http://localhost:3000/restaurent/"+this.$route.params.id);
       
        this.resturent=result.data
    }
    
}

</script>