<script setup>
import {defineProps} from 'vue';

defineProps({
    bgcolour:{
        type: String,
        default: 'bg-gray-100'
    }
})
</script>

<template>
    <div :class="`${bgcolour} p-6 rounded-lg shadow-md`">
        <slot>
        </slot>
    </div>
</template>

<style>
</style>