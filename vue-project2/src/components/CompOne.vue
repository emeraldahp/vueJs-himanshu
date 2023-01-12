<script>
export default {
    name: "compone",

    methods:{
        changeData(){
            this.$store.commit("changeData1", "I am new data");
        },
        changeDataT2() {
            this.$store.commit({
                type:"changeData1T2",
                data1: "i got changed from type2"
            })
        }
    }
    
}

</script>

<template>
<div>
    CompOne<br>
    Data1: {{this.$store.state.data1}} <br>
    <button @click='changeData'>ChangeData1</button>
    <button @click="changeDataT2">Change using Type2</button>
</div>
</template>