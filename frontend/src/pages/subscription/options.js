import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';

export default [
  {
    Icon: FaFire,
    type: 'Silver',
    price: 9.99,
    options: ['100 Transactions', '2% Cash Back', '$10,000 Limit'],
  },
  {
    dark: true,
    Icon: GiCrystalize,
    type: 'Gold',
    price: 29.99,
    options: ['1000 Transactions', '3.5% Cash Back', '$100,000 Limit'],
  },
  {
    Icon: BsXDiamondFill,
    type: 'Bronze',
    price: 19.99,
    options: ['Unlimited Transactions', '5% Cash Back', 'Unlimited Spending'],
  },
];
