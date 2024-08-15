import React from 'react';
import { useMediaQuery } from '@mui/material';
import { DATAINFORM } from './TotalData';
import AppBar from '../../components/AppBar';
import ButtonScroll from '../../components/ButtonScrollBottom';
import FooterPage from '../../components/FooterPage';
import {
  InformationContain,
  SliderAboutContain,
  SliderAboutContent,
  SliderVlearningContain,
  SliderVlearningContent,
  SliderImageContent,
} from './styles';

const Information = () => {
  const matches = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <AppBar />
      <ButtonScroll />
      <InformationContain>
        <SliderAboutContain>
          <SliderAboutContent>
            <h3>V learning học là vui</h3>
            <h6>Cùng nhau khám phá những điều mới mẻ</h6>
            <p>Học đi đôi với hành</p>
          </SliderAboutContent>
        </SliderAboutContain>
        {matches ? (
          <>
            {DATAINFORM.map((item) => {
              return (
                <SliderVlearningContain key={item.id}>
                  <SliderVlearningContent>
                    <h3>{item.topic}</h3>
                    <h6>{item.title}</h6>
                    <p>{item.content}</p>
                  </SliderVlearningContent>
                  <SliderImageContent
                    style={{
                      backgroundImage: `${item.backImage}`,
                    }}
                  >
                    <img src={item.image} alt="image_inform" />
                  </SliderImageContent>
                </SliderVlearningContain>
              );
            })}
          </>
        ) : (
          <>
            {DATAINFORM.map((item) => {
              return (
                <SliderVlearningContain key={item.id}>
                  {item.id % 2 !== 0 ? (
                    <>
                      <SliderVlearningContent>
                        <h3>{item.topic}</h3>
                        <h6>{item.title}</h6>
                        <p>{item.content}</p>
                      </SliderVlearningContent>
                      <SliderImageContent
                        style={{
                          backgroundImage: `${item.backImage}`,
                        }}
                      >
                        <img src={item.image} alt="image_inform" />
                      </SliderImageContent>
                    </>
                  ) : (
                    <>
                      <SliderImageContent
                        style={{
                          backgroundImage: `${item.backImage}`,
                        }}
                      >
                        <img src={item.image} alt="image_inform" />
                      </SliderImageContent>
                      <SliderVlearningContent>
                        <h3>{item.topic}</h3>
                        <h6>{item.title}</h6>
                        <p>{item.content}</p>
                      </SliderVlearningContent>
                    </>
                  )}
                </SliderVlearningContain>
              );
            })}
          </>
        )}
        <FooterPage />
      </InformationContain>
    </>
  );
};

export default Information;
