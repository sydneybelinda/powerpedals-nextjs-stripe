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
}
export default helper
