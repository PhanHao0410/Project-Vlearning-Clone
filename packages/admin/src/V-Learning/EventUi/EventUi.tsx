import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import AppBar from '../../components/AppBar';
import ButtonScroll from '../../components/ButtonScrollBottom';
import FooterPage from '../../components/FooterPage';
import { SPEECHERS } from './DataTotal';

import {
  EventUiContain,
  SliderEventContain,
  TimeEventContain,
  DetailEventContain,
  DetailEventContent,
  SpeecherContain,
  SpeecherContent,
  DonorsEventContain,
  DonorsContent,
} from './styles';

const calculateTimeLeft = () => {
  const difference = +new Date(`2024-12-20`) - +new Date();
  let timeLeft: any = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const EventUi = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [calculateTimeLeft()]);
  return (
    <>
      <AppBar />
      <ButtonScroll />
      <EventUiContain>
        <SliderEventContain>
          <TimeEventContain>
            <div className="count-down-event">
              <section>
                <h3 style={{ color: '#ffbe0b' }}>{timeLeft.days}</h3>
                <p>Ngày</p>
              </section>
              <section>
                <h3 style={{ color: '#fb5607' }}>{timeLeft.hour}</h3>
                <p>Giờ</p>
              </section>
              <section>
                <h3 style={{ color: '#ff006e' }}>{timeLeft.minutes}</h3>
                <p>Phút</p>
              </section>
              <section>
                <h3 style={{ color: '#8338ec' }}>{timeLeft.seconds}</h3>
                <p>Giây</p>
              </section>
            </div>
            <h4>Sự kiện công nghệ lớn nhất 2024</h4>
            <h6>20 - 25 tháng 12, 2024, Việt Nam</h6>
          </TimeEventContain>
          <div className="image-ai" />
        </SliderEventContain>
        <DetailEventContain>
          <div className="image-detail-contain">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/it.ef68b551.png"
              alt="image_event_detail"
            />
          </div>
          <DetailEventContent>
            <h3>Sự kiện công nghệ dành cho startup</h3>
            <h5>Nơi gặp gỡ của những tư tưởng lớn</h5>
            <p>
              {`Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam
            tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao
            gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things
            (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented
            reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)`}
            </p>
            <div className="event-detail-action">
              <Button
                className="btn"
                style={{ backgroundColor: 'rgb(65,178,148)' }}
              >
                Tham gia
              </Button>
              <Button
                className="btn"
                style={{ backgroundColor: 'rgb(246,186,53)' }}
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </DetailEventContent>
        </DetailEventContain>
        <SpeecherContain>
          <h3 className="title-speecher">Các nhà đồng sáng tạo</h3>
          <SpeecherContent>
            {SPEECHERS.map((item, ind) => {
              return (
                <div className="inform-speecher" key={`${item.image}${ind}`}>
                  <img src={item.image} alt="image_speecher" />
                  <h6>{item.name}</h6>
                  <p>Ceo techviet production</p>
                </div>
              );
            })}
          </SpeecherContent>
        </SpeecherContain>
        <DonorsEventContain>
          <h3>Nhà tài trợ chương trình</h3>
          <DonorsContent>
            <div className="list-donor">
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/meta.10fa2fa1.jpg"
                alt="image_donor"
              />
              <h6>Facebook</h6>
            </div>
            <div className="list-donor">
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/microsoft.318b3280.jpg"
                alt="image_donor"
              />
              <h6>Microsoft</h6>
            </div>
            <div className="list-donor">
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/Google-logo.f11902b5.jpg"
                alt="image_donor"
              />
              <h6>Google</h6>
            </div>
            <div className="list-donor">
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/amazon.996890c4.jpg"
                alt="image_donor"
              />
              <h6>Amazon</h6>
            </div>
          </DonorsContent>
        </DonorsEventContain>
        <FooterPage />
      </EventUiContain>
    </>
  );
};

export default EventUi;
