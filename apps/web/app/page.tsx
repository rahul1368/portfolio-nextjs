import { Metadata } from 'next';
import { homepageContent } from './content';
import { HomePageClient } from './components/HomePageClient';

export const metadata: Metadata = {
  title: homepageContent.seo.title,
  description: homepageContent.seo.description,
  keywords: [...homepageContent.seo.keywords],
  authors: [{ name: homepageContent.seo.author }],
  creator: homepageContent.seo.author,
  publisher: homepageContent.seo.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    title: homepageContent.seo.openGraph.title,
    description: homepageContent.seo.openGraph.description,
    url: homepageContent.seo.openGraph.url,
    siteName: homepageContent.seo.openGraph.siteName,
    images: [
      {
        url: homepageContent.seo.openGraph.image,
        width: 1200,
        height: 630,
        alt: homepageContent.seo.openGraph.title,
      },
    ],
  },
  twitter: {
    card: homepageContent.seo.twitter.card,
    title: homepageContent.seo.twitter.title,
    description: homepageContent.seo.twitter.description,
    images: [homepageContent.seo.twitter.image],
  },
  alternates: {
    canonical: homepageContent.seo.canonical,
  },
  other: {
    'application-name': 'Rahul Choudhary Portfolio',
    'apple-mobile-web-app-title': 'Rahul Choudhary',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageContent.seo.structuredData),
        }}
      />
      
      {/* Main Content */}
      <HomePageClient content={homepageContent} />
    </>
  );
}