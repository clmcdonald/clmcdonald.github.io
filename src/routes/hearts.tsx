import { createFileRoute } from '@tanstack/react-router';

const HeartsPage = () => {
  return (
    <div
      style={{
        minHeight: '100dvh',
        backgroundColor: '#0d5c2e',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <h1 style={{ fontSize: '2rem', margin: 0 }}>♡ Hearts</h1>
      <p style={{ opacity: 0.8, marginTop: '8px' }}>
        The classic card game — coming soon.
      </p>
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          fontSize: '0.9rem',
          opacity: 0.5,
          textAlign: 'center',
        }}
      >
        <span>♠ ♣ ♥ ♦</span>
        <span>Pass · Play · Shoot the moon</span>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/hearts')({
  component: HeartsPage,
  head: () => ({
    meta: [
      { title: 'Hearts' },
      { name: 'description', content: 'The classic card game' },
      { name: 'theme-color', content: '#0d5c2e' },
    ],
    links: [
      { rel: 'icon', sizes: '32x32', href: '/favicons/hearts/favicon-32.png' },
      { rel: 'icon', sizes: 'any', href: '/favicons/hearts/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/hearts/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/favicons/hearts/site.webmanifest' },
    ],
  }),
  // TODO: Add loader for game state hydration
  // loader: () => ...
});
