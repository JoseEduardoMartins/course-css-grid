import './assets/css/normalize.css';
import './assets/css/reset.css'
import './App.css';
import Header from './components/Header';
import Destaques from './components/Destaques';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="conteudo">
        <Destaques />
      </main>
      <Footer />
    </div>
  );
};

export default App;
