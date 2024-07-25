import './App.css';
import MainContent from './components/MainContent';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import ProfileDetail from './components/ProfileDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MyHeader />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
