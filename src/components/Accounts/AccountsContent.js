// import { faker } from '@faker-js/faker';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import AccountsHeader from './AccountsHeader';
import AccountTable from './AccountTable';
// const rows = Array.from(new Array(100).fill(null)).map((_, index) => {
//   return {
//     id: index + 1,
//     centerName: faker.company.bs(),
//     username: faker.name.findName().split(' ').join('').toLocaleLowerCase(),
//     password: faker.hacker.adjective(),
//     contact: faker.phone.number(),
//     email: faker.internet.email('a', 'b'),
//     location: faker.address.country(),
//     viewPage: index + 1,
//   };
// });
const AccountsContent = () => {
  const data = useSelector((state) => state.accounts);

  const [search, setSearch] = useState('');
  const filterData = useMemo(() => {
    if (!search) return data;
    const columnsProps = [
      'centerName',
      'username',
      'contact',
      'email',
      'location',
    ];

    console.time('search');

    const filterIds = columnsProps.reduce((acc, col) => {
      data.forEach((curr) => {
        if (
          curr?.[col]?.toLowerCase().includes(search.trim().toLowerCase()) &&
          !acc.includes(curr.id)
        ) {
          acc.push(curr.id);
        }
      });

      return acc;
    }, []);

    const filterItems = data.reduce((acc, curr) => {
      if (filterIds.includes(curr.id)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    console.timeEnd('search');

    return filterItems;
  }, [search, data]);

  return (
    <div>
      <AccountsHeader search={search} setSearch={setSearch} />
      <AccountTable data={filterData} />
    </div>
  );
};

export default AccountsContent;
