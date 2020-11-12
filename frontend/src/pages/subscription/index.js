import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './style.scss';
import Card from './card';
import options from './options';
import Stripe from './stripe';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Subscription = () => {
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const onClick = ({ price, type: name }) => {
    setData({ price, name });
    setOpenModal(true);
  };
  return (
    <>
      <div className='subscription-page monkeys-p-3'>
        <div className='subscription-page-content'>
          <h2 className='monkeys-my-4'>Choose your plan!</h2>
          <div className='plans-container'>
            {options.map((item, i) => (
              <Card {...item} key={i} onClick={() => onClick(item)} />
            ))}
          </div>
          <p>
            All our plans are monthly subscriptions and will renew
            automatically. You may cancel or up-/downgrade at any time.
          </p>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <Stripe
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
          {...data}
        />
      </Elements>
    </>
  );
};

export default Subscription;
