import { defineStore } from 'pinia'

export const usePricesStore = defineStore('prices', () => {
    const prices = ref({})
    const currency = ref(1) //default USD
    // Getters
    const getPrice = computed((state) => {
        return (id) => {
            //console.log('price asked:' + id)
            //console.log('with currency:' + currency.value)
            if (prices.value[currency.value] && prices.value[currency.value][id]) return prices.value[currency.value][id].p
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
            console.log('prices already fetched')
            return
        }
        await $fetch('https://www.ssltrust.com.au/manager/price_data.php',{
            parseResponse: JSON.parse,
            lazy: true,
            server: false,
            query: {
                id: id
            }
        }).then((res) => {
            //console.log('prices updates')
            prices.value[id] = res
        })
    }
    function changeCurrency(id) {
        currency.value = id
        fetchPrices(id)
    }
    // 
    fetchPrices(1)
    return {prices, currency, getPrice, getCurrencySymbol, fetchPrices, changeCurrency}
})