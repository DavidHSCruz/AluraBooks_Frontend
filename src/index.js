import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './rotas/Home'
import Favoritos from './rotas/Favoritos'
import Navegacao from './Components/Navegacao'
import { PesquisaProvider } from './context/PesquisaContext'
import Estante from './rotas/Estante'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(90deg, #002F52 35%, #326589);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::-webkit-scrollbar-thumb{
        background-color: #a4b4c4;
        border-radius: 5px;
    }
    &::-webkit-scrollbar{
        background-color: #344464;
        width: 5px;
        border-radius: 5px;
    }
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Navegacao />
      <PesquisaProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={<Favoritos />} />
            <Route path='/estante' element={<Estante />} />
          </Routes>
      </PesquisaProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
