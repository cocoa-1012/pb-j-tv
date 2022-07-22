import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AccountsContent from '../../components/Accounts/AccountsContent';
import Header from '../../components/Header/Header';
import { fetchAllAccountsAction } from '../../store/account/accountAction';
const Accounts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAccountsAction());
  }, [dispatch]);

  return (
    <div>
      <Header isNavShow={false} />
      <Container>
        <AccountsContent />
      </Container>
    </div>
  );
};

export default Accounts;
