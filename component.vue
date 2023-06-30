<template>
    <div>components: {{ name }}</div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('comp')
</script>

<style scoped> </style>
