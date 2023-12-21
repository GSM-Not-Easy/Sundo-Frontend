import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<P.Main />} />
        <Route path='/signup' element={<P.SignUp />} />
        <Route path='/signin' element={<P.SignIn />} />
        <Route path='/weeclass' element={<P.ChatStart />} />
        <Route path='/my' element={<P.My />} />
        <Route path='/stuinfo' element={<P.StuInfo />} />
        <Route path='/weestuchat' element={<P.WeeStuChat />} />
        <Route path='/weeteachat' element={<P.WeeTeaChat />} />
        <Route path='/foodlist' element={<P.FoodList />} />
        <Route path='/job' element={<P.Job />} />
      </Routes>
    </BrowserRouter>
  );
}
