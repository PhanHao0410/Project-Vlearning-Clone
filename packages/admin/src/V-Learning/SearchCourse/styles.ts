import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const SearchCourseContain = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  padding-top: 90px;
  font-weight: 400;
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
export const SearchCourseContent = styled.div`
  padding: 20px 50px;
  display: flex;
`;

export const FilterCourseContain = styled.div`
  width: 20%;
  min-width: 250px;
  @media ${devices.maxmd} {
    display: none;
  }
  h3 {
    font-size: 25px;
    margin-bottom: 16px;
    font-weight: 500;
    line-height: 1.2;
  }
  ul {
    margin-bottom: 20px;
    h6 {
      font-size: 20px;
      padding-bottom: 10px;
      font-weight: 500;
      line-height: 1.2;
    }
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      margin-left: 5px;
      margin-bottom: 10px;
      .css-2tnjwj-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
        color: rgb(65, 178, 148);
      }
      .css-2tnjwj-MuiButtonBase-root-MuiCheckbox-root {
        color: rgb(65, 178, 148);
        padding: 0;
      }
      .css-2tnjwj-MuiButtonBase-root-MuiCheckbox-root .MuiSvgIcon-root {
        font-size: 34px !important;
      }

      p {
        font-size: 17px;
        font-weight: 400;
        padding-left: 5px;
      }
      .icon-star {
        color: rgb(246, 186, 53);
      }
    }
  }
`;

export const LisrCourseSearchContain = styled.div`
  width: 80%;
  @media ${devices.maxmd} {
    width: 100%;
  }
`;
export const CourseItemContain = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  @media ${devices.maxlg} {
    display: block;
    margin: 10px 0;
  }

  .image-course {
    width: 20%;
    height: 100%;
    min-height: 180px;
    @media ${devices.maxlg} {
      width: 100%;
      aspect-ratio: 1/0.5;
      min-width: 200px;
    }
  }
`;
export const CourseItemContent = styled.div`
  width: 65%;
  padding-left: 20px;
  @media ${devices.maxlg} {
    width: 100%;
    padding-left: 0;
  }
  h3 {
    font-weight: 500;
    line-height: 1.2;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .text-content {
    color: #8c8c8c;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 8px;
    text-align: justify;
  }
  .inform-history {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    div {
      display: flex;
      align-items: center;
      margin-right: 10px;
      span {
        color: black;
        font-size: 16px;
        padding: 0 3px;
      }
    }
  }
  .avatar-contain {
    display: flex;
    margin-top: 10px;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    h6 {
      font-size: 1rem;
      font-weight: 400;
      padding-left: 10px;
      line-height: 1.2;
    }
  }
`;
export const CourseItemAction = styled.div`
  position: relative;
  width: 15%;
  @media ${devices.maxlg} {
    width: 100%;
  }
  .btn-cancel {
    background-color: rgb(246, 186, 53);
    font-size: 14px;
    color: white;
    position: absolute;
    bottom: 0;
    padding: 4px 6px;
    border-radius: 0;
    transition: all 0.3s;
    @media ${devices.maxlg} {
      position: relative;
      margin: 10px 0;
    }
    :hover {
      background-color: rgb(246, 186, 53);
      padding: 3.5px 5.5px;
      transition: all 0.3s;
    }
  }
`;
