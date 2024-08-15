import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { devices } from '../DeviceScreen';

export const InforAccountContain = styled.div`
  height: 100%;
  width: 100%;
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

export const InforAccountContent = styled.div`
  display: flex;
  padding: 50px;
  @media ${devices.maxlg} {
    display: block;
  }
  .avatar-account-user {
    width: 25%;
    padding: 20px;
    text-align: center;
    @media ${devices.maxlg} {
      width: 100%;
      margin-bottom: 20px;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    h3 {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.2;
      padding: 10px 0;
    }
    h6 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .btn-acc {
      padding: 10px 12px;
      border-radius: 30px;
      color: white;
      background-color: rgb(65, 178, 148);
    }
  }
`;

export const InforContain = styled.div`
  width: 75%;
  @media ${devices.maxlg} {
    width: 100%;
  }
  h4 {
    font-weight: 500;
    line-height: 1.2;
    text-transform: uppercase;
    font-size: 22px;
    padding: 20px 0;
  }
  .router-contain {
    border-top: 2px solid rgb(65, 178, 148);
    display: inline-block;
    .btn-router {
      text-transform: none;
      padding: 15px 20px;
      color: black;
      border-radius: 0px;
      transition: all 0.3s;
      margin-bottom: 10px;
    }
    .active-infor {
      transition: all 0.3s;
      background-color: rgb(65, 178, 148);
      color: white;
    }
  }
`;

export const InforContent = styled.div`
  display: flex;
  @media ${devices.maxsm} {
    display: block;
  }
  .content-left {
    width: 50%;
    @media ${devices.maxsm} {
      width: 100%;
    }
    .btn-update {
      padding: 5px 10px;
      color: white;
      background-color: rgb(246, 186, 53);
      transition: all 0.3s;
      :hover {
        padding: 4px 9px;
        transition: all 0.3s;
      }
    }
    .item-infor {
      padding: 10px 0;
      font-size: 16px;
      font-weight: 500;
      span {
        font-size: 15px;
        font-weight: 400;
        margin-left: 0.5rem;
      }
    }
  }
`;

export const SkillsContain = styled.div`
  display: flex;
  @media ${devices.maxlg} {
    display: block;
  }
`;
export const SkillContent = styled.div`
  width: 65%;
  @media ${'(max-width: 1200px)'} {
    width: 50%;
  }
  @media ${devices.maxlg} {
    width: 100%;
  }
  .skill-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .btn-skill {
      padding: 8px 0px;

      color: white;
      border-radius: 8px;
    }
    .btn-first {
      background-color: rgb(249, 202, 154);
    }
    .btn-second {
      background-color: #f8bebb;
    }
    .btn-third {
      background-color: #f0cc6b;
    }
    .btn-four {
      background-color: #113d3c;
    }
    .progress {
      width: 100%;
      display: flex;
      height: 1rem;
      overflow: hidden;
      line-height: 0;
      font-size: 0.75rem;
      background-color: #e9ecef;
      border-radius: 0.25rem;
      margin-left: 3px;
      .progress-bar {
        background-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        background-size: 1rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        transition: width 0.6s ease;
      }
      .progress-animation {
        animation: progress1 1s linear infinite;
      }
      .progress-first {
        width: 100%;
        background-color: #f9ca9a !important;
      }
      .progress-second {
        width: 75%;
        background-color: #f8bebb !important;
      }
      .progress-third {
        width: 50%;
        background-color: #f0cc6b !important;
      }
      .progress-four {
        width: 65%;
        background-color: #113d3c !important;
      }
      @keyframes progress1 {
        0% {
          background-position: 1rem 0;
        }
        100% {
          background-position: 0 0;
        }
      }
    }
  }
`;
export const LearnCourseContain = styled.div`
  width: 35%;
  padding-left: 20px;
  @media ${'(max-width: 1200px)'} {
    width: 50%;
  }
  @media ${devices.maxlg} {
    width: 100%;
    padding-left: 0px;
    padding-top: 20px;
  }
  .course-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .course-row {
    background-color: rgb(65, 178, 148);
    padding: 15px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    color: white;
    .icon {
      margin-right: 8px;
    }
  }
`;

export const TopicCourseContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${devices.maxlg} {
    display: block;
    margin-top: 10px;
  }
  h3 {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 10px 0;
  }
`;
export const ParperSearchContain = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 250px;
  height: 40px;
  background-color: gray;
  .css-yz9k0d-MuiInputBase-input {
    color: black;
    background-color: transparent;
  }
  /* @media ${devices.maxlg} {
    display: none;
  } */
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
    max-width: 20%;
    max-height: 100%;
    @media ${devices.maxlg} {
      width: 70%;
      aspect-ratio: 1/0.5;
      min-width: 200px;
      max-width: 400px;
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

export const DialogUpdateContain = styled(Dialog)`
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    font-family: 'Roboto', sans-serif;
    background-image: url('https://demo2.cybersoft.edu.vn/static/media/hornor.a74f5377.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    max-width: 500px;
    width: 60%;
    min-width: 380px;
  }
  .css-ypiqx9-MuiDialogContent-root {
    padding: 0 24px;
  }
  #alert-dialog-title {
    color: white;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 500;
    border-bottom: 1px solid white;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1.5rem;
      text-shadow: 0 1px 0 #fff;
      color: #000;
      opacity: 0.5;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  .icon-show-password {
    position: absolute;
    z-index: 1;
    top: 8px;
    right: 15px;
    cursor: pointer;
    color: RGB(122 122 122);
  }
`;

export const DialogUpdateContent = styled(DialogContent)`
  form {
    padding: 20px;
    padding-bottom: 0px;
  }
  .item-contain {
    height: 95px;
  }
  h6 {
    color: white;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 3px;
  }
  input {
    border-radius: 4px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding-left: 10px;
    border: 2px solid RGB(65 178 148);
    outline: none;
    :focus {
      transform: translateX(-3px);
    }
  }
  .show-err {
    color: rgb(240 23 23 / 84%);
    font-size: 15px;
    font-weight: 400;
    padding-top: 5px;
    padding-left: 5px;
  }
  .dialog-action {
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
    .btn {
      padding: 6px 10px;
      color: white;
      margin-right: 10px;
    }
    .btn-agree {
      background-color: rgb(65, 178, 148);
      &:hover {
        background-color: RGB(54 147 122);
      }
    }
    .btn-close {
      background-color: rgb(220, 53, 69);
      &:hover {
        background-color: RGB(178 39 53);
      }
    }
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
