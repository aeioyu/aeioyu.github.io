// Example for dynamic route page ex. /men/shoe/sneake, /product-url-key

import * as React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Container from '../components/Container';

export interface IUrlRewritePageProps {
}

 function UrlRewritePage (props: IUrlRewritePageProps) {
  const router = useRouter();

  return (
    <Layout>
      <Container>
      URL Rewrite
      {JSON.stringify(router.query)}
      </Container>
    </Layout>
  );
}

export default UrlRewritePage;