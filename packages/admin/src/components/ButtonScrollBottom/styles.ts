import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonScroll = styled(Button)`
  position: fixed !important;
  z-index: 99 !important;
  bottom: 20px !important;
  right: 10px !important;
  height: 40px !important;
  width: 40px !important;
  color: white !important;
  min-width: 10px !important;
  min-height: 10px !important;
  background-color: #41b294 !important;
  border-radius: 8px !important;
  .icon {
    font-size: 25px;
    font-weight: 600 !important;
  }
`;
