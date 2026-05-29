// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },

  modules: ['@adminlte/nuxt'],

  // AdminLTE module options (mirrors the Laravel config array).
  adminlte: {
    defaults: {
      fixedHeader: true,
      fixedSidebar: true,
      sidebarTheme: 'dark',
      initialColorMode: 'light',
      enableSidebarPersistence: true,
    },
  },

  // Consumer-side CSS the library doesn't bundle (icons + sidebar scrollbar).
  // `adminlte-vue/css` is injected by the module before these.
  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
    'overlayscrollbars/overlayscrollbars.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AdminLTE Vue — Demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AdminLTE 4 for Vue 3 and Nuxt — component demo.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ],
    },
  },
})
