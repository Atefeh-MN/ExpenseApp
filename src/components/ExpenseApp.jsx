import { useState } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from './OverViewComponent';


const ExpenseApp = () => {
    const [expense,setExpense]=useState(0);
    const [income,setIncome]=useState(0);
    const [transaction,setTransaction]=useState([]);

    const addTransaction=(formValue)=>{
        const data={...formValue,id:Date.now()}
        setTransaction([...transaction,data])
    }
    return ( 
        <section className='container'>
       <OverViewComponent income={income} expense={expense} addTransaction={addTransaction}/>     
       <TransActionComponent transaction={transaction}/>
      </section>
     );
}
 
export default ExpenseApp;