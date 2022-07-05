import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {

  const expenses = [
    { id: 'e1', title: "Car Insurance1", amount: 294.67, date: new Date(2020, 2, 28) },
    { id: 'e2', title: "Car Insurance2", amount: 400.67, date: new Date(2021, 2, 28) },
    { id: 'e3', title: "Car Insurance3", amount: 500.67, date: new Date(2021, 10, 28) },
    { id: 'e4', title: "Car Insurance4", amount: 600.67, date: new Date(2022, 2, 28) },
  ]
  return (

    <div>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
