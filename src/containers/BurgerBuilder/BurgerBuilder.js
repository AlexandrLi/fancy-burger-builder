import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHangler = type => {
    const oldCount = this.state.ingredients[type];
    const oldPrice = this.state.totalPrice;
    this.setState(prevState => ({
      ...prevState,
      ingredients: {...prevState.ingredients, [type]: oldCount + 1},
      totalPrice: oldPrice + INGREDIENT_PRICES[type],
    }));
  };
  removeIngredientHangler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const oldPrice = this.state.totalPrice;
    this.setState(prevState => ({
      ...prevState,
      ingredients: {...prevState.ingredients, [type]: oldCount - 1},
      totalPrice: oldPrice - INGREDIENT_PRICES[type],
    }));
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (const key in disabledInfo) {
      if (disabledInfo.hasOwnProperty(key)) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
    }
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHangler}
          ingredientRemoved={this.removeIngredientHangler}
          disabled={disabledInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
