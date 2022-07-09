import React, { useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'



// props can be named anything, this has kv pairs
const ExpenseItem = (props) => {

  // always two elements are returned in this arrayi
  //title1 and setTitle11 are used to show this
  const [title1, setTitle11] = useState(props.title); // can be named anything (order matters)

  console.log('expense item executed');
  //let title = props.title;

  const clickHandler = () => {
    setTitle11('updated');
    console.log("clicked");
    //title = "updated ";
  }



  return (<Card className="expense-item">
             <ExpenseDate date={props.date}/>
       
         
             <div className="expense-item__description"> 
             <h2>{title1}ccc</h2></div>
             <div className="expense-item__price">{props.amount}</div>
             <button onClick={clickHandler}>Change title</button>
          </Card>)
}

export default ExpenseItem;
