import { useState,useEffect } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from './OverViewComponent';


const ExpenseApp = () => {
    const [expense,setExpense]=useState(0);
    const [income,setIncome]=useState(0);
    const [transaction,setTransaction]=useState([]);
    const [searchItem,setSearchItem]=useState("");
    const [filteredTnx,setFilteredTnx]=useState([]);
    
    const filteredTransaction=(searchItem)=>{
        if(!searchItem||searchItem===""){
            setFilteredTnx(transaction);
            return;
        }
        const filtered=transaction.filter((t)=>t.description.toLowerCase().includes(searchItem.toLowerCase()));
        setFilteredTnx(filtered);
    }

    const addTransaction=(formValue)=>{
        const data={...formValue,id:Date.now()}
        setTransaction([...transaction,data])
      
    }
    useEffect(() => {
       let exp=0;
       let inc=0;
       transaction.forEach((t)=>{
           t.type==="expense"?(exp=exp+parseFloat(t.amount)):(inc=inc+parseFloat(t.amount));
       })
       setIncome(inc);
       setExpense(exp);
       filteredTransaction(searchItem)
    }, [transaction]);
    return ( 
        <section className='container'>
       <OverViewComponent income={income} expense={expense} addTransaction={addTransaction} />     
       <TransActionComponent filteredTnx={filteredTnx} searchItem={searchItem} filteredTransaction={filteredTransaction} setSearchItem={setSearchItem}/>
      </section>
     );
}
 
export default ExpenseApp;