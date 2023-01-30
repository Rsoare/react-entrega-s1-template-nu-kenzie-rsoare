import style from "./style.module.css"
import cardEmpty from "../../assets/NoCard.svg"

export const CardEmpty = () => {
   
   return (
      <div className={style.cardEmpty__container}>
         <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
         <img src={cardEmpty} alt="Sua lista esta vazia" />
      </div>
   )
}
