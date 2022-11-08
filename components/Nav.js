import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <div>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </div>
  );
}
