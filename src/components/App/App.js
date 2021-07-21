
import './App.css';
import { AppContainer } from '../AppContainer/AppContainer';
import control from '../../data/Control/Control'
import {NextButton} from '../NextButton/NextButton';
 
function testFunc(e) {
if(control.test)return;
  console.log(e)
}
function App() {
  return (
    <AppContainer>
    <div className="App">
   <p> hello</p>
   <button onClick={testFunc}>onClick</button>
    </div>
    <NextButton/>
    </AppContainer>
  );
}

export default App;
