import React from 'react';

import CampaignIcon from '@mui/icons-material/Campaign';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import VisibilityIcon from '@mui/icons-material/Visibility';

import AppBar from '../../components/AppBar';
import ButtonScroll from '../../components/ButtonScrollBottom';
import FooterPage from '../../components/FooterPage';
import {
  BlogUicontain,
  TitleBlogContain,
  ContentBlogContain,
  BlogCourseContain,
  BlogRecommendContain,
  ListBlogContain,
  BlogItemContain,
  TopicRecommendContain,
} from './styles';

const BlogUi = () => {
  return (
    <>
      <AppBar />
      <ButtonScroll />
      <BlogUicontain>
        <TitleBlogContain>
          <h1>Blog</h1>
          <h3>Thông tin công nghệ số!!!</h3>
        </TitleBlogContain>
        <ContentBlogContain>
          <BlogCourseContain>
            <h3 className="title-list-course">
              <CampaignIcon className="icon-title-course" />
              <span>Phù hợp với bạn</span>
            </h3>
            <ListBlogContain>
              <BlogItemContain>
                <img
                  src="https://tse3.explicit.bing.net/th?id=OIP.4ao1__Y6jld7Q41uKujXhwHaEK&pid=Api&P=0&h=220"
                  alt="image_blog"
                />
                <h3>Tailwind css và cách cài đặt cơ bản</h3>
                <div className="interact-blog-course">
                  <div className="icon-interact-contain">
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <ThumbUpOffAltIcon className="icon-interact" />
                      </span>
                      <span>300</span>
                    </div>
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <MessageIcon className="icon-interact" />
                      </span>
                      <span>500</span>
                    </div>
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <VisibilityIcon className="icon-interact" />
                      </span>
                      <span>500</span>
                    </div>
                  </div>
                  <div className="user-post">
                    Đăng bởi<span>Jhony Đặng</span>
                  </div>
                </div>
                <p>{`Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable".
               Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...`}</p>
                <div className="btn-contain">
                  <Button className="btn-detail">Xem thêm</Button>
                </div>
              </BlogItemContain>
              <BlogItemContain>
                <img
                  src="https://tse3.explicit.bing.net/th?id=OIP.4ao1__Y6jld7Q41uKujXhwHaEK&pid=Api&P=0&h=220"
                  alt="image_blog"
                />
                <h3>Tailwind css và cách cài đặt cơ bản</h3>
                <div className="interact-blog-course">
                  <div className="icon-interact-contain">
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <ThumbUpOffAltIcon className="icon-interact" />
                      </span>
                      <span>300</span>
                    </div>
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <MessageIcon className="icon-interact" />
                      </span>
                      <span>500</span>
                    </div>
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <VisibilityIcon className="icon-interact" />
                      </span>
                      <span>500</span>
                    </div>
                  </div>
                  <div className="user-post">
                    Đăng bởi<span>Jhony Đặng</span>
                  </div>
                </div>
                <p>{`Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable".
               Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...`}</p>
                <div className="btn-contain">
                  <Button className="btn-detail">Xem thêm</Button>
                </div>
              </BlogItemContain>
              <BlogItemContain>
                <img
                  src="https://tse3.explicit.bing.net/th?id=OIP.4ao1__Y6jld7Q41uKujXhwHaEK&pid=Api&P=0&h=220"
                  alt="image_blog"
                />
                <h3>Tailwind css và cách cài đặt cơ bản</h3>
                <div className="interact-blog-course">
                  <div className="icon-interact-contain">
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <ThumbUpOffAltIcon className="icon-interact" />
                      </span>
                      <span>300</span>
                    </div>
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <MessageIcon className="icon-interact" />
                      </span>
                      <span>500</span>
                    </div>
                    <div className="icon-interact-contain icon-contain">
                      <span>
                        <VisibilityIcon className="icon-interact" />
                      </span>
                      <span>500</span>
                    </div>
                  </div>
                  <div className="user-post">
                    Đăng bởi<span>Jhony Đặng</span>
                  </div>
                </div>
                <p>{`Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable".
               Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...`}</p>
                <div className="btn-contain">
                  <Button className="btn-detail">Xem thêm</Button>
                </div>
              </BlogItemContain>
            </ListBlogContain>
          </BlogCourseContain>
          <BlogRecommendContain>
            <TopicRecommendContain>
              <h3 className="title-topic">Các chủ đề được đề xuất</h3>
              <ul>
                <li>Front-end / Mobile apps</li>
                <li>UI / UX / Design</li>
                <li>BACK-END</li>
                <li>Thư viện</li>
                <li>Chia sẻ người trong nghề</li>
                <li>Châm ngôn IT</li>
                <li>Chủ đề khác</li>
              </ul>
            </TopicRecommendContain>
            <TopicRecommendContain>
              <h3 className="title-topic">Bài đăng được đề xuất</h3>
              <ul>
                <div className="post-contain">
                  <h5>Routing trong reactjs</h5>
                  <p>
                    Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                  </p>
                  <div className="avatar-contain">
                    <img
                      src="https://demo2.cybersoft.edu.vn/static/media/instrutor13.0159beae.jpg"
                      alt="image_avt_post"
                    />
                    <span>Nguyên Văn Vũ</span>
                  </div>
                </div>
                <div className="post-contain">
                  <h5>Routing trong reactjs</h5>
                  <p>
                    Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                  </p>
                  <div className="avatar-contain">
                    <img
                      src="https://demo2.cybersoft.edu.vn/static/media/instrutor13.0159beae.jpg"
                      alt="image_avt_post"
                    />
                    <span>Nguyên Văn Vũ</span>
                  </div>
                </div>
                <div className="post-contain">
                  <h5>Routing trong reactjs</h5>
                  <p>
                    Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                  </p>
                  <div className="avatar-contain">
                    <img
                      src="https://demo2.cybersoft.edu.vn/static/media/instrutor13.0159beae.jpg"
                      alt="image_avt_post"
                    />
                    <span>Nguyên Văn Vũ</span>
                  </div>
                </div>
              </ul>
            </TopicRecommendContain>
          </BlogRecommendContain>
        </ContentBlogContain>
        <FooterPage />
      </BlogUicontain>
    </>
  );
};

export default BlogUi;
