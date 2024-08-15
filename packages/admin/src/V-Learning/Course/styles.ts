import styled from 'styled-components';

import { devices } from '../DeviceScreen';

export const CourseContain = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  padding-top: 90px;
`;

export const TitleCourseContain = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(255, 214, 10);
  padding: 50px;
  h1 {
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-size: 13px;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const TopicCourseContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media ${devices.maxmd} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.maxpn} {
    grid-template-columns: repeat(1, 1fr);
  }
  div {
    text-align: center;
    padding: 30px 20px;
    color: white;
    h3 {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.2;
      text-transform: uppercase;
      padding-bottom: 5px;
    }
    .topic-icon {
      font-size: 40px;
    }
    p {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
`;

export const ListCouseContain = styled.div`
  width: 100%;
  padding: 35px 50px;
  .title-list-course {
    display: flex;
    align-items: center;
    .icon-title-course {
      color: rgb(237, 133, 171);
      font-size: 30px;
    }
    span {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
      color: #252525;
    }
  }
`;

export const ListCourse = styled.div`
  padding: 20px 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 50px;
  .card-item {
    display: flex;
    justify-content: center;
  }
  @media ${devices.maxXl} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.maxlg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.maxmd} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PaginationContain = styled.div`
  padding: 10px 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${devices.maxpn} {
    padding: 10px;
  }
  button {
    width: 35px !important;
    height: 40px !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    border: 2px solid RGB(65 178 148) !important;
    transition: all 0.3s;
    &:hover {
      background-color: RGB(65 178 148) !important;
      color: white !important;
      border: 2px solid RGB(230 230 230) !important;
      width: 35px !important;
      height: 39.5px !important;
      transition: all 0.3s;
    }
    @media ${devices.maxpn} {
      width: 20px !important;
      height: 25px !important;
      font-size: 14px !important;
      &:hover {
        width: 20px !important;
        height: 24.5px !important;
      }
    }
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: RGB(65 178 148) !important;
    border: 2px solid RGB(31 131 119) !important;
    color: white !important;
  }
`;
