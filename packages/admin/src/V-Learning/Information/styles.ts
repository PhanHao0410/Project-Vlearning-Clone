import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const InformationContain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;

export const SliderAboutContain = styled.div`
  padding: 150px 0;
  background-position: 50%;
  background-image: url('https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const SliderAboutContent = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
  h3 {
    color: #41b294;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    text-transform: uppercase;
  }
  h6 {
    color: #f6ba35;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2;
    padding: 10px 0;
  }
  p {
    font-size: 18px;
    color: #fff;
  }
`;

export const SliderVlearningContain = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  @media ${devices.maxmd} {
    display: block;
    padding-bottom: 0px;
  }
`;
export const SliderVlearningContent = styled.div`
  width: 50%;
  @media ${devices.maxmd} {
    width: 100%;
  }
  h3 {
    text-transform: uppercase;
    color: #41b294;
    font-size: 20px;
    font-weight: 600;
  }
  h6 {
    font-size: 40px;
    color: #012025;
    padding: 10px 0;
    font-weight: 500;
  }
  p {
    color: #8c8c8c;
    line-height: 2.2;
    color: #8c8c8c;
    ::first-letter {
      font-size: calc(60px + 0.75vw);
      line-height: 40px;
      color: #cd5c5c;
      float: left;
      padding-top: 10px;
      padding-right: 5px;
      font-family: Sansita One;
    }
  }
`;

export const SliderImageContent = styled.div`
  width: 50%;
  padding: 0 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  @media ${devices.maxmd} {
    width: 100%;
  }
  img {
    width: 100%;
    height: 382px;
    object-fit: contain;
    border-radius: 30%;
  }
`;
