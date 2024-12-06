<script setup>

import {ref, computed} from 'vue';

import { RouterLink } from 'vue-router';


const props = defineProps({
    jobs: Object
})

const showFullDesc = ref(false)

const truncatedDesc = computed(() => {
    let description = props.jobs.description

    if (!showFullDesc.value){
        description = description.substring(0,180)+'...'
    }

    return description
})

const toggleFullDesc = () => {
    showFullDesc.value = !showFullDesc.value
}

</script>

<template>
    <!-- 
    <div v-for="i in jobs" :key="i.id">
        {{ i.title }}
    </div> -->

    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
            <div class="text-gray-600 my-2">{{ jobs.type }}</div>
            <h3 class="text-xl font-bold">{{ jobs.title }}</h3>
            </div>

            <div class="mb-5">
            {{ truncatedDesc }}
            <a @click="toggleFullDesc" class="text-blue-500 font-bold hover:underline cursor-pointer">
                <span v-if="!showFullDesc">More</span>
                <span v-else>Less</span>
            </a>
            </div>

            <h3 class="text-green-500 mb-2">{{ jobs.salary }} / Year</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
            <div class="text-orange-700 mb-3">
                <i class="pi pi-map-marker align-middle"></i>
                {{ jobs.location }}
            </div>
            <RouterLink
                :to="`/jobs/${jobs.id}`"
                class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
                Read More
            </RouterLink>
            </div>
        </div>
    </div>

</template>