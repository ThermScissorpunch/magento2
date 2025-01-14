module.exports = {
  integrations: {
    magento: {
      location: '@vue-storefront/magento-api/server',
      configuration: {
        api: 'https://demo-magento2.storefrontcloud.io/graphql',
        tax: {
          displayCartSubtotalIncludingTax: true,
        },
        websites: {
          base: {
            code: 'base',
            defaultStoreGroup: 'main_website_store',
            storeGroups: {
              main_website_store: {
                code: 'main_website_store',
                defaultStore: 'default',
                stores: {
                  default: { code: 'default' },
                  de: { code: 'de' },
                  fr: { code: 'fr' },
                },
              },
            },
          },
        },
        externalCheckout: {
          enable: false,
        },
        defaultStore: 'default',
        cookies: {
          currencyCookieName: 'vsf-currency',
          countryCookieName: 'vsf-country',
          localeCookieName: 'vsf-locale',
          cartCookieName: 'vsf-cart',
          customerCookieName: 'vsf-customer',
          storeCookieName: 'vsf-store',
        },
      },
    },
  },
};
