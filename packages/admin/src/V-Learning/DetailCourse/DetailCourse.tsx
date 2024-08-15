import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BoltIcon from '@mui/icons-material/Bolt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import PeopleIcon from '@mui/icons-material/People';
import { useMediaQuery } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { CardMediaCourse } from '../../components/CardCourse';
import FooterPage from '../../components/FooterPage';
import AppBar from '../../components/AppBar';
import ButtonScroll from '../../components/ButtonScrollBottom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchDataDetailCourse, fetchDataSubmitCourse } from './thunk';
import { fetchDataListCourse } from '../SliderCard/thunk';
import { getUser } from '../../utils/localStorage';
import { REQUEST_STATUS } from '../../constants/common';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { clearStatus } from './reducer';
import {
  TitleCourseLeft,
  TitleCourseRight,
  TitleIntro,
  TitleBasic,
  TitleSpecial,
} from './DataTotal';

import {
  DetailCourseContain,
  TopicDetailContain,
  DetailCourseContent,
  ListDetailCourse,
  CourseLearnContain,
  CourseContentContain,
  CourseContentItem,
  SideBarCourseContain,
  SideBarCourseContent,
  ListCourseRelatedContain,
  CourseRelatedContent,
  ToastContentContain,
} from './styles';

const MsgSubmit = ({
  submitCourseStatus,
  submitCourseMessage,
  dataSubmit,
  dataCourse,
}) => (
  <ToastContentContain>
    <span>
      {submitCourseStatus === REQUEST_STATUS.SUCCESS ? (
        <CheckCircleOutlineIcon className="icon-toastify" />
      ) : (
        <ErrorOutlineIcon
          className="icon-toastify"
          style={{ color: 'RGB(246 186 53)' }}
        />
      )}
    </span>
    <h3 style={{ color: 'RGB(65 178 148)' }}>
      {submitCourseStatus === REQUEST_STATUS.SUCCESS
        ? dataSubmit
        : submitCourseMessage}
    </h3>
    {submitCourseStatus === REQUEST_STATUS.ERROR ? (
      <p>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</p>
    ) : (
      <p>{`Đã đăng ký khóa học ${dataCourse.tenKhoaHoc} thành công`}</p>
    )}
  </ToastContentContain>
);

