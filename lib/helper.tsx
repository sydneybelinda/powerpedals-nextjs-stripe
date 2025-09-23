const helper = {
    openGraphData: {
        title: 'PowerPedals',
        description: 'Your journey to the genuine begins here.',
        siteName: 'PowerPedals',
        type: 'website',
        images: [{ url: `${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg` }],
    },
    getOrganizationJsonString: () => {
        return `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PowerPedals",
            "url": "${process.env.NEXT_PUBLIC_APP_URL}",
            "logo": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg"
            }`
    },
    siteDetails: {
        email: 'powerpedalsaus@gmail.com',
        phone: '+61417982732',
        address: '1 Wentworth St, Glebe  NSW  2037'
    }
}
export default helper
