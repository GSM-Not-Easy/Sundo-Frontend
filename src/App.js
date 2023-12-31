import { RecoilRoot } from 'recoil';
import Router from './router';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer />
        <GlobalStyles />
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
