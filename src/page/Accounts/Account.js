import React from 'react';
import AccountsContent from '../../components/Accounts/AccountsContent';
import Header from '../../components/Header/Header';

const Accounts = () => {
  return (
    <div>
      <Header isNavShow={false} />
      <AccountsContent />
    </div>
  );
};

export default Accounts;
