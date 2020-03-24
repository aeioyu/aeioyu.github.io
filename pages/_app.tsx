import React, { useContext, useEffect } from 'react';
import App from 'next/app';
import UserContextProvider, { UserContext } from '../contexts/userContext';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const initialCookies = cookies(context);
  return { props: { initialCookies } };
};

export default MyApp;
