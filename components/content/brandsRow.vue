<template>
    <div class="mx-auto max-w-7xl grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center">
        <a v-for="item in brands" :key="item.name" :href="item.href" class="inline mx-auto w-screen max-w-[150px] rounded-lg p-3 hover:bg-gray-100">
            <img :src="item.logo" :alt="item.name" class="p-1"/>
        </a>
    </div>
</template>
<script setup>
import brands from '~/json/brands.json'
</script>