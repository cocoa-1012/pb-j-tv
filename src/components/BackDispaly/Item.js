import { Box } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react';

const Item = ({ date, text, height = 100, removeItem, id, dataLength }) => {
  const [isBlink, setIsBlink] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsBlink((p) => !p);
    }, 0.5 * 1000);
    setTimeout(() => {
      clearInterval(timer);
      setIsBlink(false);
    }, 5 * 1000);
    return () => {
      setIsBlink(false);
      clearInterval(timer);
    };
  }, []);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       removeItem(id);
  //     }, 10 * 1000);
  //   }, [id, removeItem]);

  const fontSize = useMemo(() => {
    if (!text) return 0;
    if (text.length > 99) return 25;
    if (text.length > 79) return 35;
    if (text.length > 49) return 45;
    if (text.length > 36) return 45;
    if (text.length > 19) return 50;
    return 60;
  }, [text]);

  return (
    <Box
      sx={{
        height,
      }}
    >
      <Box
        as={'div'}
        sx={{
          background: 'red',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'center',
          py: '10px',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          px: '20px',
        }}
      >
        <Box as={'div'}></Box>
        <Box as={'h2'}>New Message</Box>
        <Box as={'h2'}>{date}</Box>
      </Box>
      <Box
        as={'h2'}
        sx={{
          background: isBlink ? 'yellow' : 'white',
          width: '100%',
          textAlign: 'center',
          py: '10px',
          color: '#000',
          fontSize,
        }}
      >
        {text}
      </Box>
    </Box>
  );
};

export default Item;
