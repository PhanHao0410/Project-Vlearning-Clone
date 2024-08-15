import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CardCourse, CardMediaCourse } from '../../components/CardCourse';
import { fetchDataListCourse } from './thunk';
import {
  SliderCardContain,
  CardCourseContain,
  BoxNumberContain,
  BoxNumberItem,
  InstructorContain,
  InstructorItemContain,
  InstructorItem,
  ReviewContain,
  ReviewUi,
  ReviewContent,
} from './styles';

const SliderCard = (props) => {
  const { dataCourse, dataCourseCatalog } = props;
  const [counterNumber, setCounterNumber] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataListCourse());
  }, [dispatch]);

  return (
    <SliderCardContain>
      <CardCourseContain>
        <h3>Khóa học phổ biến</h3>
        <div className="card-grid">
          {dataCourse &&
            dataCourse[0] &&
            dataCourse[0].biDanh &&
            dataCourse.slice(0, 4).map((item, ind) => {
              return (
                <div className="card-item" key={`${item.biDanh}${ind}`}>
                  <CardCourse dataCourse={item} />
                </div>
              );
            })}
        </div>
      </CardCourseContain>
      <CardCourseContain>
        <h3 style={{ color: 'black' }}>Khóa học tham khảo</h3>
        <div className="card-grid">
          {dataCourse &&
            dataCourse[0] &&
            dataCourse[0].biDanh &&
            dataCourse.slice(4, 8).map((item, ind) => {
              return (
                <div className="card-item" key={`${item.biDanh}${ind}`}>
                  <CardMediaCourse dataCourse={item} />
                </div>
              );
            })}
        </div>
      </CardCourseContain>
      <CardCourseContain>
        <h3 style={{ color: 'black' }}>Khóa học Front End React Js</h3>
        <div className="card-grid">
          {dataCourse &&
            dataCourse[0] &&
            dataCourse[0].biDanh &&
            dataCourse.slice(8, 12).map((item, ind) => {
              return (
                <div className="card-item" key={`${item.biDanh}${ind}`}>
                  <CardMediaCourse dataCourse={item} />
                </div>
              );
            })}
        </div>
      </CardCourseContain>
      <BoxNumberContain>
        <BoxNumberItem>
          <div>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
              alt="image_box_number"
            />
            <h1>9000</h1>
            <h5>Học viên</h5>
          </div>
        </BoxNumberItem>
        <BoxNumberItem>
          <div>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"
              alt="image_box_number"
            />
            <h1>1000</h1>
            <h5>Khóa học</h5>
          </div>
        </BoxNumberItem>
        <BoxNumberItem>
          <div>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
              alt="image_box_number"
            />
            <h1>33200</h1>
            <h5>Giờ học</h5>
          </div>
        </BoxNumberItem>
        <BoxNumberItem>
          <div>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"
              alt="image_box_number"
            />
            <h1>400</h1>
            <h5>Giảng viên</h5>
          </div>
        </BoxNumberItem>
      </BoxNumberContain>
      <InstructorContain>
        <h3>Giảng viên hàng đầu</h3>
        <InstructorItemContain>
          <InstructorItem>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="instructor_image"
            />
            <h3>Big DadMoon</h3>
            <p>Chuyên gia lĩnh vực lập trình</p>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5px',
              }}
            >
              <Rating
                name="text-feedback"
                value="4.9"
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ color: 'rgb(250,175,0)', fontSize: '17px' }}>4.9</Box>
            </Box>
            <span className="evaluate">100 đánh giá</span>
          </InstructorItem>
          <InstructorItem>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="instructor_image"
            />
            <h3>Big DadMoon</h3>
            <p>Chuyên gia lĩnh vực lập trình</p>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5px',
              }}
            >
              <Rating
                name="text-feedback"
                value="4.9"
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ color: 'rgb(250,175,0)', fontSize: '17px' }}>4.9</Box>
            </Box>
            <span className="evaluate">100 đánh giá</span>
          </InstructorItem>
          <InstructorItem>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="instructor_image"
            />
            <h3>Big DadMoon</h3>
            <p>Chuyên gia lĩnh vực lập trình</p>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5px',
              }}
            >
              <Rating
                name="text-feedback"
                value="4.9"
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ color: 'rgb(250,175,0)', fontSize: '17px' }}>4.9</Box>
            </Box>
            <span className="evaluate">100 đánh giá</span>
          </InstructorItem>
          <InstructorItem>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="instructor_image"
            />
            <h3>Big DadMoon</h3>
            <p>Chuyên gia lĩnh vực lập trình</p>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5px',
              }}
            >
              <Rating
                name="text-feedback"
                value="4.9"
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ color: 'rgb(250,175,0)', fontSize: '17px' }}>4.9</Box>
            </Box>
            <span className="evaluate">100 đánh giá</span>
          </InstructorItem>
          <InstructorItem>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="instructor_image"
            />
            <h3>Big DadMoon</h3>
            <p>Chuyên gia lĩnh vực lập trình</p>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5px',
              }}
            >
              <Rating
                name="text-feedback"
                value="4.9"
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ color: 'rgb(250,175,0)', fontSize: '17px' }}>4.9</Box>
            </Box>
            <span className="evaluate">100 đánh giá</span>
          </InstructorItem>
          <InstructorItem>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              alt="instructor_image"
            />
            <h3>Big DadMoon</h3>
            <p>Chuyên gia lĩnh vực lập trình</p>

            <Box
              sx={{
                width: '100%',
                marginTop: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Rating
                name="text-feedback"
                value="4.9"
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ color: 'rgb(250,175,0)', fontSize: '17px' }}>4.9</Box>
            </Box>
            <span className="evaluate">100 đánh giá</span>
          </InstructorItem>
        </InstructorItemContain>
      </InstructorContain>
      <ReviewContain>
        <ReviewUi>
          <div className="triangle" />
          <div className="smallBox smallBoxLeftTop" />
          <div className="smallBox smallBoxLeftBottom" />
          <div className="student-ui">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png"
              alt="image_student"
            />
          </div>
        </ReviewUi>
        <ReviewContent>
          <div className="smallBox smallBoxRightTop" />
          <div className="smallBox smallBoxRightBottom" />
          <div className="student-contain">
            <div className="open-quote-first">{`"`}</div>
            <p>
              {` Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
              trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
              được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên
              sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
              "`}
            </p>
            <h5>Nhi Dev</h5>
            <span>Học viên xuất sắc</span>
          </div>
        </ReviewContent>
      </ReviewContain>
    </SliderCardContain>
  );
};

const mapStateToProps = (state) => {
  return {
    dataCourse:
      state.listCourseReducer.dataListCourse &&
      state.listCourseReducer.dataListCourse,
  };
};

export default connect(mapStateToProps)(SliderCard);
