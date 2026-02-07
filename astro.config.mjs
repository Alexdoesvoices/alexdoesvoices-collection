// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    // site: 'http://192.168.68.82:7150',
    // base: '/',
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
            title: 'My Docs',
            social: [{
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/withastro/starlight'
            }],
            sidebar: [{
                    label: 'Index',
                    link: '/home'
                },
                {
                    label: 'Collections',
                    autogenerate: { directory: 'collection' },
                },
            ],
        }),
        mdx()
    ],
});