import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <div>Welcome to my website!</div>,
  head: () => ({
    meta: [
      { title: 'Connor McDonald' },
      { name: 'description', content: 'Welcome to my personal site' },
    ],
    links: [
      { rel: 'icon', sizes: '32x32', href: '/favicons/default/favicon-32.png' },
      { rel: 'icon', sizes: 'any', href: '/favicons/default/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/default/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/favicons/default/site.webmanifest' },
    ],
  }),
});
