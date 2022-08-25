import { Box } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react';
import { useInnerSize } from '../../hooks/useInnerSize';
import Item from './Item';

const Content = () => {
  const { height: windowHeight } = useInnerSize();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  const removeItem = (id) => {
    const filterData = data.filter((item) => item.id !== id);
    setData(filterData);
  };

  const height = useMemo(() => {
    const calculateHeight = windowHeight / data.length;
    if (calculateHeight > 150) return calculateHeight;
    return 150 + 50;
  }, [data, windowHeight]);

  return (
    <Box as='div' sx={{ overflowY: 'auto', height: windowHeight }}>
      {data.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          date={item.date}
          id={item.id}
          height={height}
          removeItem={removeItem}
          dataLength={data.length}
        />
      ))}
    </Box>
  );
};

export default Content;

const DATA = [
  {
    id: 1,
    text: 'Senior Financial Analyst',
    date: '2/26/2022',
  },
  {
    id: 2,
    text: 'Accounting Assistant I',
    date: '3/23/2022',
  },
  {
    id: 3,
    text: 'Quality Engineer',
    date: '9/17/2021',
  },
  {
    id: 4,
    text: 'Programmer I',
    date: '11/29/2021',
  },
  {
    id: 5,
    text: 'Analog Circuit Design manager',
    date: '7/5/2022',
  },
  //   {
  //     id: 6,
  //     text: 'Analog Circuit Design manager',
  //     date: '7/5/2022',
  //   },
];
