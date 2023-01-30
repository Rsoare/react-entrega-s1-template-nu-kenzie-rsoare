
export const ButtonDarkMode = ({setDarkMode,darkMode}) => {

   return (
      <button 
         type="button" 
         onClick={(() => setDarkMode(!darkMode))} 
         className="button DarkMode">{darkMode ? ("Tema Claro"):("Tema Escuro")}
      </button>
   )
}
