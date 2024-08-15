import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SortIcon from '@mui/icons-material/Sort';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import AppBar from '../../components/AppBar';
import FooterPage from '../../components/FooterPage';
import ButtonScroll from '../../components/ButtonScrollBottom';
import {
  fetchDataAccount,
  fetchDataCancelCourse,
  fetchDataUpdateAccount,
} from './thunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUser } from '../../utils/localStorage';
import { REQUEST_STATUS } from '../../constants/common';
import { clearStatusUpdate } from './reducer';

import {
  InforAccountContain,
  TitleContain,
  InforAccountContent,
  InforContain,
  InforContent,
  SkillsContain,
  SkillContent,
  LearnCourseContain,
  TopicCourseContain,
  ParperSearchContain,
  CourseItemContain,
  CourseItemContent,
  CourseItemAction,
  DialogUpdateContain,
  DialogUpdateContent,
  ToastContentContain,
} from './styles';

type UpdateForm = {
  hoTen: string;
  matKhau: string;
  email: string;
  soDT: string;
};
const MsgSubmit = ({ updateAccountStatus, updateAccountMessage }) => (
  <ToastContentContain>
    <span>
      {updateAccountStatus === REQUEST_STATUS.SUCCESS ? (
        <CheckCircleOutlineIcon className="icon-toastify" />
      ) : (
        <ErrorOutlineIcon
          className="icon-toastify"
          style={{ color: 'RGB(246 186 53)' }}
        />
      )}
    </span>

    {updateAccountStatus === REQUEST_STATUS.SUCCESS ? (
      <h3 style={{ color: 'RGB(65 178 148)' }}>
        Cập nhật thông tin thành công
      </h3>
    ) : (
      <h3 style={{ color: 'RGB(246 186 53)' }}>{updateAccountMessage}</h3>
    )}

    {updateAccountStatus === REQUEST_STATUS.ERROR ? (
      <p>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</p>
    ) : (
      <p>Thông tin tài khoản đã được cập nhật thành công</p>
    )}
  </ToastContentContain>
);

