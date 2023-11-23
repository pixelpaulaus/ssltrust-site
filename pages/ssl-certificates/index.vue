<template>
    <div class="px-2 pt-10">
        <div class="relative mx-auto max-w-6xl">
            <h1 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight">Buy SSL Certificates with Top Security at the Lowest Prices.</h1>
            <div class="grid grid-cols-1 md:grid-cols-12 my-10 gap-3 md:gap-14" v-show="!showVideo">
                <div class="col-span-1 md:col-span-4 order-last md:order-first pl-3 drop-shadow-md">
                    <div class="relative w-1/2 md:w-full mx-auto md:mt-8 rounded-md overflow-hidden group hover:cursor-pointer" @click="showVideo = true">
                        <NuxtPicture class="" src="/assets/img/video-ssl-certificates.jpg"/>
                        <button class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500 group-hover:text-white p-2 rounded-full group-hover:rounded-lg group-hover:bg-blue-500/60"><PlayCircleIcon class="w-20"/><span class="hidden group-hover:contents">Play Video</span></button>
                    </div>
                </div>
                <div class="col-span-1 md:col-span-8">
                    <p class="max-w-7xl mx-auto md:mt-4 text-lg leading-8">An SSL Certificate (Secure Sockets Layer) secures all information transmitted between your website and customers. SSLTrust provides individuals and organisations with the same SSL/TLS encryption methods that banks, governments, and the military use. From online messaging to credit card details, traffic on your website is safely and impenetrably shielded.
                    <br><br>
                    These Digital Certificates are available in a variety of types to help secure your website, service, code or email in the best possible while also being easy and cost-effective.</p>
                </div>
            </div>
            <div v-show="showVideo" class="max-w-xl my-10 mx-auto drop-shadow-lg">
                <LazyVideoPlayer v-if="showVideo" :options="{sources: [{src: 'https://verokey-cdn.b-cdn.net/video/intro_720.mp4', type: 'video/mp4'}]}"/>
                <button class=" text-gray-400 hover:text-blue-300 m-2 text-sm" @click="showVideo = false">Close Video</button>
            </div>
        </div>
        <div class="relative max-w-lg lg:max-w-5xl mx-auto mt-16 mb-8">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex items-center justify-between">
            <span class="bg-gray-50 pr-3 leading-6 text-gray-500">Certificate Types</span>
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-sm text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-gray-600 hover:ring-gray-500">
                <span>Show Comparison Table</span>
            </button>
            </div>
        </div>
        <div class="isolate mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl xl:grid-cols-6">
          <div v-for="certtype in certTypes" class="ring-1 ring-gray-200 rounded p-4">
            <h3 class="text-gray-900 text-lg font-semibold leading-8">{{ certtype.name }}</h3>
            <p class="mt-4 text-sm leading-6 text-gray-600">{{ certtype.description }}</p>
            <p class="mt-6 text-sm text-gray-400 flex-full">Lowest Price</p>
            <p class="text-4xl font-bold tracking-tight text-gray-900" v-loading="prices.currencyLoading">{{ prices.getCurrencySymbol }}{{ prices.getPrice(certtype.product, certtype.term) }}</p>
            <p class="text-sm font-semibold leading-6 text-gray-600">Per Year</p>
            <NuxtLink :href="certtype.href" class="bg-blue-400 text-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold hover:bg-blue-600">View<span class="hidden sm:inline">Certificates</span></NuxtLink>
          </div>
        </div>
        <ContentBrandsRow class="py-20"/>
        <div class="py-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
            <h2 class="text-base font-semibold leading-7 text-blue-600">Why Choose SSLTrust?</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What comes with your SSL Certificate...</p>
            <p class="mt-6 text-base leading-7 text-gray-600">We are {{ runtimeConfig.country.australias }} largest and most affordable SSL provider, and we do out best make sure you have everything you need to get up and secured faster.<br><br>
            Here are a few reasons you’ll be thrilled with your SSL Certificate purchase with SSLTrust.</p>
            <NuxtImg src="/assets/img/ssl-certification-features-list.svg" class="p-10"/>
            </div>
            <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            <div v-for="item in whyChoose" :key="item.name" class="relative pl-9">
                <dt class="font-semibold text-gray-900">
                <CheckIcon class="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                {{ item.name }}
                </dt>
                <dd class="mt-2">{{ item.description }}</dd>
            </div>
            </dl>
        </div>
        </div>
    </div> 
</template>
<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig().public
    import { usePricesStore } from '~/stores/prices'

    import {
        PlayCircleIcon,
        CheckIcon
    } from '@heroicons/vue/24/outline'

    useSeoMeta({
    title: 'Buy SSL Certificates with ' + runtimeConfig.country.australian + ' Support',
    description: 'This is my amazing site, let me tell you all about it.',
    })

    const prices = usePricesStore()

    const showVideo = ref(false)



    const certTypes = [
            {
                name: 'Single Domain',
                href: '#standard',
                description: 'Secure your domain quick, easy and at a low price.',
                features: ['Domain Validated', 'Single Domain or IP', 'Fast Issuance'],
                product: 361,
                term: 3
            },
            {
                name: 'Wildcard',
                href: '#',
                description: 'Secure your main domain with unlimited sub-domains.',
                features: ['Unlimited Sub-Domains', 'Domain or Business Validated', ''],
                product: 419,
                term: 3
            },
            {
                name: 'Business',
                href: '#',
                description: 'Secure your Verified Business with High Encryption.',
                features: [
                    '25 products',
                    'Up to 10,000 subscribers',
                    'Advanced analytics',
                ],
                product: 403,
                term: 5
            },
            {
                name: 'Multi-Domain',
                href: '#',
                description: 'For when you need to secure multiple domains or IPs.',
                features: [
                    'Unlimited products',
                    'Unlimited subscribers',
                    'Advanced analytics',
                ],
                product: 380,
                term: 5
            },
            {
                name: 'Code Signing',
                href: '#',
                description: 'Secure your Software and Code to also remove warnings.',
                features: [
                    'Unlimited products',
                    'Unlimited subscribers',
                    'Advanced analytics',
                ],
                product: 373,
                term: 5
            },
            {
                name: 'Email (S/MIME)',
                href: '#',
                description: 'Encrypt and Sign your Emails and Verify your identity.',
                features: [
                    'Unlimited products',
                    'Unlimited subscribers',
                    'Advanced analytics',
                ],
                product: 369,
                term: 3
            },
        ]

        const whyChoose = [
        {
            name: '256 Encryption and Greater',
            description: 'We dont just provide Certificates with the minimum SHA-2 and 2048-bit Encryption. We have Certificates available with higher encryptions for better security.',
        },
        { 
            name: 'Padlocked and Secure',
            description: 'Your site will display the secure padlock in your visitors browser along with additional indicators such as Verified  Details and Seals.' },
        {
            name: 'Trust Seal',
            description: 'Each SSL/TLS Certificate we sell comes with a Trust Seal that verifies your customers\' data is safe and secure. Business Certificates also show your verified Business.',
        },
        {
            name: 'Australian Support Team',
            description: 'Our goal is to get you secure quickly and easily, with support tailored to suit your needs. Our support team is here for you, offering online, onsite and remote assistance.',
        },
        {
            name: '30-Day Refund',
            description: 'For your peace of mind, we offer a 30-day refund policy with every SSL/TLS Certificate purchased.',
        },
        {
            name: 'Improved Conversion Rate',
            description: 'When you buy SSL Certificates and install them on your website, you can expect substantially increased conversion rates from visitors to paying customers.',
        },
        ]

</script>