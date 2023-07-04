<template>
    <div class="d">
        {{ person }}
        <button @click="btnClick">李四</button>
        <Component></Component>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Component from './component.vue'

const person = ref({
    name: '张三'
})

const btnClick = () => {
    person.name = '李四'
}
</script>

<style scoped>
    .d{
        color: red;
    }
</style>
