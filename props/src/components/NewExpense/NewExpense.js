
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = () => {
    return <div className="new-expense">
    <form>
      <ExpenseForm />
    </form>
    </div>
};



export default NewExpense;