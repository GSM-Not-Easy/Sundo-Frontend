import { RecoilRoot } from 'recoil';
import Router from './router';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <RecoilRoot>
      <ToastContainer />

      <GlobalStyles />
      <Router />
    </RecoilRoot>
  );
}

export default App;
