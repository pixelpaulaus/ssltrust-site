import { defineStore } from 'pinia'

export const usePricesStore = defineStore('prices', () => {
    const DEFAULT_CURRENCY = useRuntimeConfig().public.currency.default;

    const prices = ref({})
    const currency = ref(4) //default USD
    const newCurrency = ref()
    // Getters
    const currencyLoading = computed(() => {
        return !(newCurrency.value === currency.value)
    })
    const getPrice = computed(() => {
        return (id, term = 1, forceCurrency = null) => {
            if (prices.value[forceCurrency || currency.value] && prices.value[forceCurrency || currency.value][id]) {
                return term === 1 ? prices.value[forceCurrency || currency.value][id].p : Number(prices.value[forceCurrency || currency.value][id].p / term).toFixed(2)
            }
            return ''
        }
    })
    const getCurrencySymbol = computed(() => {
        switch (currency.value) {
            case 8:
                return '€'
            case 9:
                return '¥'
            case 6:
                return '£'
            default:
                return '$'
        }
    })
    // Actions
    async function fetchPrices(id) {
        if (prices.value[id]) {
            //console.log('prices already fetched')
            currency.value = id
            return
        }
        await $fetch('https://www.ssltrust.com.au/manager/price_data.php',{
            parseResponse: JSON.parse,
            lazy: true,
            query: {
                id: id
            }
        }).then((res) => {
            console.log('prices updates')
            prices.value[id] = res
            currency.value = id
        })
    }
    function changeCurrency(id) {
        newCurrency.value = id
        fetchPrices(id)
    }
    // 
    changeCurrency(DEFAULT_CURRENCY)
    return {prices, currency, getPrice, getCurrencySymbol, fetchPrices, changeCurrency, currencyLoading, DEFAULT_CURRENCY}
})