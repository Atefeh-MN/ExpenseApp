import style from "./transactionform.module.css"
import { useState } from 'react';

const TransActionForm = ({addTransaction}) => {
  const [formValue,setFormValue]=useState({type:"expense",amount:0,description:""});

  const changeHandler=(e)=>{
      setFormValue({...formValue,[e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
      e.preventDefault()
      addTransaction(formValue)
  }

    return ( 
        <form  onSubmit={submitHandler} className={style.container}>
            <input type="number" name="amount" value={formValue.amount} placeholder="Amount" className={style.Input} onChange={changeHandler}/>
            <input type="text" name="description" value={formValue.description} placeholder="Description" className={style.Input} onChange={changeHandler}/>
            <div className={style.radio}>
                <input type="radio" value="expense" name="type" checked={formValue.type==="expense"} onChange={changeHandler}/>
                <label className={style.label}>Expense</label>
                <input type="radio" value="income" name="type" checked={formValue.type==="income"} onChange={changeHandler} />
                <label >income</label>
            </div>
            <button  type="submit" className={style.button}>Add Transaction</button>
            </form>
     );
}
 
export default TransActionForm;