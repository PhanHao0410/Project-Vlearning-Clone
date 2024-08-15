import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ComputerIcon from '@mui/icons-material/Computer';
import AppBar from '../../components/AppBar';
import { fetchDataCourseTopic } from './thunk';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { CardMediaCourse } from '../../components/CardCourse';
import FooterPage from '../../components/FooterPage';
import ButtonScroll from '../../components/ButtonScrollBottom';
import {
  CourseCatalogContain,
  TitleContain,
  ListCourseContain,
  ListCourseContent,
} from './styles';

const CourseCatalog = (props) => {
  const { dataCourseTopic } = props;
  const CodeCourse = props.match.params.codecourse;
  const [titleCode, setTitleCode] = useState('');
  const [codeGroup, setCodeGroup] = useState('GP01');
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (CodeCourse === 'BackEnd') {
      setTitleCode('Lập trình Backend');
    } else if (CodeCourse === 'Design') {
      setTitleCode('Thiết kế Web');
    } else if (CodeCourse === 'DiDong') {
      setTitleCode('Lập trình di động');
    } else if (CodeCourse === 'FrontEnd') {
      setTitleCode('Lập trình Frontend');
    } else if (CodeCourse === 'FullStack') {
      setTitleCode('Lập trình Fullstack');
    } else {
      setTitleCode('Tư duy lập trình');
    }
    dispatch(fetchDataCourseTopic({ codeGroup, CodeCourse }));
  }, [CodeCourse, dispatch, codeGroup]);
  return (
    <>
      <AppBar />
      <ButtonScroll />
      <CourseCatalogContain>
        <TitleContain>
          <h3>Khóa học theo danh mục</h3>
          <p>Hãy chọn khóa học mong muốn!!!</p>
        </TitleContain>
        <ListCourseContain>
          <div className="title-course-contain">
            <div>
              <ComputerIcon sx={{ color: 'rgb(246,186,53)' }} />
              <span>{titleCode}</span>
            </div>
          </div>
          <ListCourseContent>
            <div className="list-course">
              {dataCourseTopic &&
                dataCourseTopic.map((item, ind) => {
                  return (
                    <CardMediaCourse
                      dataCourse={item}
                      key={`${item.biDanh}${ind}`}
                    />
                  );
                })}
            </div>
          </ListCourseContent>
        </ListCourseContain>
        <FooterPage />
      </CourseCatalogContain>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    dataCourseTopic:
      state.courseTopicReducer.dataCourseTopic &&
      state.courseTopicReducer.dataCourseTopic.length > 0 &&
      state.courseTopicReducer.dataCourseTopic,
  };
};
export default connect(mapStateToProps)(CourseCatalog);
