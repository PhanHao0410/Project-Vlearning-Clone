import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const DetailCourseContain = styled.h1`
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  padding-top: 90px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const TopicDetailContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: rgb(255, 214, 10);
  h3 {
    color: white;
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    @media ${devices.maxmd} {
      font-size: 20px;
    }
  }
  p {
    font-size: 13px;
    color: white;
    text-transform: uppercase;
    font-weight: 400;
    @media ${devices.maxmd} {
      font-size: 13px;
    }
  }
`;

export const DetailCourseContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  @media ${devices.maxmd} {
    display: block;
  }
  @media ${devices.maxpn} {
    padding: 50px 20px;
  }
`;

export const ListDetailCourse = styled.div`
  width: 65%;
  height: 100%;
  padding: 0 15px;
  @media ${devices.maxmd} {
    width: 100%;
  }
  .title-detail-course {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    @media ${devices.maxmd} {
      font-size: 24px;
    }
  }
  .head-detail-course {
    display: flex;
    padding: 30px 0;
    @media ${'(max-width: 1200px)'} {
      display: block;
    }
  }
  .detail-course-intro {
    display: flex;
    align-items: center;
    width: 33%;
    @media ${'(max-width: 1200px)'} {
      width: 100%;
      padding: 10px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 5px;
    }
    h6 {
      color: #8c8c8c;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 400;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      @media ${devices.maxmd} {
        font-size: 12px;
      }
    }
    .icon-school {
      transform: scale(2);
      margin-right: 15px;
      color: rgb(65, 178, 148);
    }
  }
  .detail-course-rate {
    @media ${'(max-width: 1200px)'} {
      padding: 10px;
      width: 100%;
    }
    .point-rate {
      font-weight: 600;
      font-size: 17px;
      padding-left: 3px;
    }
    p {
      color: #8c8c8c;
      font-size: 14px;
      margin-left: 70px;
      font-weight: 400;
    }
  }
  .text-discript {
    color: #8c8c8c;
    padding-bottom: 20px;
    border-bottom: 1px solid #d0d0d0;
    text-align: justify;
    line-height: 1.5;
    font-weight: 400;
    font-size: 16px;
    @media ${devices.maxmd} {
      font-size: 12px;
    }
  }
`;

export const CourseLearnContain = styled.div`
  padding: 20px 0;
  h6 {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
  }
  .course-learn-content {
    display: flex;
    ul {
      max-width: 50%;
      padding: 0 15px;
      li {
        .icon {
          transform: scale(1.2);
          transform: translateY(6px);
          padding-right: 3px;
          stroke-width: 2.5;
          stroke: rgb(246, 186, 53);
        }
        padding: 2px 0;
        list-style-type: none;
        color: #000;
        text-align: justify;
        font-weight: 400;
        line-height: 1.5;
        font-size: 1rem;
        @media ${devices.maxmd} {
          font-size: 12px;
        }
      }
    }
  }
`;

export const CourseContentContain = styled.div`
  h6 {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
  }
`;

export const CourseContentItem = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 40px;
  .title-item {
    background-color: rgb(250, 250, 250);
    padding: 10px;
    margin-bottom: 20px;
    span {
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 400;
      margin-right: 20px;
    }
    .btn {
      border: 1px solid rgb(69, 180, 153);
      padding: 6px 12px;
      color: rgb(69, 180, 153);
      border-radius: 0px;
      transition: 0.5s linear;
      &:hover {
        background-color: rgb(69, 180, 153);
        color: white;
        border: none;
        transition: 0.5s linear;
      }
    }
  }
  p {
    padding: 0 10px;
  }
  .lesson-contain {
    width: 100%;
    height: 100%;
    .lesson-content {
      display: flex;
      align-items: center;
      padding: 10px 10px;
      justify-content: space-between;
      border-bottom: 2px solid RGB(248 251 218);
      border-right: 2px solid RGB(248 251 218);
      .lesson-item {
        display: flex;
        align-items: center;
        padding-right: 10px;
        .icon {
          transform: scale(0.7);
          margin-right: 4px;
          color: rgb(65, 178, 148);
        }
        span {
          color: #8c8c8c;
          @media ${devices.maxmd} {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const SideBarCourseContain = styled.div`
  width: 35%;
  height: 100%;
  padding: 10px 30px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 10px 4px #dadada;
  @media ${devices.maxmd} {
    width: calc(100% - 30px);
    margin-left: 0;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    aspect-ratio: 1/0.6;
  }
  .course-price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 0;
    .icon {
      stroke-width: 2;
      color: rgb(246, 186, 53);
      transform: scale(1.7);
    }
    span {
      font-weight: 500;
      font-size: 25px;
    }
  }
  .btn-signup {
    width: 100%;
    border: 1px solid RGB(65 178 148);
    color: RGB(65 178 148);
    background-color: white;
    font-size: 16px;
    padding: 7px 0;
    transition: 0.5s linear;
    &:hover {
      color: white;
      background-color: RGB(65 178 148);
      border: none;
      width: 99%;
      transition: 0.5s linear;
    }
  }
`;

export const SideBarCourseContent = styled.div`
  width: 100%;
  height: 100%;
  ul {
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      padding: 20px 0;
      justify-content: space-between;
      border-bottom: 1px solid #f2f1f1;
      @media ${devices.maxmd} {
        font-size: 12px;
      }
      p {
        color: #8c8c8c;
      }
      span {
        font-weight: 500;
        color: #252525;
        padding-left: 5px;
      }
      .icon {
        color: rgb(246, 186, 53);
      }
    }
  }
  input {
    width: 100%;
    margin: 20px 0;
    border: 1px solid #d0d0d0;
    padding: 3px 10px;
    height: 40px;
    outline: none;
    /* color: #d0d0d0; */
    font-weight: 500;
    font-size: 18px;
    @media ${devices.maxmd} {
      font-size: 12px;
    }
    :focus {
      border-radius: 6px;
    }
  }
`;

export const ListCourseRelatedContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  h3 {
    font-weight: 500;
    line-height: 1.2;
    font-size: 1rem;
  }
`;

export const CourseRelatedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 20px 10px;
  @media ${'(max-width: 1200px)'} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.maxmd} {
    grid-template-columns: repeat(1, 1fr);
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
