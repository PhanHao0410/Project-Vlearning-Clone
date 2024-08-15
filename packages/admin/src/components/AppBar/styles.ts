import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { devices } from '../../V-Learning/DeviceScreen';

export const AppBarContain = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 90px;
  background-color: RGB(255 255 255);
  padding: 5px 50px;
  font-family: 'Roboto', sans-serif;
  position: fixed;
  z-index: 999;
  /* box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.15); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.maxpn} {
    padding: 5px 10px;
  }
`;

export const LogoContain = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .css-1ps6pg7-MuiPaper-root {
    background-color: RGB(245 245 245);
    box-shadow: none;
  }
  img {
    height: 95%;
    width: 200px;
    cursor: pointer;
    &:hover {
      height: 100%;
      width: 210px;
      transition: all 0.3s;
    }
  }
`;

export const ParperSearchContain = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 130px;
  margin-left: 10px;
  height: 40px;

  .css-yz9k0d-MuiInputBase-input {
    color: black;
  }
  @media ${devices.maxlg} {
    display: none;
  }
`;

export const SelectAppbarContain = styled.div`
  display: flex;
  align-items: center;

  .select-contain {
    transition: height 2s;
    &:hover {
      .select-direct {
        color: #41b294;
      }
      .show-select {
        visibility: visible;
        position: absolute;
        z-index: 999;
        transform: translateY(0%);
        transition-timing-function: ease-in;
        transition: 0.2s;
      }
    }
  }
  .select-item {
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    padding: 10px 10px;
    color: rgb(37 37 37);
    transition: all 0.5s;
    &:hover {
      color: #41b294;
    }
  }
  @media ${devices.maxlg} {
    display: none;
  }
`;

export const ShowContentSelect = styled.div`
  min-width: 200px;
  background-color: rgba(1, 135, 126, 0.5);
  visibility: hidden;
  position: absolute;
  z-index: 999;
  p {
    padding: 15px 8px;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    color: #252525;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

export const ActionMenuContain = styled.div`
  .drawer-contain {
    transition: 0.25s;
    transition-timing-function: ease-out;
    transform: translateX(100%);
  }
  .icon-logout {
    position: absolute;
    top: 30px;
    right: 40px;
    visibility: hidden;
    color: RGB(246 186 53);
    @media ${devices.maxlg} {
      display: none !important;
    }
    :hover {
      cursor: pointer;
    }
  }
  .action-user {
    @media ${devices.maxlg} {
      display: inline-block;
    }
    &:hover {
      .icon-logout {
        visibility: visible;
      }
    }
  }
`;
export const ButtonSignIn = styled(Button)`
  padding: 5px 8px !important;
  background-color: RGB(246 186 53) !important;
  color: white !important;
`;

export const IconShowDrawer = styled(ArrowDropDownIcon)`
  display: none !important;
  @media ${devices.maxlg} {
    display: block !important;
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const DrawerContain = styled.div`
  position: absolute !important;
  min-width: 180px;
  z-index: 999 !important;
  background-color: RGB(52 159 152);
  transform: translateX(-18%);
  transition-timing-function: ease-in;
  transition: 0.2s;
  margin-top: 10px;
  text-align: center;
  input {
    margin-bottom: 15px;
    margin-top: 8px;
    height: 40px;
    width: 95%;
    border: none;
    font-size: 18px;
  }
  p {
    padding: 15px 0px;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    color: #252525;
    position: relative;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  .select-contain {
    .show-select {
      transition: all 0.2s;
      transform: translateX(-100%);
    }
    &:hover {
      .title-select {
        color: white;
      }
      .show-select {
        display: block;
        visibility: visible;
        transition: all 0.2s ease;
      }
    }
  }
`;

export const ImageUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  margin-right: 20px;
  @media ${devices.maxlg} {
    margin-right: 0px !important;
  }
  :hover {
    cursor: pointer;
  }
`;
