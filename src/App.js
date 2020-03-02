import React from 'react';
import 'antd/dist/antd.css';
import MainLayout from './components/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout />
      </Router>
    </div>
  );
}

export default App;
