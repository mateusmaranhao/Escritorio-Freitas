import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: object;
}

export function SEO({ title, description, url, type = 'website', image, schema }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://escritoriofreitas.com.br${url}`} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://escritoriofreitas.com.br${url}`} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      {image && <meta property="og:image" content={`https://escritoriofreitas.com.br${image}`} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={`https://escritoriofreitas.com.br${image}`} />}

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
