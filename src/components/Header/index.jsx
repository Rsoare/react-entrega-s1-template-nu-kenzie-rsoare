import { Button } from "../ButtonChangerPage"
import { ButtonDarkMode } from "../ButtonDarkMode"
import style from "./style.module.css"

export const Header = ({ setChangePage,setDarkMode,darkMode }) => {

   return (
      <div className={style.header__container}>

         {darkMode ? (<img src="src/assets/Nu Kenzie.svg" alt="Logo Nu kenzie" />):
         (<img src="src/assets/Nu Kenzie black.svg" alt="Logo Nu kenzie" />)}
      

         <div className= {style.buttons__header}>
            <Button
               setChangePage={setChangePage}
               BooleanValue={false}
               text={"Inicio"}
               className ={"button header"}
            />

            <ButtonDarkMode 
            setDarkMode = {setDarkMode} 
            darkMode = {darkMode}
            />

         </div>

      </div>
   )
}
