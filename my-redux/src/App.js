import './App.css';
import Counter from './Components/Counter';
import { CounterContextProvider } from './Context/index';

function App() {
  return (
    <CounterContextProvider>
      <Counter/>
    </CounterContextProvider>
  );
}

export default App;
