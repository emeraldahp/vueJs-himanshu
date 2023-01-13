<script>
export default {
    name: "compone",
    data(){
        return{
            modData: 'hi'
        }
    },
    methods:{
        changeData(){
            this.$store.commit("changeData1", "I am new data");
        },
        changeDataT2() {
            this.$store.commit({
                type:"changeData1T2",
                data1: "yay, i got changed from type2"
            })
        },
        FirstWordData(){
            this.modData = this.$store.getters.firstWordData1
        }
    }
    
}

</script>

<template>
<div>
    CompOne<br>
    Data1: {{this.$store.state.data1}} <br>
    FirstWord: {{this.modData}} <br>
    <button @click="FirstWordData">GetFirstWord</button>
    <button @click='changeData'>ChangeData1</button>
    <button @click="changeDataT2">Change using Type2</button>
</div>
</template>