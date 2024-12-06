<script setup>

import {ref, onMounted, reactive} from 'vue'
import JobListCard from '@/components/JobListCard.vue'

import { RouterLink } from 'vue-router';
import Axios from 'axios'

import RotateLoader from 'vue-spinner/src/RotateLoader.vue'

defineProps({
  limit: Number,
  showAllList: Boolean
})

const state = reactive({
  jobs: [],
  isLoading: true
})

onMounted(async()=>{
  try {
    const response = await Axios.get('http://localhost:5010/jobs')
    state.jobs = response.data
  } catch (error) {
    console.log('itlog',error)
  } finally {
    state.isLoading = false
  }
})



</script>

<template>
    
    <section class="bg-green-50 px-4 py-10">
      <div v-if="state.isLoading" class="text-center text-slate-700">
        <RotateLoader />
      </div>

      <div v-else class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobListCard  v-for="i in state.jobs.slice(0, limit || state.jobs.length)" :key="i.id" :jobs="i">
          </JobListCard>

        </div>
      </div>
    </section>

    <section class="m-auto max-w-lg my-10 px-6" v-if="showAllList">
      <RouterLink
        to="/jobs/"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>

</template>