import style from  './overview.module.css';
import { useState } from 'react';
import TransActionForm from './TransActionForm';


const OverViewComponent = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow]=useState(false)

    return ( 
    <div >
        <div className={style.flex}>
            <p>Balance : {income-expense}</p>
            <button className={style.button} onClick={()=>setIsShow((prevstate)=>!prevstate)}>{isShow?"cancel":"Add"}</button>
        </div>
        {isShow&& <TransActionForm addTransaction={addTransaction}/>}
        <div className={style.flex}>
            <div className={style.box1}>Expense -  {expense}</div>
            <div className={style.box2}>Income - {income}</div>
        </div>
    </div>
     );
}
 
export default OverViewComponent;