<script setup>
    import Hero from '@/components/Hero.vue'
    import HomeCards from '@/components/HomeCards.vue'
    // import JobList from '@/components/JobList.vue'
    import JobList from '@/components/JobList2.vue'

</script>
<template>
    <Hero title="New prop title" />

    <HomeCards />

    <JobList :show-all-list="true" :limit="6" />
</template>