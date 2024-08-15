import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const SliderCardContain = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  margin-bottom: 30px;
  position: relative;
`;

export const CardCourseContain = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
  padding: 0 50px;
  position: relative;
  h3 {
    color: #f6ba35;
  }
  .card-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 40px 30px;
    transition: all 0.5s;
    .card-item {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    @media ${devices.maxXl} {
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
      transition: all 0.5s;
    }
    @media ${devices.maxmd} {
      grid-template-columns: repeat(1, 1fr);
      gap: 50px;
      transition: all 0.5s;
      .card-item {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const BoxNumberContain = styled.div`
  width: 100%;
  background-color: rgb(240, 248, 255);
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media ${devices.maxal} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media ${devices.maxmd} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const BoxNumberItem = styled.div`
  display: flex;
  justify-content: center;
  div {
    padding: 20px 0;
    text-align: center;
    img {
      width: 80px;
      height: 80px;
    }
    h1 {
      font-size: 50px;
      color: #41b294;
      padding: 5px 0;
      font-size: 600;
    }
    h5 {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const InstructorContain = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  background-color: white;
  padding: 50px;
`;

export const InstructorItemContain = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  @media ${'(max-width: 1080px)'} {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media ${devices.maxmd} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
export const InstructorItem = styled.div`
  padding: 10px 20px;
  text-align: center;
  transition: all 0.5s;
  min-width: 100px;
  width: 100%;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    transition: all 0.5s;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    margin-top: 10px;
    color: #252525;
  }
  .evaluate {
    font-size: 13px;
    color: #8c8c8c;
  }
`;

export const ReviewContain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 35px;
  display: flex;
  @media ${devices.maxmd} {
    display: block;
  }
  .smallBox {
    position: absolute;
    z-index: 1;
    background-image: radial-gradient(#41b294 10%, transparent 11%),
      radial-gradient(#41b294 10%, transparent 11%);
    background-size: 10px 10px;
  }
`;

export const ReviewUi = styled.div`
  width: 45%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${devices.maxmd} {
    width: 100%;
  }
  .triangle {
    top: 0;
    left: 0;
    transform: rotate(-45deg);
    position: absolute;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 50px solid #f6ba35;
  }
  .smallBoxLeftTop {
    top: 0;
    left: 0;
    height: 70px;
    width: 20%;
  }
  .smallBoxLeftBottom {
    bottom: 0;
    right: 10%;
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  .student-ui {
    height: 220px;
    width: 230px;
    background-color: #ed85ab;
    border-radius: 10px 100px 110px;
    text-align: center;
    margin: 50px 0;
    img {
      width: 90%;
      height: 90%;
      margin-top: 10%;
    }
  }
`;

export const ReviewContent = styled.div`
  width: 55%;
  position: relative;
  display: flex;
  align-items: center;
  @media ${devices.maxmd} {
    width: 100%;
    margin-top: 20px;
  }
  .smallBoxRightTop {
    top: 5%;
    left: 10%;
    width: 10%;
    height: 50px;
  }
  .smallBoxRightBottom {
    bottom: 0;
    right: 20%;
    height: 50px;
    width: 20%;
    background-image: radial-gradient(#f6ba35 10%, transparent 11%),
      radial-gradient(#f6ba35 10%, transparent 11%);
  }
  .student-contain {
    position: relative;
    padding: 0 20px;
    .open-quote-first {
      position: absolute;
      top: -10px;
      left: -5px;
      font-size: 50px;
      font-family: fantasy;
      color: #ed85ab;
    }

    p {
      font-size: 17px;
      color: #252525;
      line-height: 30px;
      margin-bottom: 25px;
    }
    h5 {
      color: #ed85ab;
      font-size: 18px;
      font-weight: 400;
    }
    span {
      font-size: 1rem;
      color: #8c8c8c;
      line-height: 1.5;
    }
  }
`;
