import 'nextra-theme-blog/style.css';
import type {AppProps} from 'next/app';
import {inter, jetbrains_mono} from '../styles/fonts';
import '../styles/global.css';
import {NavRenamingPlugin} from '../components/NavRenamingPlugin';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <div className={`${inter.variable} ${jetbrains_mono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <NavRenamingPlugin />
    </>
  );
}
