<script setup>
    import {ref} from "vue"

    // Basics
    // variable declaration
    const title = ref("Title text")
    const showTitle = ref(true)
    const list = ref(["Item 1","Item 2","Item 3","Item 4","Item 5"])
    const activeStatus = ref(false)
    // methods
    const toggleStatus = () => {
    activeStatus.value = !activeStatus.value
    }
    // END Basics


    //Fetching
    import { onMounted } from "vue";

    const tasks = ref([])
    onMounted(async ()=> {
    try{
        const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await result.json()
        tasks.value = data.map((task) => task.title)
    }
    catch(error){
        console.log("Error fetching")
    }
    })
    // END Fetching
</script>
<template>
    <hr> <!-- Basics -->
    <h1>The Basics</h1>
    <h2 v-if="showTitle">
        {{ title }}
    </h2>
    <ul>
        <li v-for="i in list" :key="i">
        {{ i }}
        </li>
    </ul>
    <h3>
        Status is 
        <span v-if="activeStatus">active</span> 
        <span v-else-if="!activeStatus">inactive</span>
    </h3>
    <button v-on:click="toggleStatus">
        Click to toggle
    </button>
    <br><br>
    <hr> <!-- END Basics -->


    <!-- Fetching -->
    <ol>
        <li v-for="i in tasks" :key="i">
        {{ i }}
        </li>
    </ol>

    <br>
    <hr><!-- END Fetching -->
    <br>

</template>
<style scoped>
</style>