import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const SignInSignUpContain = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  background-image: url('data:image/png;base64,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');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${devices.maxlg} {
    display: block;
  }
`;

export const SignInSignUpContent = styled.div`
  width: 80vw;
  height: 80vh;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  max-width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
  @media ${devices.maxlg} {
    height: 150vh;
  }
`;

export const SignInContain = styled.div`
  width: 50%;
  left: 0;
  position: absolute;
  z-index: 2;
  height: 100%;
  top: 0;
  @media ${devices.maxlg} {
    width: 100%;
    height: 50%;
    position: relative;
    padding: 30px 0;
  }
  .form-login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.2;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    }
    .text-error {
      font-size: 15px;
      color: rgb(240 23 23 / 84%);
      font-weight: 400;
      width: 100%;
      text-align: left;
      padding: 3px;
    }
    .account-login {
      width: 100%;
      background-color: rgb(238, 238, 238);
      height: 45px;
      font-size: 18px;
      padding: 5px 10px;
      border: none;
      margin: 5px;
      padding-right: 70px;
      &:focus {
        outline: 1px solid RGB(69 180 153);
        border-radius: 6px;
      }
    }
    h6 {
      color: #36867b;
      font-size: 14px;
      margin: 15px 0;
    }
    .btn-login {
      padding: 8px 30px;
      border-radius: 20px;
      background-color: #36867b;
      color: white;
      border: 2px solid #36867b;
      transition: 0.3s linear;
      &:hover {
        transition: 0.3s linear;
        border: none;
      }
    }
  }
  .icon-show-password {
    position: absolute;
    z-index: 1;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: RGB(122 122 122);
  }
`;

export const SignUpContain = styled.div`
  width: 50%;
  right: 0;
  position: absolute;
  z-index: 2;
  height: 100%;
  top: 0;
  @media ${devices.maxlg} {
    width: 100%;
    height: 50%;
    bottom: 0;
    left: 0;
    position: relative;
    padding: 30px 0;
  }
  .signup-contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 50px;
    text-align: center;
    width: 100%;
    height: 100%;
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
      border: none;
      height: 45px;
      border-radius: 0px;
      background-color: transparent;
      outline: none;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      display: flex;
      align-items: center;
      height: 46px;
      padding: 0;
      padding-left: 10px;
      font-size: 18px;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
      background-color: rgb(238, 238, 238);
    }
    h2 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.2;
      font-size: 2rem;
      margin-bottom: 10px;
      width: 100%;
    }
    input {
      width: 100%;
      min-width: 100%;
      background-color: rgb(238, 238, 238);
      height: 45px;
      font-size: 18px;
      padding: 5px 10px;
      border: none;
      padding-right: 50px;
      &:focus {
        outline: 1px solid RGB(69 180 153);
        border-radius: 6px;
      }
    }
    .text-error {
      font-size: 15px;
      color: rgb(240 23 23 / 84%);
      font-weight: 400;
      width: 100%;
      text-align: left;
      padding: 3px;
    }
    .btn-sign-up {
      background-color: rgb(54, 134, 123);
      color: white;
      padding: 8px 30px;
      border: 1px solid rgb(54, 134, 123);
      border-radius: 30px;
      width: 150px;
      text-align: center;
      transition: all 0.3s;
      margin-top: 20px;
      &:hover {
        border: none;
        transition: all 0.3s;
      }
    }
  }
  .icon-show-password {
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 15px;
    cursor: pointer;
    color: RGB(122 122 122);
  }
`;

export const OverlayContain = styled.div`
  height: 100%;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  position: absolute;
  top: 0;
  width: 50%;
  overflow: hidden;
  z-index: 100;
  background-color: transparent;
  left: 0%;
  @media ${devices.maxlg} {
    height: 50%;
    width: 100%;
    /* display: none; */
  }
  .overlay-content {
    width: 100%;
    height: 100%;
    background-image: url('https://demo2.cybersoft.edu.vn/static/media/bg-all.2b72c7ac.png');
    background-size: cover;
    color: #fff;
    position: relative;
    left: 0%;
    width: 200%;
    .overlay-right {
      width: 50%;
      height: 100%;
      transform: translateX(0);
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 50px;
      @media ${devices.maxlg} {
        bottom: 0;
      }

      h1 {
        font-weight: 700;
        font-size: 2.5rem;
      }
      p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        padding: 20px 0 30px;
      }
      .btn-load-signup {
        background-color: rgb(54, 134, 123);
        padding: 8px 30px;
        border-radius: 30px;
        border: 1px solid white;
        color: white;
      }
    }
  }
`;
export const ToastContentContain = styled.div`
  padding: 10px 0;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  .icon-toastify {
    transform: scale(3) !important;
    color: RGB(66 215 66);
    margin-bottom: 40px;
  }
  h3 {
    color: black;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .btn-close-toast {
    background-color: RGB(39 120 196) !important;
    color: white !important;
    padding: 8px 30px !important;
    font-size: 18px;
  }
`;
