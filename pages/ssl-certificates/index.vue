<template>
    <div class="px-2 pt-10">
        <div class="relative mx-auto max-w-6xl">
            <h1 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight">Buy SSL Certificates with Top Security at the Lowest Prices.</h1>
            <div class="grid grid-cols-1 sm:grid-cols-12 my-10 gap-14" v-show="!showVideo">
                <div class="hidden sm:block col-span-4 drop-shadow-md ">
                    <div class="mx-auto block relative mt-16 rounded-md overflow-hidden">
                        <NuxtPicture class="" src="/assets/img/video-ssl-certificates.jpg"/>
                        <button class="absolute top-1/2 left-1/2 -ml-10 -mt-10 text-blue-500 hover:text-blue-300 p-2 rounded m-2" @click="showVideo = true"><PlayCircleIcon class="w-20"/></button>
                    </div>
                </div>
                <div class="col-span-8">
                    <p class="max-w-7xl mx-auto mt-4 text-lg leading-8">An {{ runtimeConfig.country.australia }} SSL Certificate (Secure Sockets Layer) secures all information transmitted between your website and customers. You provide individual users and small businesses with the same SSL/TLS encryption methods that banks, governments, and the military use. So, if you're looking to buy SSL Certificates, you've come to the right place, and we'll explain why!
                    <br><br>
                    Sending information online, protected by an SSL certificate, gets secured using 256-bit encryption or higher, which would take millions of years to crack by brute force. Also known as TLS (Transport Layer Security), this is the safest way to ensure the validity and reliability of all data sent and received online. Secure connections that use an SSL Certificate are much safer.</p>
                </div>
            </div>
            <div v-show="showVideo" class="max-w-xl my-10 mx-auto drop-shadow-lg">
                <LazyVideoPlayer v-if="showVideo" :options="{autoplay: true, controls: true, fluid: true, sources: [{src: 'https://verokey-cdn.b-cdn.net/video/intro_720.mp4', type: 'video/mp4'}]}"/>
                <button class=" text-gray-400 hover:text-blue-300 m-2 text-sm" @click="showVideo = false">Close Video</button>
            </div>
        </div>

        <div class="isolate mx-auto grid grid-cols-3 gap-3 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl xl:grid-cols-6">
          <div v-for="certtype in certTypes" class="ring-1 ring-gray-200 rounded p-4">
            <h3 class="text-gray-900 text-lg font-semibold leading-8">{{ certtype.name }}</h3>
            <p class="mt-4 text-sm leading-6 text-gray-600">{{ certtype.description }}</p>
            <p class="mt-6 text-sm text-gray-400 flex-full">Lowest Price</p>
            <p class="flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$123</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">Per Year</span>
            </p>
            <NuxtLink :href="certtype.href" class="bg-blue-400 text-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold">View Certificates</NuxtLink>
          </div>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        hi
    </div> 
</template>
<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig()

    useSeoMeta({
    title: 'Buy SSL Certificates with ' + runtimeConfig.country.australian + ' Support',
    description: 'This is my amazing site, let me tell you all about it.',
    })

    import {
        PlayCircleIcon
    } from '@heroicons/vue/24/outline'

    const showVideo = ref(false)

    const certTypes = [
            {
                name: 'Single Domain',
                href: '#standard',
                description: 'Secure your domain quick and easy.',
                features: ['Domain Validated', 'Single Domain or IP', 'Fast Issuance'],
            },
            {
                name: 'Wildcard',
                href: '#',
                description: 'Secure your domain with unlimited sub-domains.',
                features: ['Unlimited Sub-Domains', 'Domain or Business Validated', ''],
            },
            {
                name: 'Business',
                href: '#',
                description: 'Secure your Verified Business with High Encryption.',
                features: [
                    '25 products',
                    'Up to 10,000 subscribers',
                    'Advanced analytics',
                ]
            },
            {
                name: 'Muli-Domain',
                href: '#',
                description: 'For when you need to secure multiple domains.',
                features: [
                    'Unlimited products',
                    'Unlimited subscribers',
                    'Advanced analytics',
                ]
            },
            {
                name: 'Code Signing',
                href: '#',
                description: 'Secure your Code and remove warnings.',
                features: [
                    'Unlimited products',
                    'Unlimited subscribers',
                    'Advanced analytics',
                ]
            },
            {
                name: 'Email (S/MIME)',
                href: '#',
                description: 'Encrypt and Sign your Emails',
                features: [
                    'Unlimited products',
                    'Unlimited subscribers',
                    'Advanced analytics',
                ]
            },
        ]

</script>