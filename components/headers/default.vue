<template>
    <Popover class="relative bg-white">
      <div class="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/">
            <span class="sr-only">SSLTrust</span>
            <img class="h-12 w-auto sm:h-14 hidden lg:block" src="/img/ssltrust-logo.svg" alt="" />
            <img class="h-12 w-auto sm:h-14 lg:hidden" src="/img/ssltrust-icon.svg" alt="" />
          </NuxtLink>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none']">
              <span class="hidden lg:block">SSL Certificates</span>
              <span class="lg:hidden">Certs</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-ls transform lg:left-1/2 lg:ml-0 lg:max-w-3xl lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <NuxtLink v-for="solution in solutions" :key="solution.name" :to="solution.href" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                      <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                        <component :is="solution.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ solution.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ solution.description }}</p>
                      </div>
                    </NuxtLink>
                  </div>
                  <div class="bg-gray-50 p-5 sm:p-8">
                    <a href="#" class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
                      <div class="flex items-center">
                        <div class="text-base font-medium text-gray-900">Not sure which one you need?</div>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Use our online <strong>SSL Selector</strong> to find the correct solution.</p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
              <span>Brands</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in brands" :key="item.name" :href="item.href" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                      <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
    
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Support</a>
  
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2']">
              <span>More</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="resource in resources" :key="resource.name" :href="resource.href" class="-m-3 block rounded-md p-3 hover:bg-gray-50">
                      <p class="text-base font-medium text-gray-900">{{ resource.name }}</p>
                      <p class="mt-1 text-sm text-gray-500">{{ resource.description }}</p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Login</a>
          <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">SSL Selector</a>
        </div>
      </div>
  
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="Your Company" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <a v-for="solution in solutions" :key="solution.name" :href="solution.href" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-500 text-white">
                      <component :is="solution.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">{{ solution.name }}</div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
  
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
  
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Enterprise</a>
                <a v-for="resource in resources" :key="resource.name" :href="resource.href" class="text-base font-medium text-gray-900 hover:text-gray-700">{{ resource.name }}</a>
              </div>
              <div class="mt-6">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">Sign up</a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  {{ ' ' }}
                  <a href="#" class="text-blue-600 hover:text-blue-500">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    DocumentChartBarIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  
  const solutions = [
    {
      name: 'SSL/TLS Certificates',
      description: 'Secure your website, domain/IP, server, service and more.',
      href: '/ssl-certificates/cheap',
      icon: ChartBarIcon,
    },
    {
      name: 'Business SSL/TLS Certificates',
      description: 'Secure with Higher Trust and shown as a Verified Business.',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Wildcard SSL/TLS Certificates',
      description: "Secure unlimited sub-domains under your domain.",
      href: '#',
      icon: Squares2X2Icon,
    },
    {
      name: 'Multi-Domain (SAN) Certificates',
      description: "For when you need to secure multiple domains or services.",
      href: '#',
      icon: Squares2X2Icon,
    },
    {
      name: 'Email & Identity (S/MIME) Certificates',
      description: 'Secure and Sign your Emails and Documents.',
      href: '#',
      icon: ArrowPathIcon,
    },
    {
      name: 'Code Signing Certificates',
      description: 'Secure your code and the applications you release.',
      href: '#',
      icon: DocumentChartBarIcon,
    },
  ]

  const brands = [
    {
      name: 'GeoTrust',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Comodo',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Sectigo',
      href: '#',
      icon: Squares2X2Icon,
    },
    {
      name: 'DigiCert',
      href: '#',
      icon: Squares2X2Icon,
    },
    {
      name: 'Thawte',
      href: '#',
      icon: ArrowPathIcon,
    },
    {
      name: 'RapidSSL',
      href: '#',
      icon: DocumentChartBarIcon,
    },
  ]


  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
    { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
  ]
  </script>