const DetailCourse = (props) => {
  const {
    dataCourse,
    dataListCourse,
    submitCourseStatus,
    submitCourseMessage,
    dataSubmit,
  } = props;
  const matches = useMediaQuery('(max-width: 768px)');
  const dispatch = useAppDispatch();
  const codeCourse = props.match.params.codeDetail;
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    dispatch(fetchDataDetailCourse(codeCourse));
    dispatch(fetchDataListCourse());
  }, [dispatch, codeCourse]);

  useEffect(() => {
    if (
      submitCourseStatus === REQUEST_STATUS.SUCCESS ||
      submitCourseStatus === REQUEST_STATUS.ERROR
    ) {
      toast.success(
        <MsgSubmit
          submitCourseStatus={submitCourseStatus}
          submitCourseMessage={submitCourseMessage}
          dataSubmit={dataSubmit}
          dataCourse={dataCourse}
        />,
        {
          icon: false,
          position: 'top-center',
          style: {
            marginTop: '70%',
            width: '90%',
            maxWidth: `${matches ? '444px' : '100vw'}`,
            minWidth: '320px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          closeButton: false,
          hideProgressBar: true,
          pauseOnHover: false,
          autoClose: 2000,
          onClose: () => {
            dispatch(fetchDataDetailCourse(codeCourse));
            dispatch(clearStatus());
          },
        },
      );
    }
  }, [submitCourseStatus]);

  const handleClickSubmitCourse = () => {
    if (getUser()) {
      const maKhoaHoc = codeCourse;
      const taiKhoan = JSON.parse(getUser()).taiKhoan;
      dispatch(fetchDataSubmitCourse({ maKhoaHoc, taiKhoan }));
    } else {
      history.replace(path.LOGIN);
    }
  };

  const handelChange = (event) => {
    if (event.key === 'Enter') {
      setInputValue('');
      history.replace(`/chitiet/${codeCourse}`);
    }
  };

  return (
    <>
      <AppBar />
      <ButtonScroll />
      <DetailCourseContain>
        {dataCourse && dataCourse.hinhAnh && (
          <>
            <TopicDetailContain>
              <h3>Thông tin khóa học</h3>
              <p>Tiến lên và không chần chừ!!!</p>
            </TopicDetailContain>
            <DetailCourseContent>
              {matches ? (
                <>
                  <SideBarCourseContain>
                    <img src={dataCourse.hinhAnh} alt="image_language" />
                    <div className="course-price">
                      <BoltIcon className="icon" />
                      <span>
                        {Number(500000).toLocaleString('de-DE', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </span>
                    </div>
                    <Button
                      className="btn-signup"
                      onClick={handleClickSubmitCourse}
                    >
                      Đăng ký
                    </Button>
                    <SideBarCourseContent>
                      <ul>
                        <li>
                          <div>
                            <p>
                              Ghi danh:
                              <span>10 học viên</span>
                            </p>
                          </div>
                          <SchoolIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Thời gian:
                              <span>18 giờ</span>
                            </p>
                          </div>
                          <ScheduleIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Bài học:
                              <span>10</span>
                            </p>
                          </div>
                          <LibraryBooksIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Video:
                              <span>14</span>
                            </p>
                          </div>
                          <PermMediaIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Trình độ:
                              <span>Người mới bắt đầu</span>
                            </p>
                          </div>
                          <PeopleIcon className="icon" />
                        </li>
                      </ul>
                      <input
                        placeholder="Nhập mã"
                        onKeyDown={handleClickFindInput}
                      />
                    </SideBarCourseContent>
                  </SideBarCourseContain>
                  <ListDetailCourse>
                    <h4 className="title-detail-course">
                      {dataCourse.tenKhoaHoc}
                    </h4>
                    <div className="head-detail-course">
                      <div className="detail-course-intro">
                        <img
                          src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                          alt="image_avatar"
                        />
                        <div className="instructor-title">
                          <h6>Giảng viên</h6>
                          <p>Robert Ngô Ngọc</p>
                        </div>
                      </div>
                      <div
                        className="detail-course-intro"
                        style={{ marginLeft: '20px' }}
                      >
                        <SchoolIcon className="icon-school" />
                        <div className="instructor-title">
                          <h6>Lĩnh vực</h6>
                          <p>{dataCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
                        </div>
                      </div>
                      <div className="detail-course-rate">
                        <Box
                          sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Rating
                            name="text-feedback"
                            value="3.5"
                            readOnly
                            precision={0.5}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Box className="point-rate">3.5</Box>
                        </Box>
                        <p>100 đánh giá</p>
                      </div>
                    </div>
                    <p className="text-discript">{dataCourse.moTa}</p>
                    <CourseLearnContain>
                      <h6>Những gì bạn sẽ học</h6>
                      <div className="course-learn-content">
                        <ul>
                          {TitleCourseLeft.map((item, ind) => {
                            return (
                              <li key={ind}>
                                <CheckIcon className="icon" />
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                        <ul>
                          {TitleCourseRight.map((item, ind) => {
                            return (
                              <li key={ind}>
                                <CheckIcon className="icon" />
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </CourseLearnContain>
                    <CourseContentContain>
                      <h6>Nội dung khóa học</h6>
                      <CourseContentItem>
                        <div className="title-item">
                          <span>Mục 1: Giới thiệu</span>
                          <Button className="btn">xem trước</Button>
                        </div>
                        <p>Bài học</p>
                        <div className="lesson-contain">
                          {TitleIntro.map((item, ind) => {
                            return (
                              <div className="lesson-content" key={ind}>
                                <div className="lesson-item">
                                  <PlayCircleIcon className="icon" />
                                  <span>{item}</span>
                                </div>
                                <div className="lesson-item">
                                  <WatchLaterIcon className="icon" />
                                  <span>14:35</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CourseContentItem>
                      <CourseContentItem>
                        <div className="title-item">
                          <span>Mục 2: Kiến thức căn bản</span>
                          <Button className="btn">xem trước</Button>
                        </div>
                        <p>Bài học</p>
                        <div className="lesson-contain">
                          {TitleBasic.map((item, ind) => {
                            return (
                              <div className="lesson-content" key={ind}>
                                <div className="lesson-item">
                                  <PlayCircleIcon className="icon" />
                                  <span>{item}</span>
                                </div>
                                <div className="lesson-item">
                                  <WatchLaterIcon className="icon" />
                                  <span>14:35</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CourseContentItem>
                      <CourseContentItem>
                        <div className="title-item">
                          <span>Mục 3: Kiến thức chuyên sâu</span>
                          <Button className="btn">xem trước</Button>
                        </div>
                        <p>Bài học</p>
                        <div className="lesson-contain">
                          {TitleSpecial.map((item, ind) => {
                            return (
                              <div className="lesson-content" key={ind}>
                                <div className="lesson-item">
                                  <PlayCircleIcon className="icon" />
                                  <span>{item}</span>
                                </div>
                                <div className="lesson-item">
                                  <WatchLaterIcon className="icon" />
                                  <span>14:35</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CourseContentItem>
                    </CourseContentContain>
                  </ListDetailCourse>
                </>
              ) : (
                <>
                  <ListDetailCourse>
                    <h4 className="title-detail-course">
                      {dataCourse.tenKhoaHoc}
                    </h4>
                    <div className="head-detail-course">
                      <div className="detail-course-intro">
                        <img
                          src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                          alt="image_avatar"
                        />
                        <div className="instructor-title">
                          <h6>Giảng viên</h6>
                          <p>Robert Ngô Ngọc</p>
                        </div>
                      </div>
                      <div className="detail-course-intro">
                        <SchoolIcon className="icon-school" />
                        <div className="instructor-title">
                          <h6>Lĩnh vực</h6>
                          <p>{dataCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
                        </div>
                      </div>
                      <div className="detail-course-rate">
                        <Box
                          sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Rating
                            name="text-feedback"
                            value="3.5"
                            readOnly
                            precision={0.5}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Box className="point-rate">3.5</Box>
                        </Box>
                        <p>100 đánh giá</p>
                      </div>
                    </div>
                    <p className="text-discript">{dataCourse.moTa}</p>
                    <CourseLearnContain>
                      <h6>Những gì bạn sẽ học</h6>
                      <div className="course-learn-content">
                        <ul>
                          {TitleCourseLeft.map((item, ind) => {
                            return (
                              <li key={ind}>
                                <CheckIcon className="icon" />
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                        <ul>
                          {TitleCourseRight.map((item, ind) => {
                            return (
                              <li key={ind}>
                                <CheckIcon className="icon" />
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </CourseLearnContain>
                    <CourseContentContain>
                      <h6>Nội dung khóa học</h6>
                      <CourseContentItem>
                        <div className="title-item">
                          <span>Mục 1: Giới thiệu</span>
                          <Button className="btn">xem trước</Button>
                        </div>
                        <p>Bài học</p>
                        <div className="lesson-contain">
                          {TitleIntro.map((item, ind) => {
                            return (
                              <div className="lesson-content" key={ind}>
                                <div className="lesson-item">
                                  <PlayCircleIcon className="icon" />
                                  <span>{item}</span>
                                </div>
                                <div className="lesson-item">
                                  <WatchLaterIcon className="icon" />
                                  <span>14:35</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CourseContentItem>
                      <CourseContentItem>
                        <div className="title-item">
                          <span>Mục 2: Kiến thức căn bản</span>
                          <Button className="btn">xem trước</Button>
                        </div>
                        <p>Bài học</p>
                        <div className="lesson-contain">
                          {TitleBasic.map((item, ind) => {
                            return (
                              <div className="lesson-content" key={ind}>
                                <div className="lesson-item">
                                  <PlayCircleIcon className="icon" />
                                  <span>{item}</span>
                                </div>
                                <div className="lesson-item">
                                  <WatchLaterIcon className="icon" />
                                  <span>14:35</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CourseContentItem>
                      <CourseContentItem>
                        <div className="title-item">
                          <span>Mục 3: Kiến thức chuyên sâu</span>
                          <Button className="btn">xem trước</Button>
                        </div>
                        <p>Bài học</p>
                        <div className="lesson-contain">
                          {TitleSpecial.map((item, ind) => {
                            return (
                              <div className="lesson-content" key={ind}>
                                <div className="lesson-item">
                                  <PlayCircleIcon className="icon" />
                                  <span>{item}</span>
                                </div>
                                <div className="lesson-item">
                                  <WatchLaterIcon className="icon" />
                                  <span>14:35</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CourseContentItem>
                    </CourseContentContain>
                  </ListDetailCourse>
                  <SideBarCourseContain>
                    <img src={dataCourse.hinhAnh} alt="image_language" />
                    <div className="course-price">
                      <BoltIcon className="icon" />
                      <span>
                        {Number(500000).toLocaleString('de-DE', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </span>
                    </div>
                    <Button
                      className="btn-signup"
                      onClick={handleClickSubmitCourse}
                    >
                      Đăng ký
                    </Button>
                    <SideBarCourseContent>
                      <ul>
                        <li>
                          <div>
                            <p>
                              Ghi danh:
                              <span>10 học viên</span>
                            </p>
                          </div>
                          <SchoolIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Thời gian:
                              <span>18 giờ</span>
                            </p>
                          </div>
                          <ScheduleIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Bài học:
                              <span>10</span>
                            </p>
                          </div>
                          <LibraryBooksIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Video:
                              <span>14</span>
                            </p>
                          </div>
                          <PermMediaIcon className="icon" />
                        </li>
                        <li>
                          <div>
                            <p>
                              Trình độ:
                              <span>Người mới bắt đầu</span>
                            </p>
                          </div>
                          <PeopleIcon className="icon" />
                        </li>
                      </ul>
                      <input
                        placeholder="Nhập mã"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handelChange}
                      />
                    </SideBarCourseContent>
                  </SideBarCourseContain>
                </>
              )}
            </DetailCourseContent>
            <ListCourseRelatedContain>
              <h3>Khóa học tham khảo</h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CourseRelatedContent>
                  {dataListCourse &&
                    dataListCourse[0] &&
                    dataListCourse[0].biDanh &&
                    dataListCourse.slice(0, 4).map((item, ind) => {
                      return (
                        <div className="card-item" key={`${item.biDanh}${ind}`}>
                          <CardMediaCourse dataCourse={item} />
                        </div>
                      );
                    })}
                </CourseRelatedContent>
              </div>
            </ListCourseRelatedContain>
            <FooterPage />
          </>
        )}
      </DetailCourseContain>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    dataCourse:
      state.detailCourseReducer.dataCourse &&
      state.detailCourseReducer.dataCourse,
    dataListCourse:
      state.listCourseReducer.dataListCourse &&
      state.listCourseReducer.dataListCourse,
    submitCourseStatus:
      state.detailCourseReducer.submitCourseStatus &&
      state.detailCourseReducer.submitCourseStatus,
    submitCourseMessage:
      state.detailCourseReducer.submitCourseMessage &&
      state.detailCourseReducer.submitCourseMessage,
    dataSubmit:
      state.detailCourseReducer.dataSubmit &&
      state.detailCourseReducer.dataSubmit,
  };
};

export default connect(mapStateToProps)(DetailCourse);
