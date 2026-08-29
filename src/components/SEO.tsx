import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://workplacehq.com' // PLACEHOLDER — confirm production domain
const DEFAULT_IMAGE = `${SITE_URL}/WorkplaceLogo.png`

interface SEOProps {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
}

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  structuredData,
}: SEOProps) {
  const url = `${SITE_URL}${path}`
  const schemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="WorkplaceHQ" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export { SITE_URL }
