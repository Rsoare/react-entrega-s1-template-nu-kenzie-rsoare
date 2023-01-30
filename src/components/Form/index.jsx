import { useState } from "react"
import style from "./style.module.css"

export const Form = ({ addTransactions }) => {

const [formData, setformData] = useState({
   description: "",
   type: "entrada",
   value: "",
})

const submit = (event) => {
   event.preventDefault()

   if (formData.description !== "" && formData.value !== "") {
      addTransactions(formData)
   }

   setformData({
      description: "",
      type: "entrada",
      value: "",
   })
}

return (
   <form onSubmit={submit} className={style.form__container}>
      
      <label 
         htmlFor="description" 
         className="Caption"
         >Descrição
      </label>

      <input
         placeholder="Digite aqui sua descrição"
         className={style.form__inputDescription}
         type="text"
         id="description"
         value={formData.description}
         onChange={(event) =>setformData({ ...formData, description: event.target.value })}
      />

      <p className="paragraph">EX: Compras de roupas</p>

   <div className={style.form__values}>
      <div>

         <label 
            htmlFor="value" 
            className="Caption"
            >Valor
         </label>

         <input
            className={style.form__inputs}
            placeholder="00.00"
            type="text"
            id="value"
            value={formData.value}
            onChange={(event) =>
            setformData({ ...formData, value: event.target.value })}
         />

         <span>R$</span>

      </div>

      <div>
         <label 
            htmlFor="Type" 
            className="Caption"
            >Tipo de valor
         </label>

         <select
            className={style.form__inputs}
            id="Type"
            value={formData.type}
            onChange={(event) =>
            setformData({ ...formData, type: event.target.value })} >

            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>

         </select>
      </div>
   </div>

      <button 
         className="button form" 
         type="submit"
         >Inserir valor
      </button>
      
   </form>
   )
}
