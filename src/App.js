import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import MySide from './components/MySide';
import { UserContextProvider } from './components/contexts/UserContextProvider';
import HomePage from './components/pages/HomePage';



function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MySide />
        <MyFooter />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
