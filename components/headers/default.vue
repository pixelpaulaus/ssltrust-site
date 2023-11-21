<template>
  <header>
    <div class="bg-blue-800 text-white">
      <div class="flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8 text-white">
        <a href="tel:0281230992" class="inline-flex md:pl-10 font-medium">
          <PhoneIcon class="h-4 w-4 mr-2 mt-1.5 inline" aria-hidden="true"/>(02) 8123 0992
        </a>
        <div class="grow"></div>
        <NuxtLink href="#" class="inline-flex text-sm font-medium hover:text-gray-100">Blog</NuxtLink>
        <span class="h-6 w-px bg-blue-700 mx-5" aria-hidden="true" />
        <NuxtLink href="#" class="inline-flex text-sm font-medium hover:text-gray-100">Support</NuxtLink>
        <span class="h-6 w-px bg-blue-700 mx-5" aria-hidden="true" />
        <form class="hidden sm:block lg:inline-flex">
          <div class="flex">
            <label for="desktop-currency" class="sr-only">Currency</label>
            <div class="group relative rounded-md border-transparent bg-blue-700 focus-within:ring-2 focus-within:ring-white">
              <select id="desktop-currency" name="currency" class="flex items-center rounded-md border-transparent bg-blue-700 bg-none py-0.5 pl-2 pr-5 text-sm font-medium focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100">
                <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
              </select>
            </div>
          </div>
        </form>
        
      </div>
    </div>
    <Popover class="relative bg-white shadow-xl shadow-gray-100">
      <div class="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/">
            <span class="sr-only">SSLTrust</span>
            <img class="h-12 w-auto sm:h-16 blog md:hidden lg:block pt-2 xl:ml-12" src="/assets/img/ssltrust-logo.svg" alt="SSLTrust" />
            <img class="h-12 w-auto sm:h-14 hidden md:block lg:hidden" src="/assets/img/ssltrust-icon.svg" alt="SSLTrust" />
          </NuxtLink>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span class="sr-only">Menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:space-x-6 lg:space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open, close }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none py-2']"
            @mouseover="(e) => hoverPopover(e, open)"
            @mouseleave="closePopover(close)"
            >
              <span>Products</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 -ml-4 w-screen max-w-3xl -translate-x-16 transform lg:ml-0 lg:max-w-5xl lg:-translate-x-1/4 xl:-translate-x-1/3"
              @mouseover.prevent="popoverHover = true"
              @mouseleave.prevent="closePopover(close)"
              >
                <div class="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid lg:grid-cols-12">
                    <div class="col-span-9 divide-y divide-slate-100">
                      <div class="pl-5 p-2 lg:pl-8 lg:p-3">
                        <NuxtLink to="/ssl-certificates" class="font-medium text-gray-600" @click="closePopover(close)"><ArrowDownCircleIcon class="w-6 h-6 inline text-blue-500 mb-1"/> Digital Certificates</NuxtLink>
                      </div>
                      <div class="relative grid gap-6 px-5 py-6 sm:gap-8 grid-cols-2">
                        <NuxtLink v-for="certificate in certificates" :key="certificate.name" :to="certificate.href" class="-m-3 flex items-start rounded-lg p-1 lg:p-3 hover:bg-gray-50"
                        @click="closePopover(close)"
                        >
                          <div class="flex h-10 w-10 mt-1.5 flex-shrink-0 items-center justify-center rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                            <component :is="certificate.icon" class="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">{{ certificate.name }}</p>
                            <p class="mt-1 text-sm text-gray-500">{{ certificate.description }}</p>
                          </div>
                        </NuxtLink>
                        <a href="#" class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
                          <div class="flex items-center">
                            <div class="text-base font-medium text-gray-900">Not sure which Certificate you need?</div>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">Use our online <strong>SSL Selector</strong> to find the correct solution.</p>
                        </a>
                      </div>
                    </div>
                    <div class="col-span-3 divide-y divide-slate-100">
                      <div class="pl-5 p-2 lg:pl-8 lg:p-3">
                        <NuxtLink to="/ssl-certificates" class="font-medium text-gray-600" @click="closePopover(close)"><ArrowDownCircleIcon class="w-6 h-6 inline text-blue-500 mb-1"/> Security Products</NuxtLink>
                      </div>
                      <div>
                        <NuxtLink v-for="product in otherProducts" :key="product.name" :to="product.href" class="flex rounded-lg p-1 lg:p-3 hover:bg-gray-50"
                        @click="closePopover(close)"
                        >
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">{{ product.name }}</p>
                            <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ open, close }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none py-2']"
              @mouseover="(e) => hoverPopover(e, open)"
              @mouseleave="closePopover(close)"
            >
              <span>Brands</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 -ml-4 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
              @mouseover.prevent="popoverHover = true"
              @mouseleave.prevent="closePopover(close)"
              >
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
    
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900  py-2">Enterprise</a>

          <Popover class="relative" v-slot="{ open, close }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none py-2']"
            @mouseover="(e) => hoverPopover(e, open)"
            @mouseleave="closePopover(close)"
            >
              <span>More</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-10 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0"
              @mouseover.prevent="popoverHover = true"
              @mouseleave.prevent="closePopover(close)"
              >
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
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><ShoppingCartIcon class="w-6 h-6 mr-3"/></a>
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Login</a>
          <a href="#" @click="showSelector" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">SSL Selector</a>
        </div>
      </div>

      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="/assets/img/ssltrust-logo.svg" alt="SSLTrust" />
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
                  <a v-for="certificate in certificates" :key="certificate.name" :href="certificate.href" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-500 text-white">
                      <component :is="certificate.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">{{ certificate.name }}</div>
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
  </header>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    DocumentChartBarIcon,
    PhoneIcon,
    Squares2X2Icon,
    XMarkIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
    ArrowDownCircleIcon
  } from '@heroicons/vue/24/outline'
  import { usePricesStore } from '~/stores/prices'

  const prices = usePricesStore()
  const popoverHover = ref(false)
  const popoverTimeout = ref(null)

  const hoverPopover = (e, open) => {
    popoverHover.value = true
    if (!open) e.target.click()
  }

  const closePopover = (close) => {
    popoverHover.value = false
    if (popoverTimeout.value) clearTimeout(popoverHover.value)
    popoverTimeout.value = setTimeout(() => {
      if (!popoverHover.value) close()
    }, 200)
  }

  const showSelector = () => {
    prices.changeCurrency(4)
  }

  const certificates = [
    {
      name: 'Standard SSL/TLS Certificates',
      description: 'Secure your website, domain/IP, server, service and more.',
      href: '/ssl-certificates/cheap',
      icon: ChartBarIcon,
    },
    {
      name: 'Business SSL/TLS Certificates',
      description: 'Secure your Business and show your visitors your Verified.',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Premium Business Certificates',
      description: 'Secure with Higher Encryption and Business Verification',
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

  const otherProducts = [
    {
      name: 'Malware Scanner',
      description: 'Scan and protect your website.',
      href: '/ssl-certificates/cheap',
    },
    {
      name: 'Secure DNS',
      description: 'Sage and Secure DNS for your domains.',
      href: '#',
    },
  ]

  const currencies = ['AUD', 'CAD', 'USD', 'EUR', 'GBP']

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