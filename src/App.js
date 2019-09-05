import React from 'react';
import Routes from './components/Routes/Index';
import Header from './components/Header/Header';
import "./App.scss";

function App() {
  return (
      <main className="App">
        <Header>
          <Routes />
        </Header>
      </main>
  );
}

export default App;
