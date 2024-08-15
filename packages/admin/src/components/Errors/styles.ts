import styled from 'styled-components';
import { devices } from '../../V-Learning/DeviceScreen';

export const ErrorsContain = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  padding-top: 90px;
  background-image: url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif');
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorsContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px 0;
  text-align: center;
  .content-404 {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 5%;
    @media ${devices.maxpn} {
      top: 28%;
    }
    h1 {
      color: #ed85ab;
      font-size: 80px;
      font-weight: 600;
      font-family: cursive;
      text-align: center;
      @media ${devices.maxmd} {
        font-size: 60px;
      }
      @media ${devices.maxpn} {
        font-size: 40px;
      }
    }
  }
  .content-box-404 {
    position: absolute;
    width: 100%;
    padding: 0 50px;
    left: 50%;
    top: 70%;
    transform: translate(-50%);
    @media ${devices.maxmd} {
      top: 60%;
    }
    @media ${devices.maxpn} {
      top: 53%;
    }
    h3 {
      font-family: monospace;
      font-size: 40px;
      font-weight: 600;
      text-align: center;
    }
    .btn-back {
      padding: 8px 12px;
      color: white;
      background-color: rgb(65, 178, 148);
      border-radius: 0px;
      transition: all 0.3s;
      &:hover {
        transition: all 0.3s;
        padding: 7px 11px;
      }
    }
  }
`;
