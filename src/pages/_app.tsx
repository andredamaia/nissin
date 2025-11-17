import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/utils/base.scss';
import '../styles/utils/button.scss';
import '../styles/utils/text.scss';
import '../styles/utils/transition.scss';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
