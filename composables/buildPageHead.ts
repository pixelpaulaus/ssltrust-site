
interface Head {
  title: string
  description: string
  keywords?: string
  image?: string
}

export default function(head: Head){
    const config = useRuntimeConfig().public
    const route = useRoute();
    useHead({
      title: head.title,
      meta: [
        {name: "description", content: head.description},
        {name: "keywords", content: head.keywords},
        //{property: 'og:title', content: title + ' | SSLTrust'},
        {property: 'og:image', content: head.image}
      ],
      link: [
        {rel: 'alternate', href: 'https://www.ssltrust.com.au' + route.path, hreflang: 'x-default'},
        {rel: 'alternate', href: 'https://www.ssltrust.com.au' + route.path, hreflang: 'en-AU'},
        {rel: 'alternate', href: 'https://www.ssltrust.com' + route.path, hreflang: 'en-US'},
        {rel: 'alternate', href: 'https://www.ssltrust.in' + route.path, hreflang: 'en-IN'},
        {rel: 'alternate', href: 'https://www.ssltrust.co.uk' + route.path, hreflang: 'en-GB'},
        {rel: 'alternate', href: 'https://www.ssltrust.ca' + route.path, hreflang: 'en-CA'},
        {rel: 'alternate', href: 'https://www.ssltrust.eu' + route.path, hreflang: 'en-BE'},
        {rel: 'alternate', href: 'https://www.ssltrust.com.cn' + route.path, hreflang: 'en-CN'},
        {rel: 'alternate', href: 'https://www.ssltrust.co.nz' + route.path, hreflang: 'en-NZ'},
        {rel: 'canonical', href: 'https://www.ssltrust.' + config.country.tld + route.path},
      ]
    })
  }