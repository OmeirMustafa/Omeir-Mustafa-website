import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site-config';

export const runtime = 'edge';

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          padding: '48px',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 'bold', marginBottom: '24px' }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 48, color: '#a1a1aa' }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
