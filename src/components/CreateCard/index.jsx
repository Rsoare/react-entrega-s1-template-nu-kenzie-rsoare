import style from "./style.module.css"
import trash from "../../assets/trash.svg"

export const Card = ({cardItem,removeCard}) => {

   return (
      <li className={cardItem.type == "entrada" ? (style.card__borderGreen) : (style.card__borderGrey)}>
         <div className={style.card__container}>

            <h3 className="card__title three">{cardItem.description}</h3>
            <span className="card__Caption">{cardItem.type}</span>

            <span 
            className="card__Caption"  
            id={style.card__value}>R$ {Number(cardItem.value).toFixed(2)}
            </span>

            <button 
               type="button" 
               onClick={() => 
               removeCard(cardItem.id)}> 
               <img src={trash} alt="icone de lixeira" aria-label="Botão para deletar lista"/> 
            </button>

         </div>
      </li>
   )
}
