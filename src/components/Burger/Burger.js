import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ingredients}) => {
  const transformedIngredients = Object.keys(ingredients).map(key => {
    return [...Array(ingredients[key])].map((_, index) => {
      return <BurgerIngredient key={key + index} type={key} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
