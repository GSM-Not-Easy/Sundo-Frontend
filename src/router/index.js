import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<P.SignUp />} />
        <Route path='/weeclass' element={<P.ChatStart />} />
        <Route path='/' element={<P.Main />} />
      </Routes>
    </BrowserRouter>
  );
}
