import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sybil Shield",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="bg-neutral-800 text-white">
      <head>
        <Meta />
        <Links />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <main className='w-full' id="page-wrap">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
