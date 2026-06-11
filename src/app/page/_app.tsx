import { Html, Head, Main, NextScript } from 'next/document';
import { inter } from '../font';

export default function Document() {
  return (
    <Html className={inter.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}