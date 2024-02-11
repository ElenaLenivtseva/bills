import './App.css';
import Partners from './components/Partners/Partners';
import OpenForm from './components/openForm/OpenForm';
import { useState } from 'react';
import Table from './components/table/Table';
import Count from './components/count/Count';

function App() {
  const [partner1, setPartner1] = useState('Партнер 1')
  const [partner2, setPartner2] = useState('Партнер 2')
  return (
    <div>
      <Partners partner1={partner1} setPartner1={setPartner1} partner2={partner2} setPartner2={setPartner2}/>
      <Count partner1={partner1} partner2={partner2}></Count>
      {/* <OpenForm partner1={partner1} partner2={partner2}/>
      <Table partner1={partner1} partner2={partner2}></Table> */}
    </div>
  );
}

export default App;
