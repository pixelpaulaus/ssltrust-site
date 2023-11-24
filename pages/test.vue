<template>
    <div>
        This is the test page.  Go to <NuxtLink to="/">Home Page</NuxtLink>
    </div> 
</template>
<script setup lang="ts">
    useSeoMeta({
        title: 'SSLTrust Test',
        description: 'ssltrust test page description',
    })
</script>