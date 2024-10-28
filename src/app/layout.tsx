"use client";

import { Provider } from "react-redux";
import store from "../store";
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <title>SpaceX Capsules</title>
      </header>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
