import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import Script from 'next/script';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'زاهي للخياطة الرجالية الفاخرة',
  description: 'نقدم خدمة تفصيل وتصميم الثوب في 10 دقائق فقط بالإضافة إلى تشكيلة متنوعة من خدمات الخياطة الرجالية الفاخرة في مدينة الطائف.',
  keywords: 'زاهي, تفصيل ثوب, تصميم ثوب, الطائف, ثوب في 10 دقائق, خياطة سريعة, خياطة فاخرة, خياطة رجالية, قطن, كتان, صوف, ثوب سعودي, ثوب خليجي, ثوب رسمي, ثوب مناسبات, ثوب زفاف, ثوب العيد, Saudi thobe, custom tailoring, men\'s fashion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta property="og:title" content="زاهي للخياطة الرجالية الفاخرة" />
        <meta property="og:description" content="نقدم خدمة تفصيل وتصميم الثوب في 10 دقائق فقط بالإضافة إلى تشكيلة متنوعة من خدمات الخياطة الرجالية الفاخرة في مدينة الطائف." />
        <meta property="og:image" content="https://zahib.vercel.app/og.png" />
        <meta property="og:url" content="https://zahib.vercel.app/" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {children}

        {/* Structured data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'زاهي للخياطة الرجالية الفاخرة',
              'description': 'خدمات خياطة رجالية فاخرة ومتنوعة في مدينة الطائف',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'شارع أبو بكر، خلف عصيمي برجر',
                'addressLocality': 'الطائف',
                'addressRegion': 'مكة المكرمة',
                'addressCountry': 'SA'
              },
              'telephone': '+966533341139',
              'openingHours': 'Mo-Su 09:00-22:00',
              'priceRange': '$$'
            })
          }}
        />
      </body>
    </html>
  );
}
