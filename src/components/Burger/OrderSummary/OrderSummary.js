import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const {ingredients, price, purchaseContinued, purchaseCancelled} = this.props;
    const ingredientSummary = Object.keys(ingredients).map(key => (
      <li key={key}>
        <span style={{textTransform: 'capitalize'}}>{key}</span>: {ingredients[key]}
      </li>
    ));
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
    meat: PropTypes.number,
  }),
  price: PropTypes.number,
  purchaseContinued: PropTypes.func,
  purchaseCancelled: PropTypes.func,
};

export default OrderSummary;
