import {uuid,Header, Form,List,TotalManey,CardEmpty,useState,style} from "./imports.jsx"

export const DashboardPage = ({setChangePage,setDarkMode,darkMode}) => {

   const [listTransactions, setListTransactions] = useState([
      {  description: "Salário recebido", type: "entrada", value: 2500,id:uuid() },
      {  description: "Conta de luz", type: "saida", value: -150,id:uuid() }
   ])

   const addTransactions = (newData) =>{
      const newTransaction = {...newData,id:uuid()}
      setListTransactions([...listTransactions,newTransaction])
   }

   const removeCard = (cardId) => {
      const newCard =  listTransactions.filter(Transaction => Transaction.id !== cardId)
      setListTransactions(newCard)
   }
   return (
      <>
         <header className={style.header}>
            <Header setChangePage={setChangePage} darkMode = {darkMode} setDarkMode={setDarkMode}/>
         </header>

         <main className={style.main__container} >

            <section className={style.form__container}>
               <Form addTransactions={addTransactions}/>
               { listTransactions.length > 0 && <TotalManey listTransactions = {listTransactions}/>} 
            </section>

            <section className={style.list__container} >
               <div>
                  <h2 className={`title three ${darkMode}`}>Resumo financeiro</h2>
               </div>
               
               { listTransactions.length > 0 ? (
                     <List listTransactions={listTransactions} removeCard ={removeCard} darkMode = {darkMode}/>):
                     (<CardEmpty darkMode />)
               }
            </section>
            
         </main>
      </>
   )
}

