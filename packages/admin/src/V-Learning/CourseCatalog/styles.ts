import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const CourseCatalogContain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
`;

export const TitleContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: rgb(255, 214, 10);
  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
  }
  p {
    font-size: 13px;
    text-transform: uppercase;
    color: #fff;
  }
`;

export const ListCourseContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  .title-course-contain {
    border: 2px solid rgb(228, 228, 228);
    border-radius: 30px;
    padding: 15px 10px;
    display: inline-block;
    cursor: default;
    margin-bottom: 50px;
    transition: 0.5s linear;
    &:hover {
      transition: 0.5s linear;
      border: 2px solid RGB(8 72 41);
      padding: 14px 9px;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
    }
    span {
      margin-left: 0.5rem;
      font-weight: 500;
      line-height: 1.5;
      font-size: 16px;
    }
  }
`;

export const ListCourseContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  .list-course {
    display: grid;
    text-align: left;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    @media ${'(max-width: 1200px)'} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${devices.maxlg} {
      grid-template-columns: repeat(2, 1fr);
    }
    @media ${devices.maxmd} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
