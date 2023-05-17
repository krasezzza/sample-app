import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/user/2').then((res) => {
      return res.json()
    }).then((data) => {
      return setData(data);
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          { !data ? "Loading..." : `Hello, ${data.name} :)` }
        </p>
      </header>
    </div>
  );
}

export default App;
