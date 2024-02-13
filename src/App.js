import './App.css';
import Partners from './components/Partners/Partners';
import { useState } from 'react';
import Count from './components/count/Count';

function App() {
  const [partner1, setPartner1] = useState('Партнер 1')
  const [partner2, setPartner2] = useState('Партнер 2')
  const [disabled, setDisabled] = useState(false)
  return (
    <div className='app'>
      <Partners partner1={partner1} setPartner1={setPartner1} partner2={partner2} setPartner2={setPartner2} disabled={disabled}/>
      <Count partner1={partner1} partner2={partner2} disabled={disabled} setDisabled={setDisabled}></Count>
    </div>
  );
}

export default App;
