import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ComputerIcon from '@mui/icons-material/Computer';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import TurnedInSharpIcon from '@mui/icons-material/TurnedInSharp';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import AppBar from '../../components/AppBar';
import ButtonScroll from '../../components/ButtonScrollBottom';
import { CardCourse } from '../../components/CardCourse';
import FooterPage from '../../components/FooterPage';
import { fetchDataCoursePage } from './thunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  CourseContain,
  TitleCourseContain,
  TopicCourseContain,
  ListCouseContain,
  ListCourse,
  PaginationContain,
} from './styles';

const TOPICS = [
  {
    type: 'chương trình học',
    icon: <ComputerIcon className="topic-icon" />,
    number: '300',
    color: 'rgb(38,70,83)',
  },
  {
    type: 'nhà sáng tạo',
    icon: <CameraAltIcon className="topic-icon" />,
    number: '300',
    color: 'rgb(42,157,143)',
  },
  {
    type: 'nhà thiết kế',
    icon: <BusinessCenterIcon className="topic-icon" />,
    number: '300',
    color: 'rgb(233,196,106)',
  },
  {
    type: 'bài giảng',
    icon: <ArticleIcon className="topic-icon" />,
    number: '300',
    color: 'rgb(244,162,97)',
  },
  {
    type: 'video',
    icon: <PlayCircleIcon className="topic-icon" />,
    number: '300',
    color: 'rgb(238,137,89)',
  },
  {
    type: 'lĩnh vực',
    icon: <DiamondSharpIcon className="topic-icon" />,
    number: '300',
    color: 'rgb(231,111,81)',
  },
];
const Course = (props) => {
  const { dataCoursePage } = props;
  const [page, setPage] = useState(1);
  const [codeGroup, setCodeGroup] = useState('GP01');
  const [pageSize, setPageSize] = useState(12);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataCoursePage({ page, codeGroup, pageSize }));
  }, [page, codeGroup, pageSize, dispatch]);

  const pageChangeHandler = (event, pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <>
      <AppBar />
      <ButtonScroll />
      <CourseContain>
        <TitleCourseContain>
          <h1>Khóa học</h1>
          <h3>Bắt đầu hành trình nào!!!</h3>
        </TitleCourseContain>
        <TopicCourseContain>
          {TOPICS.map((item) => {
            return (
              <div key={item.type} style={{ backgroundColor: item.color }}>
                <h3>{item.type}</h3>
                <span>{item.icon}</span>
                <p>{item.number}</p>
              </div>
            );
          })}
        </TopicCourseContain>
        <ListCouseContain>
          <h3 className="title-list-course">
            <TurnedInSharpIcon className="icon-title-course" />
            <span>Danh sách khóa học</span>
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ListCourse>
              {dataCoursePage &&
                dataCoursePage.items &&
                dataCoursePage.items.length > 0 &&
                dataCoursePage.items.map((item, ind) => {
                  return (
                    <div className="card-item" key={`${item}${ind}`}>
                      <CardCourse dataCourse={item} />
                    </div>
                  );
                })}
            </ListCourse>
          </div>
        </ListCouseContain>
        <PaginationContain>
          <Stack spacing={1}>
            <Pagination
              count={
                dataCoursePage &&
                dataCoursePage.totalPages &&
                dataCoursePage.totalPages
              }
              onChange={(event, pageNumber) =>
                pageChangeHandler(event, pageNumber)
              }
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </PaginationContain>
        <FooterPage />
      </CourseContain>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    dataCoursePage:
      state.coursePageReducer.dataCoursePage &&
      state.coursePageReducer.dataCoursePage,
  };
};
export default connect(mapStateToProps)(Course);
