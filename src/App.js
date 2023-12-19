import { RecoilRoot } from 'recoil';
import Router from './router';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Router />
    </RecoilRoot>

  );
}

export default App;
