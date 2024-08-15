import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import {
  Certification,
  CourseData,
  CourseRoute,
  LearningSystem,
  Teachers,
} from './DataTotal';
import {
  SliderHomeContain,
  SliderContain,
  SliderTextContain,
  SliderImageContain,
  SloganContain,
  ContentTableContain,
} from './styles';

const SliderHome = () => {
  const matches = useMediaQuery('(min-width: 960px)');
  return (
    <SliderHomeContain>
      <SliderContain>
        {matches ? (
          <>
            <SliderTextContain>
              <div className="triangleTopRight" />
              <div className="smallBox smallboxLeftTop" />
              <div className="smallBox smallboxRightTop" />
              <div className="smallBox smallboxRightBottom" />
              <SloganContain>
                <img
                  src="https://demo2.cybersoft.edu.vn/static/media/paper_plane.93dfdbf5.png"
                  alt="image_slogan"
                  className="image-slogan"
                />
                <h2 className="title-first">Chào mừng</h2>
                <h2>đến với môi trường</h2>
                <h1>
                  V<span>learning</span>
                </h1>
                <div>Bắt đầu nào</div>
              </SloganContain>
            </SliderTextContain>
            <SliderImageContain>
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/slider2.f170197b.png"
                alt="image_background"
                className="image_background"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/code_slider.8c12bbb4.png"
                alt="image_code"
                className="slider-sub-image slider-code-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/message_slider.6835c478.png"
                alt="image_code"
                className="slider-sub-image slider-mess-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
                alt="image_code"
                className="slider-sub-image slider-cloud-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
                alt="image_code"
                className="slider-sub-image slider-cloud2-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
                alt="image_code"
                className="slider-sub-image slider-cloud3-image"
              />
            </SliderImageContain>
          </>
        ) : (
          <>
            <SliderImageContain>
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/slider2.f170197b.png"
                alt="image_background"
                className="image_background"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/code_slider.8c12bbb4.png"
                alt="image_code"
                className="slider-sub-image slider-code-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/message_slider.6835c478.png"
                alt="image_code"
                className="slider-sub-image slider-mess-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
                alt="image_code"
                className="slider-sub-image slider-cloud-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
                alt="image_code"
                className="slider-sub-image slider-cloud2-image"
              />
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
                alt="image_code"
                className="slider-sub-image slider-cloud3-image"
              />
            </SliderImageContain>
            <SliderTextContain>
              <div className="triangleTopRight" />
              <div className="smallBox smallboxLeftTop" />
              <div className="smallBox smallboxRightTop" />
              <div className="smallBox smallboxRightBottom" />
              <SloganContain>
                <img
                  src="https://demo2.cybersoft.edu.vn/static/media/paper_plane.93dfdbf5.png"
                  alt="image_slogan"
                  className="image-slogan"
                />
                <h2 className="title-first">Chào mừng</h2>
                <h2>đến với môi trường</h2>
                <h1>
                  V<span>learning</span>
                </h1>
                <div>Bắt đầu nào</div>
              </SloganContain>
            </SliderTextContain>
          </>
        )}
      </SliderContain>
      <ContentTableContain>
        <div className="row-second-table row-once-table ">
          <h3>{CourseData.topic}</h3>
          <p>{CourseData.content}</p>
          {CourseData.titles.map((item, ind) => {
            return (
              <div key={`${item}${ind}`}>
                <CheckIcon
                  style={{
                    transform: 'scale(1.1)',
                    fontWeight: '600',
                    marginTop: '3px',
                    marginRight: '7px',
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>
        <div className="row-once-table background-yellow">
          <h3>{CourseRoute.topic}</h3>
          {CourseRoute.titles.map((item, ind) => {
            return (
              <div key={`${item}${ind}`}>
                <CheckIcon
                  style={{
                    transform: 'scale(1.1)',
                    fontWeight: '600',
                    marginTop: '3px',
                    marginRight: '7px',
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>
        <div className="row-once-table background-blue">
          <h3>{LearningSystem.topic}</h3>
          {LearningSystem.titles.map((item, ind) => {
            return (
              <div key={`${item}${ind}`}>
                <CheckIcon
                  style={{
                    transform: 'scale(1.1)',
                    fontWeight: '600',
                    marginTop: '3px',
                    marginRight: '7px',
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>
        <div className="row-once-table background-yellow">
          <h3>{Teachers.topic}</h3>
          {Teachers.titles.map((item, ind) => {
            return (
              <div key={`${item}${ind}`}>
                <CheckIcon
                  style={{
                    transform: 'scale(1.1)',
                    fontWeight: '600',
                    marginTop: '3px',
                    marginRight: '7px',
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>
        <div className="row-once-table background-green">
          <h3>{Certification.topic}</h3>
          {Certification.titles.map((item, ind) => {
            return (
              <div key={`${item}${ind}`}>
                <CheckIcon
                  style={{
                    transform: 'scale(1.1)',
                    fontWeight: '600',
                    marginTop: '3px',
                    marginRight: '7px',
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>
      </ContentTableContain>
    </SliderHomeContain>
  );
};

export default SliderHome;
