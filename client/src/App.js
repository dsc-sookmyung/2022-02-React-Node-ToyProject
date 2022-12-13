import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './component/Navigation'
import SignUpPage from './page/SignUpPage';
import SignInPage from './page/SignInPage';
import MyPage from './page/MyPage';
import EditProfilePage from './page/EditProfilePage';
import MainPage from './page/MainPage';
import PostPage from './page/PostPage';
import PostDetailPage from './page/PostDetailPage';
import EditPostPage from './page/EditPostPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/user/signup" element={<SignUpPage/>}/>
        <Route path="/user/login" element={<SignInPage/>}/>
        <Route path="/blog/:userId" element={<MyPage/>}/>
        <Route path="/user/:userId" element={<EditProfilePage/>}/>
        <Route path="/blog" element={<PostPage/>}/>
        <Route path="/blog/:blogId/detail" element={<PostDetailPage/>}/>
        <Route path="/blog/:blogId/edit" element={<EditPostPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
