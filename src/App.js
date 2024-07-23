import './App.css';
import MainContent from './components/MainContent';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';

function App() {
  return (
    <>
      <MyHeader>
      <MyNav />
      </MyHeader>
      <MainContent></MainContent>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
