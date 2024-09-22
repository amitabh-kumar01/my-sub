
"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export default function ClientProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session;
}) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
