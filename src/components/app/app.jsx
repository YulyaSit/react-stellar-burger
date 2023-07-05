import stylesApp from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
function App() {
  return (
    <>
    <AppHeader />
    <main className={stylesApp.main}>
      <div className={stylesApp.content}>
        <BurgerIngredients ingredientsBurger={data} />
        <BurgerConstructor element={data} />
      </div> 
    </main>
    </>
  );
}

export default App;
