import style from "./style.module.css"

export const CardEmpty = () => {
   
   return (
      <div className={style.cardEmpty__container}>
         <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
         <img src="src\assets\NoCard.svg" alt="Sua lista esta vazia" />
      </div>
   )
}
