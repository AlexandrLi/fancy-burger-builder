import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const {children, show, modalClosed} = this.props;
    return (
      <Fragment>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? 1 : 0}}
        >
          {children}
        </div>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
