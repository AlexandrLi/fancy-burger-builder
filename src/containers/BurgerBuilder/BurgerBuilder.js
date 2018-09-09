import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

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
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => sum + el, 0);
    this.setState({purchasable: sum > 0});
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    alert('You have ordered a fancy burger!');
  };

  addIngredientHangler = type => {
    const oldCount = this.state.ingredients[type];
    const ingredients = {...this.state.ingredients, [type]: oldCount + 1};
    const oldPrice = this.state.totalPrice;
    this.setState({
      ingredients,
      totalPrice: oldPrice + INGREDIENT_PRICES[type],
    });
    this.updatePurchaseState(ingredients);
  };

  removeIngredientHangler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const ingredients = {...this.state.ingredients, [type]: oldCount - 1};
    const oldPrice = this.state.totalPrice;
    this.setState({
      ingredients,
      totalPrice: oldPrice + INGREDIENT_PRICES[type],
    });
    this.updatePurchaseState(ingredients);
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
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.purchaseCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHangler}
          ingredientRemoved={this.removeIngredientHangler}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          disabled={disabledInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
