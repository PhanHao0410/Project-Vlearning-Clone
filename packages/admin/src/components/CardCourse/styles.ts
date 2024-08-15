import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import { devices } from '../../V-Learning/DeviceScreen';

export const CardContain = styled.div`
  width: 100%;
  height: 100%;
  max-width: 280px;
  font-family: 'Roboto', sans-serif;
  position: relative !important;
  @media screen and ${devices.md} {
    max-width: 280px;
    :hover {
      .sub-card {
        transition: all 0.3s ease-out;
        visibility: hidden !important;
        opacity: 1;
      }
    }
  }

  .test {
    width: 100%;
    height: 100%;
    max-width: 300px;
    min-width: 200px;
    position: relative;
  }
`;
export const CardCourseContainer = styled(Card)`
  max-width: 280px;
  min-width: 220px;
  height: 100%;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2) !important;
  border-radius: 0px !important;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  .image-type-language {
    width: 100%;
    height: 100%;
    min-height: 150px;
    min-width: 220px;
    max-width: 300px;
    max-height: 170px;
  }
  .type-language {
    background-color: rgb(65, 178, 148);
    color: white;
    padding: 2px 8px;
    margin-top: -2px;
    width: 100%;
    padding-right: 10px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  &:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease-in;
  }
`;

export const CardCourseContent = styled(CardContent)`
  padding: 20px 18px !important;
  border-bottom: 1px solid RGB(224 224 224);
  .title-course {
    word-wrap: break-word;
    font-size: 16px;
    color: #000;
    font-weight: 600;
  }
  .inform-user {
    display: flex;
    align-items: center;
    padding: 12px 0px !important;
    img {
      height: 15% !important;
      width: 15% !important;
    }
    h5 {
      padding: 0 10px;
      color: #8c8c8c;
      font-size: 12px;
    }
  }
`;

export const CardCourseActions = styled(CardActions)`
  padding: 6px 18px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    p {
      color: #41b294;
      padding: 2px 0;
      font-size: 16px;
    }
    .error-money {
      text-decoration: line-through;
      color: #8c8c8c;
      font-size: 12px;
    }
  }
  div {
    display: flex;
    align-items: center;
    h3 {
      color: rgb(246, 186, 53);
      font-size: 1rem;
      font-weight: 500;
      padding: 0 3px;
    }
    p {
      color: #8c8c8c;
      font-size: 12px;
    }
  }
`;

export const IconStar = styled(StarIcon)`
  color: rgb(246, 186, 53);
`;

export const CardMediaContainer = styled(Card)`
  height: 103% !important;
  width: 100% !important;
  max-width: 280px !important;
  min-width: 200px !important;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2) !important;
  cursor: pointer;
  position: relative !important;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
  }
  .image-type-language {
    width: 100%;
    height: 100%;
    min-height: 150px;
    min-width: 200px !important;
    max-width: 300px !important;
    max-height: 170px;
    position: relative;
  }
  .type-language {
    background-color: rgb(65, 178, 148);
    color: white;
    padding: 2px 8px;
    margin-top: -2px;
    width: 100%;
    padding-right: 10px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
`;

export const CardMediaContent = styled(CardContent)`
  padding: 20px 18px !important;
  border-bottom: 1px solid RGB(224 224 224);
  .title-course {
    word-wrap: break-word;
    font-size: 16px;
    color: #000;
    font-weight: 600;
  }
  .inform-history {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px 0px !important;
    div {
      display: flex;
      align-items: center;
      span {
        color: #8c8c8c;
        font-size: 18px;
        padding: 0 3px;
      }
    }
  }
`;

export const CardMediaActions = styled(CardActions)`
  position: relative !important;
  padding: 8px 18px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .inform-user {
    display: flex;
    align-items: center;
    img {
      width: 20% !important;
      height: 20% !important;
    }
    h5 {
      padding: 0 10px;
      color: #8c8c8c;
      font-size: 16px;
    }
  }
  h5 {
    p {
      color: #41b294;
      padding: 2px 0;
      font-size: 16px;
    }
    .error-money {
      text-decoration: line-through;
      color: #8c8c8c;
      font-size: 12px;
    }
  }
`;

export const CardSubContain = styled.div`
  min-width: 280px;
  max-width: 350px;
  width: calc(100%+50px);
  background-color: white;
  position: absolute;
  cursor: pointer;
  z-index: 99;
  height: calc(100% + 20px);
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  top: 0%;

  visibility: hidden !important;
  opacity: 0;
  transition: opacity 1s;

  right: -120% !important;

  :last-child {
    left: -120%;
  }
`;

export const CardSubUser = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    width: 50px;
  }
  p {
    color: #8c8c8c;
    font-size: 16px;
    padding: 0 5px;
  }
`;

export const CardSubContent = styled.div`
  padding: 10px 0;
  h5 {
    padding: 10px 0;
    font-size: 16px;
    font-weight: 500;
  }
  p {
    color: #8c8c8c;
    line-height: 24px;
  }
  .inform-history {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px 0px !important;
    div {
      display: flex;
      align-items: center;
      span {
        color: #8c8c8c;
        font-size: 18px;
        padding: 0 3px;
      }
    }
  }
`;

export const ButtonSubCard = styled(Button)`
  width: 100%;
  background-color: RGB(51 152 125) !important;
  color: white !important;
  padding: 6px 0 !important;
  transition: all 0.3s ease-out;
  :hover {
    transition: all 0.3s ease-in;
    width: 98% !important;
    padding: 5px 0 !important;
  }
`;
