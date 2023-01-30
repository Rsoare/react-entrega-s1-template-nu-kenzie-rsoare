export const Button = ({setChangePage,BooleanValue,text,className}) =>{

   return(
      <button 
         className={className} 
         type="button" 
         onClick={() => setChangePage(BooleanValue)}>{text}
      </button>
   )
}