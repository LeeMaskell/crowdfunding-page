import './App.css';
import Header from './components/presentation/Header';
import Content from './components/presentation/Content';
import { ModalContext } from './components/container/modalContext';
import ModalDefault from './components/presentation/ModalDefault';
import { useContext } from 'react';
import Context from './components/container/modalContext';


function App() {
  
  return (
    <div className="App">
      <ModalContext>
        <Header />
        <Content />
        <ModalDefault />
      </ModalContext>
    </div>
  );
}

export default App;
