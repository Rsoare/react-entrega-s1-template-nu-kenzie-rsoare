import { Card } from "../CreateCard"
import style from "./style.module.css"

export const List = ({ listTransactions,removeCard}) => {
   return (
      <ul className={style.list__container}>
         {
            listTransactions.map(cardItem => <Card key={cardItem.id} cardItem ={cardItem} removeCard = {removeCard}/>)
         }
      </ul>
   )
}
