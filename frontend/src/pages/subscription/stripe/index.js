import React, { memo, useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Modal from 'react-modal';

import './style.scss';
import axios from 'axios';

const CARD_STYLE = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      fontFamily: 'Open Sans, sans-serif',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#c23d4b',
    },
  },
};

const customStyles = {
  content: {
    border: 'none',
    height: 500,
    maxWidth: 500,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    background: 'transparent',
  },
  overlay: {
    margin: '0 auto',
    backgroundColor: ' rgba(255,255,255,0.5)',
  },
};

const Stripe = ({ openModal = false, closeModal, name, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(elements.getElement(CardElement));

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    /*     if (!error) {
      // console.log(paymentMethod)
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          'http://localhost:3001/api/checkout',
          {
            id,
            amount: 10000, //cents
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    } */
  };

  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={openModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <form className='stripe-form-card monkeys-p-3' onSubmit={handleSubmit}>
        <h3 className=''>Card details</h3>
        <div className='monkeys-my-2 stripe-form'>
          <CardElement options={CARD_STYLE} />
        </div>
        <h4 className='monkeys-py-2'>Details :</h4>
        <p>
          <span>{name}</span> <span className='plan-price'>${price}</span>
        </p>
        <button disabled={!stripe}>Pay</button>
      </form>
    </Modal>
  );
};

export default memo(Stripe);
