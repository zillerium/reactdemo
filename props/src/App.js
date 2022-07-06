import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

const expenses = [
    { id: 'e1', title: "Car Insurance1", amount: 294.67, date: new Date(2020, 2, 28) },
    { id: 'e2', title: "Car Insurance2", amount: 400.67, date: new Date(2021, 2, 28) },
    { id: 'e3', title: "Car Insurance3", amount: 500.67, date: new Date(2021, 10, 28) },
    { id: 'e4', title: "Car Insurance4", amount: 600.67, date: new Date(2022, 2, 28) },
  ]
function App() {


  return (

    <div>
         <Expenses items={expenses} />
     </div>
  );
}

export default App;
