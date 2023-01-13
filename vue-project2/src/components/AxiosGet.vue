<script>
import axios from 'axios'


export default {
    name:'axiosget',
    data() {
            return {
                catFacts: [],
                fetchingFacts: false
            }
        },
    
    methods: {
        async fetchCatFacts() {
            const catFactsResponse = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
            console.log(catFactsResponse.data)
            this.catFacts = catFactsResponse.data
        },
        async loadMoreFacts() {
            this.fetchingFacts = true
            const catFactsResponse = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
            this.catFacts.push(...(catFactsResponse.data || []))
            this.fetchingFacts = false
        }


    }


}

</script>

<template>
    <div>
        <h3>Cat Facts</h3>
        <button @click="fetchCatFacts">Cats</button>
        <ul>
        <li v-for="(fact, index) in catFacts" :key="index" class="list-group-item">{{index + 1}}. {{fact.text}}</li>
        </ul>
        <button @click="loadMoreFacts">{{ fetchingFacts ? '...' : 'Load more' }}</button>
    </div>
</template>