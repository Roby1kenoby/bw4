import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './components/pages/ProfilePage';
import NotFound from './components/pages/NotFound';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import MySide from './components/MySide';
import HomePage from './components/pages/HomePage';
import { UserContextProvider } from './components/contexts/UserContextProvider';



function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MySide />
        <MyFooter />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
