<script setup>

import jobData from '@/assets/jobs.json'
import {ref} from 'vue'
import JobListCard from '@/components/JobListCard.vue';
import { RouterLink } from 'vue-router';

const jobs = ref(jobData)

defineProps({
  limit: Number,
  showAllList: Boolean
})
</script>

<template>

  <div >
  </div>

  
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobListCard  v-for="i in jobs.slice(0, limit || jobs.length)" :key="i.id" :jobs="i">
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