import logo from './logo.svg';
import './App.css';

function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, world! I am John.</h1>
      <h2>It is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
  

