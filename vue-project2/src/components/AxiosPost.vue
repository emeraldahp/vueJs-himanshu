<script>
import axios from 'axios'
export default{
    name: 'axiospost',
    data(){
        return{
            articleId: "def"
        }
    },
    methods:{
        async created() {
            // POST request using axios with async/await
            const article = { title: "Vue POST Request Example" };
            const response = await axios.post("https://reqres.in/api/articles", article);
            this.articleId = response.data.id;
        },
        post() {
            const article = { title: "Vue POST Request Example" };
            axios.post("https://reqres.in/api/articles", article)
            .then(response => this.articleId = response.data.id)
            .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
             });

        }

    }
}
</script>

<template>
    <div>
        <button @click="created">ASyncPost</button>
        <button @click="post">DotThenPost</button>
        axiospost {{articleId}}
    </div>
</template>