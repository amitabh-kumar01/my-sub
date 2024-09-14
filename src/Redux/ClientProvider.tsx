"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./store";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth"; 

export default function ClientProvider({
  children,
  session, 
}: {
  children: React.ReactNode;
  session?: Session; 
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <SessionProvider session={session}>
      <Provider store={storeRef.current}>
        {children}
      </Provider>
    </SessionProvider>
  );
}
