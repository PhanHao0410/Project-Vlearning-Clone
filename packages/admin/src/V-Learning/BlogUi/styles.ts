import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const BlogUicontain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
  font-family: 'Roboto', sans-serif;
  color: #252525;
`;

export const TitleBlogContain = styled.div`
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

export const ContentBlogContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  padding-bottom: 10px;
  display: flex;
  @media ${devices.maxmd} {
    display: block;
  }
`;
export const BlogCourseContain = styled.div`
  width: 65%;
  height: 100%;
  @media ${`(max-width: 1200px)`} {
    width: 60%;
  }
  @media ${devices.maxmd} {
    width: 100%;
  }
  .title-list-course {
    display: flex;
    align-items: center;
    .icon-title-course {
      color: rgb(237, 133, 171);
      font-size: 35px;
    }
    span {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
      color: #252525;
      padding-left: 5px;
      transform: translateY(2px);
    }
  }
`;

export const ListBlogContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media ${`(max-width: 1200px)`} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const BlogItemContain = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    min-height: 300px;
  }
  h3 {
    font-size: 20px;
    padding: 10px 0;
    font-weight: 500;
    line-height: 1.2;
  }
  .interact-blog-course {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .icon-interact-contain {
      display: flex;
      align-items: center;
      .icon-contain {
        padding-right: 10px;
      }
      .icon-interact {
        font-size: 20px;
        color: RGB(65 178 148);
        padding-right: 2px;
        transform: translateY(1px);
      }
    }
    .user-post {
      font-size: 16px;
      span {
        padding-left: 5px;
        color: #ed85ab;
      }
    }
  }
  p {
    color: #8c8c8c;
    font-size: 15px;
    padding: 10px 0;
  }
  .btn-contain {
    height: 50px;
    padding: 10px 0;
    .btn-detail {
      padding: 5px 12px;
      background-color: rgb(246, 186, 53);
      color: white;
      border-radius: 0;
      transition: all 0.3s;
      &:hover {
        padding: 5px 11px;
        transition: all 0.3s;
      }
    }
  }
`;
export const BlogRecommendContain = styled.div`
  width: 35%;
  height: 100%;
  padding-top: 60px;
  padding-left: 40px;
  @media ${`(max-width: 1200px)`} {
    width: 40%;
  }
  @media ${devices.maxmd} {
    width: 100%;
    padding-left: 0px;
  }
`;

export const TopicRecommendContain = styled.div`
  border: 1px solid #d0d0d0;
  border-top: none;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  .title-topic {
    border-top: 3px solid RGB(65 178 148);
    padding: 10px 0;
    text-align: center;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1rem;
  }
  ul {
    border-top: 1px solid #d0d0d0;
    li {
      list-style-type: none;
      padding: 10px 20px;
      color: #8c8c8c;
      font-size: 16px;
      cursor: default;
      transition: all 0.5s;
      &:hover {
        color: RGB(65 178 148);
        transform: translateY(-2px);
        transition: all 0.5s;
      }
    }
    .post-contain {
      padding: 20px 20px;
      margin-right: 30px;
      margin-bottom: 20px;
      h5 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.2;
        padding-bottom: 10px;
      }
      p {
        color: #8c8c8c;
        padding-bottom: 10px;
        font-size: 16px;
        line-height: 1.5;
      }
      .avatar-contain {
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        span {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #8c8c8c;
          padding-left: 5px;
        }
      }
    }
  }
`;
