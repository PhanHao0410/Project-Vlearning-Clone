import React, { useEffect } from 'react';
import AppBar from '../../components/AppBar';
import SliderHome from '../slider-home';
import SliderCard from '../SliderCard';
import FooterPage from '../../components/FooterPage';
import ButtonScroll from '../../components/ButtonScrollBottom';

import { HomeContain } from './styles';

const HomeUI = () => {
  return (
    <HomeContain>
      <AppBar />
      <ButtonScroll />
      <SliderHome />
      <SliderCard />
      <FooterPage />
    </HomeContain>
  );
};

export default HomeUI;
