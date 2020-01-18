import React, { useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';



//Componente: bloco isolado de HTML, CSS e js , o qual nao interfere no restante da aplicação
//Propriedade: informações que um compente PAI passa para o componente filho
//Estado: informações mantidas pelo componente



function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">

            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="username_github" required />

          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>

        </ul>
      </main>
    </div>
  );
}

export default App;
