import React from 'react';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';

export default function placeorder() {
  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3} />
    </Layout>
  );
}
