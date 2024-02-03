import { AppProvider } from '../context';
import '../styles/index.css';
// import { useRouter } from 'next/router';
// import Modals from '@/components/ui/modals';
// import Toasts from '@/components/ui/toast';

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const isSafeModals = router.pathname != '/_error';

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
