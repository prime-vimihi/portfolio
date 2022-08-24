import Layout from 'common/layout';
import React from 'react';
import './App.css';
import Homepage from './features/homepage';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
