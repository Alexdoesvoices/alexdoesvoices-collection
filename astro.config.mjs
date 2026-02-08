// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'http://192.168.68.82:7150',
    base: '/',
    // trailingSlash: 'always', 
    vite: {
        resolve: {
            alias: {
                '@components': '/src/components',
                '@assets': '/src/assets',
            },
        },
    },
    integrations: [
        starlight({
            title: 'Alexdoesvoices Collection',
         social: [
            {
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/Alexdoesvoices/alexdoesvoices-collection'
            },
            {
                icon: 'discord',
                label: 'Discord',
                href: 'https://discord.com/invite/eh6rPmZmHw'
            },
         ],
            sidebar: [{
                    label: 'Index',
                    link: '/home'
                },
                {
                    label: 'Collections',
                    // items: [
                    // { label: 'Pokemon', autogenerate: { directory: 'collections/Pokemon' } },
                    // ],
                    autogenerate: { directory: 'collections' },

                },

            ],
        }),
        mdx()
    ],
});