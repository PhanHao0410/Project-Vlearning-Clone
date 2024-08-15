import React from 'react';

import Typography from '@mui/material/Typography';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SortIcon from '@mui/icons-material/Sort';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Button } from '@mui/material';

import history from '../../utils/history';
import {
  CardCourseContainer,
  CardCourseContent,
  CardCourseActions,
  IconStar,
  CardMediaContainer,
  CardMediaContent,
  CardMediaActions,
  CardSubContain,
  CardContain,
  CardSubUser,
  CardSubContent,
  ButtonSubCard,
} from './styles';

export const CardCourse = ({ dataCourse }) => {
  const handleClickCardCourse = (data) => {
    if (data) {
      history.replace(`/chitiet/${data}`);
    } else {
      history.push('/chitiet/');
    }
  };
  return (
    <CardCourseContainer
      onClick={() => handleClickCardCourse(dataCourse.maKhoaHoc)}
    >
      <img
        src={dataCourse.hinhAnh}
        alt="image_card"
        className="image-type-language"
      />
      <span className="type-language">{dataCourse.tenKhoaHoc}</span>
      <CardCourseContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="title-course"
        >
          Lập trình viên hiện đang là xu hướng trên toàn thế giới...
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="inform-user"
        >
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png"
            alt="image_avatar"
          />
          <h5>Elon Musk</h5>
        </Typography>
      </CardCourseContent>
      <CardCourseActions>
        <h5>
          <p className="error-money">
            {Number(800000).toLocaleString('de-DE', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
          <p>
            {Number(400000).toLocaleString('de-DE', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
        </h5>
        <div>
          <IconStar />
          <h3>4.9</h3>
          <p>{`(7890)`}</p>
        </div>
      </CardCourseActions>
    </CardCourseContainer>
  );
};

export const CardMediaCourse = ({ dataCourse }) => {
  const handleClickCardMediaCourse = (data) => {
    if (data) {
      history.replace(`/chitiet/${data}`);
    } else {
      history.push('/chitiet/');
    }
  };
  return (
    <CardContain>
      <div className="test">
        <CardMediaContainer
          onClick={() => handleClickCardMediaCourse(dataCourse.maKhoaHoc)}
        >
          <img
            src={dataCourse.hinhAnh}
            alt="image_card"
            className="image-type-language"
          />
          <span style={{ textAlign: 'left' }} className="type-language">
            {dataCourse.tenKhoaHoc}
          </span>
          <CardMediaContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title-course"
            >
              Lập trình viên hiện đang là xu hướng trên toàn thế giới...
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="inform-history"
            >
              <div>
                <WatchLaterIcon
                  style={{ width: '20px', height: '20px', color: '#f5c002' }}
                />
                <span>8 giờ</span>
              </div>
              <div>
                <CalendarMonthIcon
                  style={{ width: '20px', height: '20px', color: '#f06f68' }}
                />
                <span>8 tuần</span>
              </div>
              <div>
                <SortIcon
                  style={{
                    rotate: '-90deg',
                    width: '20px',
                    height: '20px',
                    color: '#65c9ff',
                  }}
                />
                <span>Tất cả</span>
              </div>
            </Typography>
          </CardMediaContent>
          <CardMediaActions>
            <Typography
              variant="body2"
              color="text.secondary"
              className="inform-user"
            >
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png"
                alt="image_avatar"
              />
              <h5>Elon Musk</h5>
            </Typography>
            <h5>
              <p className="error-money">
                {Number(800000).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </p>
              <p style={{ display: 'flex', alignItems: 'center' }}>
                {Number(400000).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'VND',
                })}
                <LocalOfferIcon style={{ fontSize: '18px', color: 'red' }} />
              </p>
            </h5>
          </CardMediaActions>
        </CardMediaContainer>
        <CardSubContain className="sub-card">
          <CardSubUser>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/emoji.6d1b7051.png"
              alt="image_avatar"
            />
            <p>Elun Musk Ricard</p>
          </CardSubUser>
          <CardSubContent>
            <h5>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h5>
            <p>
              Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
              trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học
              100% thực hành cường độ cao theo dự án thực tế và kết nối doanh
              nghiệp hỗ trợ tìm việc ngay sau khi học...
            </p>
            <div className="inform-history">
              <div>
                <WatchLaterIcon
                  style={{ width: '20px', height: '20px', color: '#f5c002' }}
                />
                <span>8 giờ</span>
              </div>
              <div>
                <CalendarMonthIcon
                  style={{ width: '20px', height: '20px', color: '#f06f68' }}
                />
                <span>8 tuần</span>
              </div>
              <div>
                <SortIcon
                  style={{
                    rotate: '-90deg',
                    width: '20px',
                    height: '20px',
                    color: '#65c9ff',
                  }}
                />
                <span>Tất cả</span>
              </div>
            </div>
          </CardSubContent>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonSubCard>Xem chi tiết</ButtonSubCard>
          </div>
        </CardSubContain>
      </div>
    </CardContain>
  );
};
