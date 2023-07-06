import ingredientsStyle from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import IngredientsList from '../IngredientsList/IngredientsList'
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types';
function BurgerIngredients( { ingredientsBurger }) {
    const [current, setCurrent] = React.useState('one')
    const buns = React.useMemo(() => ingredientsBurger.filter((m) => m.type === "bun"), [ingredientsBurger]);
    const sauces = React.useMemo(() => ingredientsBurger.filter((m) => m.type === "sauce"), [ingredientsBurger])
    const fillings = React.useMemo(() => ingredientsBurger.filter((m) => m.type === "main"), [ingredientsBurger])
    return (
                <section className={ingredientsStyle.ingredientsContainer}>
                    <h2 className={`${ingredientsStyle.title} text text_type_main-large`}>Соберите бургер</h2>
                    <div className={ingredientsStyle.tab}>
                        <Tab value="One" active={current === 'one'} onClick={setCurrent}>
                            Булки
                        </Tab>
                        <Tab value="Two" active={current === 'two'} onClick={setCurrent}>
                            Соусы
                        </Tab>
                        <Tab value="Three" active={current === 'three'} onClick={setCurrent}>
                            Начинки
                        </Tab>
                    </div>
                    <div className={`${ingredientsStyle.container} custom-scroll`}>
                      <h3 className={`${ingredientsStyle.subtitle} text text_type_main-default`}>Булки</h3>
                      <ul className={ingredientsStyle.list}>
                          {buns.map((ingredientsBurger) => (
                              <li key={ingredientsBurger._id}>
                                  <IngredientsList item={ingredientsBurger} />
                              </li>
                          ))}
                      </ul>
                      <h3 className={`${ingredientsStyle.subtitle} text text_type_main-default`}>Соусы</h3>
                      <ul className={ingredientsStyle.list}>
                          {sauces.map((ingredientsBurger) => (
                              <li key={ingredientsBurger._id}>
                                  <IngredientsList item={ingredientsBurger} />
                              </li>
                          ))}
                      </ul>
                      <h3 className={`${ingredientsStyle.subtitle} text text_type_main-default`}>Начинки</h3>
                      <ul className={ingredientsStyle.list}>
                          {fillings.map((ingredientsBurger) => (
                              <li key={ingredientsBurger._id}>
                                  <IngredientsList item={ingredientsBurger} />
                              </li>
                          ))}
                      </ul>
                    </div>
                </section>
    )
}

BurgerIngredients.propTypes = {
    ingredientsBurger: PropTypes.arrayOf(ingredientPropType)
}
export default BurgerIngredients