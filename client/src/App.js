import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './component/Navigation'
import SignUpPage from './page/SignUpPage';
import SignInPage from './page/SignInPage';
import MyPage from './page/MyPage';
import EditProfilePage from './page/EditProfilePage';
import MainPage from './page/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/blog" element={<MainPage/>}/>
        <Route path="/user/signup" element={<SignUpPage/>}/>
        <Route path="/user/login" element={<SignInPage/>}/>
        <Route path="/blog/:userId" element={<MyPage/>}/>
        <Route path="/user/:userId" element={<EditProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
