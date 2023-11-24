import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <MantineProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  );
};
export default api.withTRPC(MyApp);
