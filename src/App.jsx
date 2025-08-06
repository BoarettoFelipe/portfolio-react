// Documentação: src/App.jsx

// 1. Importamos as ferramentas do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Importamos nossos componentes
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Projetos from './components/pages/Projetos';
import Curriculo from './components/pages/Curriculo';

import './App.css'; 

function App() {
  return (
 
    <BrowserRouter>
      <Navbar /> {/* A Navbar fica aqui para aparecer em todas as páginas */}
      
      {/* Usamos uma tag 'main' para o conteúdo principal por boas práticas */}
      <main className="main-content">
        {/* 4. O 'Routes' define a área onde o conteúdo da página será trocado */}
        <Routes>
          {/* 5. Cada 'Route' mapeia um caminho (URL) para um componente */}
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/curriculo" element={<Curriculo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;