const Accounts = (props) => {
  const {
    dataAccount,
    cancelCourseStatus,
    dataFindAll,
    updateAccountStatus,
    dataUpdateAccount,
    updateAccountMessage,
  } = props;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateForm>();
  const [informAcc, setInformAcc] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [dataFind, setDataFind] = useState<any>(
    useEffect(() => {
      setDataFind(dataFindAll);
    }, [dataFindAll]),
  );
  const dispatch = useAppDispatch();
  const taiKhoan = JSON.parse(getUser()).taiKhoan;
  const userCurrent = JSON.parse(getUser());

  useEffect(() => {
    if (
      updateAccountStatus === REQUEST_STATUS.SUCCESS ||
      updateAccountStatus === REQUEST_STATUS.ERROR
    ) {
      toast.success(
        <MsgSubmit
          updateAccountStatus={updateAccountStatus}
          updateAccountMessage={updateAccountMessage}
        />,
        {
          icon: false,
          position: 'top-center',
          style: {
            marginTop: '70%',
            width: '90%',
            maxWidth: '444px',
            minWidth: '320px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          closeButton: false,
          hideProgressBar: true,
          pauseOnHover: false,
          autoClose: 2000,
          onClose: () => {
            setValue('hoTen', '');
            setValue('matKhau', '');
            setValue('email', '');
            setValue('soDT', '');
            dispatch(clearStatusUpdate());
          },
        },
      );
    }
  }, [updateAccountStatus]);

  useEffect(() => {
    dispatch(fetchDataAccount(taiKhoan));
  }, [dispatch, taiKhoan, cancelCourseStatus]);

  const handleClickCancel = (action) => {
    const maKhoaHoc = action;
    if (action && taiKhoan) {
      dispatch(fetchDataCancelCourse({ maKhoaHoc, taiKhoan }));
    }
  };

  const handleChangeSearch = (e) => {
    const result = dataFindAll.filter((item) =>
      item.tenKhoaHoc.toUpperCase().includes(e.target.value.toUpperCase()),
    );
    setDataFind(result);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmitUpdate = (data) => {
    if (data) {
      const email = data.email;
      const hoTen = data.hoTen;
      const matKhau = data.matKhau;
      const soDT = data.soDT;
      const maLoaiNguoiDung = userCurrent.maLoaiNguoiDung;
      const maNhom = userCurrent.maNhom;
      const taiKhoan = userCurrent.taiKhoan;

      dispatch(
        fetchDataUpdateAccount({
          email,
          hoTen,
          matKhau,
          soDT,
          maLoaiNguoiDung,
          maNhom,
          taiKhoan,
        }),
      );
      setOpen(false);
    }
  };
  return (
    <>
      <AppBar />
      <ButtonScroll />
      <InforAccountContain>
        <TitleContain>
          <h3>Thông tin cá nhân</h3>
          <p>Thông tin học viên</p>
        </TitleContain>
        {dataAccount && dataAccount.email && (
          <InforAccountContent>
            <div className="avatar-account-user">
              <img
                src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
                alt="image_avatar"
              />
              <h3>Robert Nguyễn</h3>
              <h6>Lập trình viên Front-end</h6>
              <Button className="btn-acc">Hồ sơ cá nhân</Button>
            </div>
            <InforContain>
              <div className="router-contain">
                <Button
                  className={
                    informAcc ? 'btn-router' : 'btn-router active-infor'
                  }
                  onClick={() => setInformAcc(true)}
                >
                  Thông tin cá nhân
                </Button>
                <Button
                  className={
                    !informAcc ? 'btn-router' : 'btn-router active-infor'
                  }
                  onClick={() => setInformAcc(false)}
                >
                  Khóa học
                </Button>
              </div>
              {informAcc ? (
                <>
                  {updateAccountStatus !== REQUEST_STATUS.SUCCESS ? (
                    <InforContent>
                      <div className="content-left">
                        <p className="item-infor">
                          Email:{' '}
                          <span className="value-infor">
                            {dataAccount.email}
                          </span>
                        </p>
                        <p className="item-infor">
                          Họ và tên:{' '}
                          <span className="value-infor">
                            {dataAccount.hoTen}
                          </span>
                        </p>
                        <p className="item-infor">
                          Số điện thoại:{' '}
                          <span className="value-infor">
                            {dataAccount.soDT}
                          </span>
                        </p>
                      </div>
                      <div className="content-left">
                        <p className="item-infor">
                          Tài khoản:{' '}
                          <span className="value-infor">
                            {dataAccount.taiKhoan}
                          </span>
                        </p>
                        <p className="item-infor">
                          Nhóm:{' '}
                          <span className="value-infor">
                            {dataAccount.maNhom}
                          </span>
                        </p>
                        <p className="item-infor">
                          Đối tượng:{' '}
                          <span className="value-infor">
                            {dataAccount.maLoaiNguoiDung === 'HV'
                              ? 'Học viên'
                              : 'Giảng viên'}
                          </span>
                        </p>
                        <Button
                          className="btn-update"
                          onClick={handleClickOpen}
                        >
                          Cập nhật
                        </Button>
                      </div>
                    </InforContent>
                  ) : (
                    <InforContent>
                      <div className="content-left">
                        <p className="item-infor">
                          Email:{' '}
                          <span className="value-infor">
                            {dataUpdateAccount.email}
                          </span>
                        </p>
                        <p className="item-infor">
                          Họ và tên:{' '}
                          <span className="value-infor">
                            {dataUpdateAccount.hoTen}
                          </span>
                        </p>
                        <p className="item-infor">
                          Số điện thoại:{' '}
                          <span className="value-infor">
                            {dataUpdateAccount.soDt}
                          </span>
                        </p>
                      </div>
                      <div className="content-left">
                        <p className="item-infor">
                          Tài khoản:{' '}
                          <span className="value-infor">
                            {dataUpdateAccount.taiKhoan}
                          </span>
                        </p>
                        <p className="item-infor">
                          Nhóm:{' '}
                          <span className="value-infor">
                            {dataUpdateAccount.maNhom}
                          </span>
                        </p>
                        <p className="item-infor">
                          Đối tượng:{' '}
                          <span className="value-infor">
                            {dataUpdateAccount.maLoaiNguoiDung === 'HV'
                              ? 'Học viên'
                              : 'Giảng viên'}
                          </span>
                        </p>
                        <Button
                          className="btn-update"
                          onClick={handleClickOpen}
                        >
                          Cập nhật
                        </Button>
                      </div>
                    </InforContent>
                  )}

                  <h4>Kĩ năng của tôi</h4>
                  <SkillsContain>
                    <SkillContent>
                      <div className="skill-item">
                        <Button className="btn-skill btn-first">html</Button>
                        <div className="progress">
                          <div
                            className="progress-bar progress-first progress-animation"
                            role="progressbar"
                          />
                        </div>
                      </div>
                      <div className="skill-item">
                        <Button className="btn-skill btn-second">css</Button>
                        <div className="progress">
                          <div
                            className="progress-bar progress-second progress-animation"
                            role="progressbar"
                          />
                        </div>
                      </div>
                      <div className="skill-item">
                        <Button className="btn-skill btn-third">js</Button>
                        <div className="progress">
                          <div
                            className="progress-bar progress-third progress-animation"
                            role="progressbar"
                          />
                        </div>
                      </div>
                      <div className="skill-item">
                        <Button className="btn-skill btn-four">react</Button>
                        <div className="progress">
                          <div
                            className="progress-bar progress-four progress-animation"
                            role="progressbar"
                          />
                        </div>
                      </div>
                    </SkillContent>
                    <LearnCourseContain>
                      <div className="course-content">
                        <div className="course-row">
                          <BrowseGalleryIcon className="icon" />
                          <div>
                            <h3>Giờ học</h3>
                            <p>80</p>
                          </div>
                        </div>
                        <div className="course-row">
                          <AutoAwesomeMotionIcon className="icon" />
                          <div>
                            <h3>Điểm tổng</h3>
                            <p>80</p>
                          </div>
                        </div>
                        <div className="course-row">
                          <ClassIcon className="icon" />
                          <div>
                            <h3>Buổi học</h3>
                            <p>40</p>
                          </div>
                        </div>
                        <div className="course-row">
                          <HistoryEduIcon className="icon" />
                          <div>
                            <h3>Cấp độ</h3>
                            <p>Trung cấp</p>
                          </div>
                        </div>
                        <div className="course-row">
                          <SchoolIcon className="icon" />
                          <div>
                            <h3>Học lực</h3>
                            <p>Khá</p>
                          </div>
                        </div>
                        <div className="course-row">
                          <LibraryBooksIcon className="icon" />
                          <div>
                            <h3>Bài tập</h3>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                    </LearnCourseContain>
                  </SkillsContain>
                </>
              ) : (
                <>
                  <TopicCourseContain>
                    <h3>Khóa học của tôi</h3>
                    <ParperSearchContain>
                      <InputBase
                        sx={{
                          ml: 1,
                          flex: 1,
                          color: 'RGB(134 134 134)',
                        }}
                        placeholder="Tìm kiếm"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={(e) => handleChangeSearch(e)}
                      />
                      <IconButton
                        type="button"
                        sx={{ p: '10px', color: 'black' }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </ParperSearchContain>
                  </TopicCourseContain>
                  {dataFind &&
                    dataFind.map((item, ind) => {
                      return (
                        <CourseItemContain key={item.maKhoaHoc}>
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
                                value={item.danhGia / 2}
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
                              onClick={() => handleClickCancel(item.maKhoaHoc)}
                            >
                              Hủy khóa học
                            </Button>
                          </CourseItemAction>
                        </CourseItemContain>
                      );
                    })}
                </>
              )}
            </InforContain>
          </InforAccountContent>
        )}
        <FooterPage />
      </InforAccountContain>
      <DialogUpdateContain
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Chỉnh sửa thông tin cá nhân
          <span onClick={handleClose} role="presentation">
            x
          </span>
        </DialogTitle>
        <DialogUpdateContent>
          <form onSubmit={handleSubmit(onSubmitUpdate)}>
            <div className="item-contain">
              <h6>Họ và tên</h6>
              <input
                placeholder="Họ tên"
                {...register('hoTen', {
                  required: 'Tên không được để trống',
                  pattern: {
                    value: /^[a-zA-Z]{0,100}$/,
                    message: 'Chỉ nhập ký tự chữ!',
                  },
                })}
              />
              {errors.hoTen?.message && (
                <p className="show-err">{errors.hoTen?.message}</p>
              )}
            </div>
            <div className="item-contain">
              <h6>Mật khẩu</h6>
              <div
                style={{
                  width: '100%',
                  transform: 'translateX(-4px)',
                  position: 'relative',
                }}
              >
                <input
                  style={{ paddingRight: '50px' }}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mật khẩu"
                  {...register('matKhau', {
                    required: 'Mật khẩu không được để trống',
                    pattern: {
                      value: /^([A-Z])([a-zA-Z0-9.-])(?=.*\d@).{7,100}$/,
                      message:
                        'Mật khẩu phải có ít nhất 8 kí tự và kí tự đặc biệt!',
                    },
                  })}
                />
                <span
                  className="icon-show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  role="presentation"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>
              </div>

              {errors.matKhau?.message && (
                <p className="show-err">{errors.matKhau?.message}</p>
              )}
            </div>
            <div className="item-contain">
              <h6>Email</h6>
              <input
                placeholder="Email"
                {...register('email', {
                  required: 'Email không được để trống',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Email không hợp lệ!',
                  },
                })}
              />
              {errors.email?.message && (
                <p className="show-err">{errors.email?.message}</p>
              )}
            </div>
            <div className="item-contain">
              <h6>Số điện thoại</h6>
              <input
                placeholder="Số điện thoại"
                {...register('soDT', {
                  required: 'Số điện thoại không được để trống',
                  pattern: {
                    value: /^0[0-9]{9}$/,
                    message: 'Số điện thoại chưa đúng định dạng!',
                  },
                })}
              />
              {errors.soDT?.message && (
                <p className="show-err">{errors.soDT?.message}</p>
              )}
            </div>
            <div className="dialog-action">
              <Button className="btn btn-agree" type="submit" autoFocus>
                Hoàn thành
              </Button>
              <Button onClick={handleClose} className="btn btn-close">
                Đóng
              </Button>
            </div>
          </form>
        </DialogUpdateContent>
      </DialogUpdateContain>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataAccount:
      state.informAccountReducer.dataAccount &&
      state.informAccountReducer.dataAccount,
    cancelCourseStatus:
      state.informAccountReducer.cancelCourseStatus &&
      state.informAccountReducer.cancelCourseStatus,
    dataFindAll:
      state.informAccountReducer.dataAccount &&
      state.informAccountReducer.dataAccount.chiTietKhoaHocGhiDanh &&
      state.informAccountReducer.dataAccount.chiTietKhoaHocGhiDanh,
    updateAccountStatus:
      state.informAccountReducer.updateAccountStatus &&
      state.informAccountReducer.updateAccountStatus,
    dataUpdateAccount:
      state.informAccountReducer.dataUpdateAccount &&
      state.informAccountReducer.dataUpdateAccount,
    updateAccountMessage:
      state.informAccountReducer.updateAccountMessage &&
      state.informAccountReducer.updateAccountMessage,
  };
};

export default connect(mapStateToProps)(Accounts);
