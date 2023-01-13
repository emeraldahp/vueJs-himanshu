
<script>

import ProductTable from './ProductTable.vue'
export default {    
    name: "aboutyou",
    
    components: {
        ProductTable
    },



    data() {
        return{
            AboutForm:{
                inpFname1: "",
                inpLname1: "",
                inpPin1: "",
            }
        }
    },
    methods: {
        about:function(e){
            e.preventDefault()
            console.log( this.AboutForm.inpFname1, this.AboutForm.inpLname1, this.AboutForm.inpPin1)
            
            this.$router.push({ path:"/products",
            query : this.AboutForm
        });
            
        }
    }
    
}
</script>
<template>
    <div>
        
        <form  @submit.prevent = "getFormValues">
            First Name: <input type="text" v-model="AboutForm.inpFname1" name="fname">
            Last Name: <input type="text" v-model="AboutForm.inpLname1" name="lname">
            Pincode: <input type="text" v-model="AboutForm.inpPin1" name="pin">
            <button v-on:click='about'>Abt</button>
            
        </form>
        <!-- <product-table :message="AboutForm.inpFname1"/>-->
    </div>
</template>