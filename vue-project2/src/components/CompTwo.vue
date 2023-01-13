<script>
export default{
    nmae: "comptwo",
    methods: {
        changeData(){
            this.$store.dispatch("changeData2Action", {
                data2 : "D2 got chaged in 2sec through action"
            })
        }
    }
}
</script>
<template>
<div>
    CompTwo <br> 
    Data2: {{this.$store.state.data2}} <br>
    <button @click="changeData">Change Data2 using action in 2 Seconds</button>
</div>
</template>