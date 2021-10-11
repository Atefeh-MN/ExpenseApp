import style from  './overview.module.css';


const OverViewComponent = ({income,expense}) => {
    return ( 
    <div >
        <div className={style.flex}>
            <p>Balance : {income-expense}</p>
            <button className={style.button}>Add</button>
        </div>
        <div className={style.flex}>
            <div className={style.box1}>Expense -  {expense}</div>
            <div className={style.box2}>Income - {income}</div>
        </div>
    </div>
     );
}
 
export default OverViewComponent;