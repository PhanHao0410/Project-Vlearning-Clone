import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SortIcon from '@mui/icons-material/Sort';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import AppBar from '../../components/AppBar';
import ButtonScroll from '../../components/ButtonScrollBottom';
import { fetchDataSearchCourse } from './thunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUser } from '../../utils/localStorage';
import { REQUEST_STATUS } from '../../constants/common';
import history from '../../utils/history';

import {
  SearchCourseContain,
  TitleContain,
  SearchCourseContent,
  FilterCourseContain,
  LisrCourseSearchContain,
  CourseItemContain,
  CourseItemContent,
  CourseItemAction,
} from './styles';

const SearchCourse = (props) => {
  const { dataSearchCourse, searchCourseStatus } = props;
  const codeSearch = props.match.params.codeSearch;
  const [codeGroup, setCodeGroup] = useState<any>(
    useEffect(() => {
      if (getUser()) {
        setCodeGroup(JSON.parse(getUser()).maNhom);
      } else {
        setCodeGroup('GP01');
      }
    }, [getUser()]),
  );
  const dispatch = useAppDispatch();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  useEffect(() => {
    if (codeGroup && codeSearch) {
      dispatch(fetchDataSearchCourse({ codeSearch, codeGroup }));
    }
  }, [codeSearch, codeGroup]);
  return (
    <>
      <AppBar />
      <ButtonScroll />
      <SearchCourseContain>
        <TitleContain>
          <h3>Tìm kiếm</h3>
          <p>Kết quả tìm kiếm khóa học!!!</p>
        </TitleContain>
        <SearchCourseContent>
          <FilterCourseContain>
            <h3>Lọc</h3>
            <ul>
              <h6>Khóa học</h6>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>Tất cả</p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>Front End</p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>Back End</p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>HTML / CSS</p>
              </li>
            </ul>
            <ul>
              <h6>Cấp độ</h6>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>Tất cả</p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>Mới bắt đầu</p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>Trung cấp</p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>Cao cấp</p>
              </li>
            </ul>
            <ul>
              <h6>Đánh giá</h6>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>
                  <span>
                    <StarIcon className="icon-star" />
                  </span>
                </p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>
                  <span>
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                  </span>
                </p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>
                  <span>
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                  </span>
                </p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>
                  <span>
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                  </span>
                </p>
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
                <p>
                  <span>
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                    <StarIcon className="icon-star" />
                  </span>
                </p>
              </li>
            </ul>
          </FilterCourseContain>

          <LisrCourseSearchContain>
            {searchCourseStatus === REQUEST_STATUS.ERROR ? (
              <h3>Không có khóa học phù hợp với tìm kiếm</h3>
            ) : (
              <h3>{`Hiển thị ${dataSearchCourse.length} kết quả`}</h3>
            )}
            {dataSearchCourse &&
              dataSearchCourse[0] &&
              dataSearchCourse[0].maKhoaHoc &&
              dataSearchCourse.map((item, ind) => {
                return (
                  <CourseItemContain key={`${item.maKhoaHoc}${ind}`}>
                    <img
                      src={item.hinhAnh}
                      alt="image_course"
                      className="image-course"
                    />

                    <CourseItemContent>
                      <h3>{item.tenKhoaHoc}</h3>
                      <p className="text-content">{item.moTa}</p>
                      <div className="inform-history">
                        <div>
                          <WatchLaterIcon
                            style={{
                              width: '20px',
                              height: '20px',
                              color: '#f5c002',
                            }}
                          />
                          <span>8 giờ</span>
                        </div>
                        <div>
                          <CalendarMonthIcon
                            style={{
                              width: '20px',
                              height: '20px',
                              color: '#f06f68',
                            }}
                          />
                          <span>8 tuần</span>
                        </div>
                        <div>
                          <SortIcon
                            style={{
                              rotate: '-90deg',
                              width: '20px',
                              height: '20px',
                              color: '#65c9ff',
                            }}
                          />
                          <span>Tất cả</span>
                        </div>
                      </div>
                      <Box
                        sx={{
                          width: 200,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Rating
                          name="text-feedback"
                          value="5"
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Box>
                      <div className="avatar-contain">
                        <img
                          src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
                          alt="image_avatar"
                        />
                        <h6>Nguyễn Nam</h6>
                      </div>
                    </CourseItemContent>
                    <CourseItemAction>
                      <Button
                        className="btn-cancel"
                        onClick={() =>
                          history.replace(`/chitiet/${item.maKhoaHoc}`)
                        }
                      >
                        Xem chi tiết
                      </Button>
                    </CourseItemAction>
                  </CourseItemContain>
                );
              })}
          </LisrCourseSearchContain>
        </SearchCourseContent>
      </SearchCourseContain>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataSearchCourse:
      state.searchCourseReducer.dataSearchCourse &&
      state.searchCourseReducer.dataSearchCourse,
    searchCourseStatus:
      state.searchCourseReducer.searchCourseStatus &&
      state.searchCourseReducer.searchCourseStatus,
  };
};

export default connect(mapStateToProps)(SearchCourse);
