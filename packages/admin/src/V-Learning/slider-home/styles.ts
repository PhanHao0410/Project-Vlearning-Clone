import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const SliderHomeContain = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 90px;
  padding: 35px;
  height: 100%;

  position: relative;
  width: 100%;
  max-width: 100vw;
`;
export const SliderContain = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  max-width: 100vw;
  display: flex;
  @media ${devices.maxlg} {
    display: block;
  } ;
`;

export const SliderTextContain = styled.div`
  height: 650px;
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .triangleTopRight {
    position: absolute;
    top: 5%;
    left: 7%;
    transform: rotate(-45deg);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 50px solid #f6ba35;
  }
  .smallBox {
    position: absolute;
    z-index: 1;
    background-image: radial-gradient(#41b294 10%, transparent 11%),
      radial-gradient(#41b294 10%, transparent 11%);
    background-size: 10px 10px;
  }
  .smallboxLeftTop {
    top: 11%;
    left: 7%;
    height: 70px;
    width: 20%;
  }
  .smallboxRightTop {
    top: 0;
    right: 0;
    height: 10%;
    width: 10%;
    transform: rotate(45deg);
    background-image: radial-gradient(#f6ba35 10%, transparent 11%);
  }
  .smallboxRightBottom {
    bottom: 8%;
    right: 15%;
    height: 15%;
    width: 20%;
    background-image: radial-gradient(#ed85ab 10%, transparent 11%);
  }
  @media ${devices.maxlg} {
    width: 100%;
    height: 300px;
  }
  @media ${devices.maxpn} {
    .smallboxLeftTop {
      height: 50px;
      width: 20%;
    }
    .smallboxRightBottom {
      bottom: 10%;
      right: 8%;
    }
  }
`;

export const SloganContain = styled.div`
  width: 70%;
  position: relative;
  .image-slogan {
    position: absolute;
    width: 30%;
    height: 80%;
    top: -45%;
    right: 15%;
  }
  h2 {
    width: 100%;
    position: relative;
    font-weight: 600;
    font-size: 45px;
  }
  h1 {
    margin-top: 8px;
    font-size: 65px;
    color: #41b294;
    overflow: hidden;
    animation: aniText 5s steps(10) infinite;
    span {
      margin-left: 5px;
      font-size: 50px;
    }
  }
  div {
    background-color: RGB(246 186 53);
    display: inline-block;
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    padding: 8px 10px;
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      padding: 7px 9px;
    }
  }
  @media ${devices.maxlg} {
    margin-left: 30%;
    margin-top: -5%;
    width: 100%;
    .image-slogan {
      width: 15%;
      height: 40%;
      top: -20%;
      right: 40%;
    }
    h2 {
      font-size: 30px;
    }
    h1 {
      font-size: 45px;
      span {
        font-size: 35px;
      }
    }
  }
  @media ${devices.maxpn} {
    .image-slogan {
      width: 15%;
      height: 40%;
      top: 0%;
      right: 15%;
    }
  }
  @keyframes aniText {
    0% {
      width: 0;
    }
    50% {
      width: 230px;
    }
  }
`;

export const SliderImageContain = styled.div`
  width: 50%;
  height: 650px;
  .image_background {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .slider-sub-image {
    position: absolute;
    height: 15%;
    width: 7%;
  }
  .slider-code-image {
    left: 60%;
    top: 50%;
    animation: aniSlider 4s infinite;
  }
  .slider-mess-image {
    right: 23%;
    top: 42%;
    transform-origin: bottom;
    animation: aniMessage 4s linear 3s infinite;
  }
  .slider-cloud-image {
    top: 3%;
    right: 43%;
    animation: aniCloud 5s linear infinite;
  }
  .slider-cloud2-image {
    top: 32%;
    right: 34%;
    animation: aniCloud 6s linear infinite;
  }
  .slider-cloud3-image {
    top: 16%;
    right: 32%;
    animation: aniCloud 7s linear infinite;
  }
  @media ${devices.maxlg} {
    width: 100%;
    height: 500px;
    .slider-code-image {
      top: 31%;
      left: 21%;
      width: 14%;
      height: 10%;
    }
    .slider-mess-image {
      top: 28%;
      left: 41%;
      width: 13%;
      height: 7%;
    }
    .slider-cloud-image {
      width: 15%;
      height: 8%;
      top: 4%;
      left: 6%;
    }
    .slider-cloud2-image {
      width: 15%;
      height: 8%;
      top: 21%;
      left: 23%;
    }
    .slider-cloud3-image {
      width: 15%;
      height: 8%;
      top: 13%;
      left: 29%;
    }
  }
  @media ${devices.maxpn} {
    width: 100%;
    height: 400px;
    .slider-sub-image {
      height: 5%;
      width: 13%;
    }
    .slider-code-image {
      left: 21%;
      top: 31%;
    }
    .slider-mess-image {
      right: 20%;
      top: 27%;
    }
    .slider-cloud-image {
      top: 3%;
      left: 3%;
    }
    .slider-cloud2-image {
      top: 18%;
      left: 22%;
    }
    .slider-cloud3-image {
      top: 11%;
      left: 20%;
    }
  }

  @keyframes aniSlider {
    0% {
      opacity: 0;
      transform: translateY(-5%);
    }
    50% {
      opacity: 1;
      transform: translateY(-10%);
    }
    100% {
      opacity: 0;
      transform: translateY(-15%);
    }
  }
  @keyframes aniMessage {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes aniCloud {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;

export const ContentTableContain = styled.div`
  width: 100%;
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: white;
  gap: 20px;
  .background-yellow {
    background-color: #f6ba35;
  }
  .background-blue {
    background-color: #5c8295;
  }
  .background-green {
    background-color: #63c0a8;
  }
  .row-second-table {
    padding: 20px;
    grid-row: 1 / span 2;
    background-color: #41b294;
    background-image: url('https://demo2.cybersoft.edu.vn/static/media/astronaut.3c90d598.png');
    background-position: 100% 100%;
    background-size: 50%;
    background-repeat: no-repeat;
  }
  .row-once-table {
    padding: 20px;
    max-width: 500px;
    position: relative;

    h3 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.75rem;
      word-wrap: break-word;
    }
    p {
      line-height: 1.5rem;
      word-wrap: break-word;
      font-weight: 300;
      font-size: 15px;
    }
    div {
      font-size: 1rem;
      line-height: 2rem;
      display: flex;
      word-wrap: break-word;
    }
  }
  @media ${devices.maxal} {
    grid-template-columns: repeat(1, 1fr);
    .row-once-table {
      max-width: 100%;
      width: 100%;
      min-width: 200px;
    }
    .row-second-table {
      grid-row: 1 / span 1;
    }
  }
`;
