import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../Context/StateContext';
import { successCanvas } from '../lib/utils';

const Success = () => {
  const { setTotalQuantities, setTotalPrice, setCartItem } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItem([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    successCanvas();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Done, your welcom, come again</h2>
        <p className="email-msg">check your email inbox for the receipt</p>
        <p className="description">
          If you have any questions, please email{' '}
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button className="btn" type="button" width="250" onClick="">
            Complete shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
