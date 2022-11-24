import './assets/css/normalize.css';
import './assets/css/reset.css'
import './App.css';
import Header from './components/Header';
import Destaques from './components/Destaques';
import Populares from './components/Populares'
//import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="conteudo">
        <Destaques />
        <Populares />
      </main>
    </div>
  );
};

export default App;
