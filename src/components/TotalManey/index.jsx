import style from "./style.module.css"

export const TotalManey = ({listTransactions}) => {

   const totalValue = listTransactions.reduce((accumulator,currentValue) => {
         return accumulator + Number(currentValue.value)
      },0)
      

   return (
      <div className={style.total__container}>
         <h3 className="title three">Valor total:</h3>
         <p className="paragraph">O valor se refere ao saldo </p>
         <span>$ {totalValue.toFixed(2)}</span>
      </div>
   )
}
