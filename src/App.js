import React from "react";
import logo from './logo.svg';
import './App.css';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado.js'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'
import CominicacionComponentes from './components/ComunicacionEntreComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/Hooks/ContadorHooks'
import ScrollHooks from './components/Hooks/ScrollHooks'
import RelojHooks from './components/Hooks/RelogHooks'
import AjaxHooks from "./components/Hooks/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formulario from "./components/Formulario";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  return (
    <div className="App">
      <hr></hr>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Propiedades cadena="Esto es texto" 
        valor = {19} 
        boolean = {true} 
        shein = {[1,2,3]}
        object={{name:"jhoset", mail:"jhoset@gmail.com"}}
        element= {<i>Esto es un elemento de React</i>} 
        squared = {num => num*num}
        />
        <p>----------------------------------------------------------------------</p>
        <Estado />
        <hr></hr>
        <p>----------------------------------------------------------------------</p>
        <RenderizadoCondicional/>
        <p>----------------------------------------------------------------------</p>
        <RenderizadoElementos/>
        <p>----------------------------------------------------------------------</p>
        <EventosES6/>
        <p>----------------------------------------------------------------------</p>
        <EventosES7/>
        <p>----------------------------------------------------------------------</p>
        <MasSobreEventos/>
        <p>----------------------------------------------------------------------</p>
        <CominicacionComponentes/>
        <p>----------------------------------------------------------------------</p>
        <CicloVida/>
        <CominicacionComponentes/>
        <p>----------------------------------------------------------------------</p>
        <AjaxApis/>
        <p>----------------------------------------------------------------------</p>
        <ContadorHooks titulo="Seguidores" />
        <p>----------------------------------------------------------------------</p>
        <ScrollHooks/>
        <p>----------------------------------------------------------------------</p>
        <RelojHooks/>
        <p>----------------------------------------------------------------------</p>
        <AjaxHooks/>
        <p>----------------------------------------------------------------------</p>
        <HooksPersonalizados/>
        <p>----------------------------------------------------------------------</p>
        <Referencias/>
        <p>----------------------------------------------------------------------</p>
        <Formulario/>
        <p>----------------------------------------------------------------------</p>
        <Estilos/>
        <p>----------------------------------------------------------------------</p>
        <ComponentesEstilizados/>
      </header>
      
    </div>
  );
}

export default App;
