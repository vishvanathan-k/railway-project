import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App(props: AppProps) {
  const { Component } = props;

  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="../favicon.png"/>
        <link rel="stylesheet" href="../styles/tailwind.css" />
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}