import styled from 'styled-components';
import { devices } from '../../V-Learning/DeviceScreen';

export const FooterContain = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  font-family: 'Roboto', sans-serif;
  background-color: rgb(240, 248, 255);
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media ${devices.maxmd} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }
  @media ${devices.maxsm} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`;

export const InformContain = styled.div`
  height: 100%;
  .title-inform {
    color: #252525;
    font-family: 'Arial Black';
    display: inline-block;
    position: relative;
    font-size: 20px;
    text-shadow: 5px -2px 3px #54d2c0;
    font-weight: 700;
    transition: all 0.3s;
    cursor: pointer;
    height: 50px;
    span {
      font-size: 40px;
      color: #41b294;
      padding-right: 3px;
      transition: all 0.3s;
    }
    .icon-keyboard {
      box-shadow: 5px -2px 3px #54d2c0 !important;
      position: absolute;
      right: 5px;
      top: 10px;
    }
    &:hover {
      font-size: 21px;
      transition: all 0.3s;
      span {
        font-size: 41px;
        transition: all 0.3s;
      }
    }
  }
  .inform-contain {
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 10px;
    transition: all 0.5s;
    .icon-contain {
      width: 40px;
      height: 40px;
      background-color: rgb(65, 178, 148);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      .icon-item {
        color: white;
        font-size: 20px;
      }
    }
    p {
      font-weight: 600;
    }
    :hover {
      transform: translatey(-3px);
      transition: all 0.5s;
      p {
        color: rgb(65, 178, 148);
      }
    }
  }
`;
export const SelectedContain = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  .select-link {
    width: 50%;
    h3 {
      font-size: 25px;
      font-weight: 700;
    }
    p {
      padding: 6px 3px;
      font-weight: 500;
      font-size: 17px;
      transition: all 0.5s;
      cursor: default;
      :hover {
        transform: translateY(-2px);
        transition: all 0.5s;
        color: rgb(65, 178, 148);
      }
    }
  }
`;
export const FormAdviseContain = styled.div`
  height: 100%;
  h3 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 2px;
  }
  input {
    display: block;
    width: 60%;
    padding: 8px;
    font-size: 16px;
    margin: 8px 10px;
    border: 2px solid RGB(65 178 148);
    outline: none;
    border-radius: 6px;
    transition: all 0.5s;
    @media ${devices.maxXl} {
      width: 80%;
    }
    @media ${devices.maxal} {
      width: 90%;
    }
    @media ${devices.maxmd} {
      width: 100%;
    }
    :focus {
      transform: translateX(-4px);
      transition: all 0.5s;
    }
  }
  .btn-submit {
    background-color: rgb(246, 186, 53);
    padding: 5px 12px;
    color: white;
    font-size: 16px;
    margin: 0px 10px;
    transition: all 0.3s;
    :hover {
      background-color: rgb(246, 186, 53);
      transition: all 0.3s;
      transform: translateX(-2px);
    }
  }
`;

export const FooterNoteContain = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid RGB(188 188 188);
  display: flex;
  justify-content: space-between;
  padding: 5px 35px 20px;
  @media ${devices.maxmd} {
    display: block;
    text-align: center;
  }
  h3 {
    color: #252525;
    font-weight: 400;
  }
  div {
    display: flex;
    @media ${devices.maxmd} {
      justify-content: center;
      margin-top: 5px;
    }
    span {
      padding: 5px;
      color: white;
      border-radius: 50%;
      background-color: RGB(65 178 148);
      font-size: 10px;
      margin: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s linear;
      &:hover {
        transition: all 0.3s linear;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }
    }
  }
`;
