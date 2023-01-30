import { Button } from "../../components/ButtonChangerPage"
import style from "./style.module.css"
import Illustration from "../../assets/Illustration.svg"
import nuKenzieWhite from "../../assets/Nu Kenzie.svg"

export const LandingPage = ({ setChangePage }) => {

   return (

      <main className={style.main__container}>

         <section className={style.section__infoPage}>

            <div>
               <img src={nuKenzieWhite} alt="Logo Nu kenzie" />
               <h2 className="title one">Centralize o controle das suas finanças</h2>
               <p className="Headline">De forma rápida e segura</p>
            </div>

            <Button
               className={"button landing__page"}
               setChangePage={setChangePage}
               BooleanValue={true}
               text={"Iniciar"}
            />
         </section>

         <section className={style.section__Illustration}>
            <img src= {Illustration} alt="ilustração da pagina" />
         </section>

      </main>
   )
}
