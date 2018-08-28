import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = ({ingredients, purchaseContinued, purchaseCancelled}) => {
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
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
