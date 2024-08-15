import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const EventUiContain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;

export const SliderEventContain = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://demo2.cybersoft.edu.vn/static/media/backroundTech.a989a5f8.jpg');
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  filter: grayscale(50%);
  .image-ai {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    width: 100%;
    background-image: url('https://demo2.cybersoft.edu.vn/static/media/high-techbrain.2f38d2ab.png');
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: contain;
  }
`;

export const TimeEventContain = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 200px 50px;
  .count-down-event {
    display: flex;
    align-items: center;
    @media ${devices.maxsm} {
      justify-content: space-around;
    }
    section {
      padding-right: 50px;
      @media ${devices.maxsm} {
        padding-right: 0px;
      }
      h3 {
        text-align: center;
        line-height: 30px;
        font-size: 60px;
        font-weight: 600;
        padding: 10px 0;
      }
      p {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        line-height: 30px;
        color: #fff;
        text-transform: uppercase;
      }
    }
  }
  h4 {
    font-size: 40px;
    padding: 10px 0;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
  }
  h6 {
    font-size: 18px;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const DetailEventContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  @media ${devices.maxmd} {
    display: block;
  }
  .image-detail-contain {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 10px 0;
    width: 50%;
    @media ${devices.maxmd} {
      width: 100%;
    }
    img {
      width: 100%;
      height: 270px;
      object-fit: contain;
      animation: animeSlider 4s linear infinite;
    }
  }
  @keyframes animeSlider {
    0% {
      transform: translateY(-15px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;

export const DetailEventContent = styled.div`
  width: 50%;
  padding: 0 15px;
  @media ${devices.maxmd} {
    width: 100%;
    padding: 20px 0;
  }
  h3 {
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 10px;
    color: #9f1f56;
  }
  h5 {
    font-weight: 500;
    font-size: 1rem;
  }
  p {
    padding: 20px 0;
    color: #8c8c8c;
    line-height: 1.2;
  }
  .event-detail-action {
    display: flex;
    justify-content: space-between;
    width: 250px;
    .btn {
      padding: 0px 10px;
      border-radius: 0;
      color: white;
      transition: all 0.3s;
      height: 36px;
      &:hover {
        padding: 0px 9px !important;
        height: 35px;
        transition: all 0.3s;
      }
    }
  }
`;

export const SpeecherContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  border: 1px solid green;
  position: relative;
  z-index: 1;
  background-image: url('https://demo2.cybersoft.edu.vn/static/media/lightTech.32807735.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .title-speecher {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 20px;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: #f6ba35;
  }
`;

export const SpeecherContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media ${devices.maxal} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.maxmd} {
    grid-template-columns: repeat(1, 1fr);
  }
  .inform-speecher {
    color: white;
    text-transform: uppercase;
    img {
      width: 100%;
      aspect-ratio: 1 / 0.7;
      min-height: 220px;
    }
    h6 {
      padding: 5px 0;
      font-weight: 600;
      font-size: 15px;
    }
  }
`;

export const DonorsEventContain = styled.div`
  padding: 80px 50px;
  h3 {
    padding: 20px 0;
    text-align: center;
    font-size: 30px;
    color: #f6ba35;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const DonorsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  @media ${`(max-width: 1200px)`} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.maxmd} {
    grid-template-columns: repeat(1, 1fr);
  }
  .list-donor {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      min-height: 220px;
      aspect-ratio: 1/0.5;
      border-radius: 10px;
      object-fit: cover;
    }
    h6 {
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
`;
