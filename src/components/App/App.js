
import './App.css';
import { AppContainer } from '../AppContainer/AppContainer';
import control from '../../data/Control/Control'
import {NextButton} from '../NextButton/NextButton';
import TourOverflow from '../TourOverflow/TourOverflow';
import {Tour} from '../Tour/Tour';
 
function testFunc(e) {
if(control.test)return;
  console.log(e)
}
function App() {
  const test = localStorage.getItem("test")
  console.log(test)
  return (
    <AppContainer>
    <div className="App">
   <p> hello</p>
   <button onClick={testFunc}>onClick</button>
    </div>
    <NextButton/>
    {test === 'ivan' ? <TourOverflow/> : <Tour/>}
    </AppContainer>
  );
}

export default App;
