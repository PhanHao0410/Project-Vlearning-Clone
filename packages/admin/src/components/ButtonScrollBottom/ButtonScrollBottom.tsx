import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { ButtonScroll } from './styles';

const ButtonScrollBottom = () => {
  return (
    <ButtonScroll onClick={() => window.scrollTo(0, 0)}>
      <ArrowUpwardIcon className="icon" />
    </ButtonScroll>
  );
};

export default ButtonScrollBottom;
