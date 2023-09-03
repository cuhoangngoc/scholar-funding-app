import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { StateContextProvider } from "../context";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode } from "usehooks-ts";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { RainbowKitSiweNextAuthProvider, GetSiweMessageOptions } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { WagmiConfig } from "wagmi";

import "~~/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const ScaffoldEthApp = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  const getSiweMessageOptions: GetSiweMessageOptions = () => ({
    statement: "Sign in to SFA",
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <NextNProgress />
          <RainbowKitProvider
            chains={appChains.chains}
            avatar={BlockieAvatar}
            theme={isDarkTheme ? darkTheme() : lightTheme()}
          >
            <StateContextProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="relative flex flex-col flex-1">
                  <Component {...pageProps} />
                </main>
                <Footer />
              </div>
              <Toaster />
            </StateContextProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
