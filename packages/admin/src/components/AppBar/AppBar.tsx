import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import path from '../../constants/clientPath';
import history from '../../utils/history';
import { fetchDataCourseCatalog } from './thunk';
import { useAppDispatch } from '../../redux/hooks';
import { isHavingToken, getUser } from '../../utils/localStorage';
import {
  ACCESS_TOKEN,
  CACHED_URL,
  CURRENT_USER,
} from '../../constants/localStorage';

import {
  AppBarContain,
  LogoContain,
  ParperSearchContain,
  SelectAppbarContain,
  ShowContentSelect,
  ButtonSignIn,
  IconShowDrawer,
  DrawerContain,
  ActionMenuContain,
  ImageUser,
} from './styles';

const ADD = ({ dataCourseCatalog }) => {
  return (
    <ShowContentSelect className="show-select">
      {dataCourseCatalog &&
        dataCourseCatalog[0] &&
        dataCourseCatalog.map((item) => {
          return (
            <p
              key={item.maDanhMuc}
              onClick={() => history.push(`/danhmuckhoahoc/${item.maDanhMuc}`)}
              role="presentation"
            >
              {item.tenDanhMuc}
            </p>
          );
        })}
    </ShowContentSelect>
  );
};

const AppBar = (props) => {
  const [open, setOpen] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [isSignIn, setIsSignIn] = useState<any>(
    localStorage.getItem(ACCESS_TOKEN),
  );
  const { dataCourseCatalog } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataCourseCatalog());
  }, [dispatch, isHavingToken]);

  const handleClickLogout = () => {
    localStorage.removeItem(CURRENT_USER);
    localStorage.removeItem(ACCESS_TOKEN);
    setIsSignIn(false);
  };
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`/timkiem/${e.target.value}`);
      setValueSearch('');
    }
  };

  return (
    <AppBarContain
      style={{
        position: 'fixed',
        boxShadow: ' 0 2px 24px 0 rgba(0, 0, 0, 0.15)',
      }}
    >
      <LogoContain>
        <img
          src="https://demo2.cybersoft.edu.vn/logo.png"
          alt="logo"
          onClick={() => history.replace(path.ROOT)}
          role="presentation"
        />
        <ParperSearchContain>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: 'RGB(134 134 134)',
            }}
            placeholder="Tìm kiếm"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            onKeyDown={(e) => handleSearch(e)}
          />
          <IconButton
            type="button"
            sx={{ p: '10px', color: 'black' }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </ParperSearchContain>
      </LogoContain>
      <SelectAppbarContain>
        <div className="select-contain">
          <div
            style={{ display: 'flex', alignItems: 'center' }}
            className="select-item select-direct"
            onClick={() => history.push(path.ROOT)}
            role="presentation"
          >
            <MenuIcon sx={{ transform: 'scale(1)', paddingRight: '4px' }} />{' '}
            Danh mục
          </div>
          <ADD dataCourseCatalog={dataCourseCatalog && dataCourseCatalog} />
        </div>
        <div
          className="select-item"
          onClick={() => history.push(path.COURSE)}
          role="presentation"
        >
          Khóa học
        </div>
        <div
          className="select-item"
          onClick={() => history.push(path.BLOG)}
          role="presentation"
        >
          Blog
        </div>
        <div className="select-contain">
          <div
            className="select-item select-direct"
            onClick={() => history.push(path.EVENT)}
            role="presentation"
          >
            Sự kiện
          </div>
          <ShowContentSelect className="show-select">
            <p
              onClick={() => history.push(`/sukien/lastYear`)}
              role="presentation"
            >
              Sự kiện sale cuối năm
            </p>
            <p
              onClick={() => history.push(`/sukien/Christmas`)}
              role="presentation"
            >
              Sự kiện giáng sinh
            </p>
            <p onClick={() => history.push(`/sukien/Noel`)} role="presentation">
              Sự kiện Noel
            </p>
          </ShowContentSelect>
        </div>
        <div
          className="select-item"
          onClick={() => history.push(path.INFORMATION)}
          role="presentation"
        >
          Thông tin
        </div>
      </SelectAppbarContain>
      <ActionMenuContain>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {isSignIn ? (
            <div className="action-user">
              <ImageUser
                src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
                alt="image_avatar"
                onClick={() => history.push(path.ACCOUNT)}
              />
              <span onClick={() => handleClickLogout()} role="presentation">
                <PowerSettingsNewIcon className="icon-logout" />
              </span>
            </div>
          ) : (
            <ButtonSignIn onClick={() => history.push(path.LOGIN)}>
              đăng nhập
            </ButtonSignIn>
          )}
          <IconShowDrawer onClick={() => setOpen(!open)} />
        </div>
        <DrawerContain className={open ? '' : 'drawer-contain'}>
          <input
            placeholder="Tìm kiếm"
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            onKeyDown={(e) => handleSearch(e)}
          />
          <div className="select-contain">
            <p role="presentation" className="title-select">
              <div
                onClick={() => history.push(path.ROOT)}
                role="presentation"
                style={{ width: '100%' }}
              >
                Danh mục
              </div>
              <ADD dataCourseCatalog={dataCourseCatalog && dataCourseCatalog} />
            </p>
          </div>
          <p onClick={() => history.push(path.COURSE)} role="presentation">
            Khóa học
          </p>
          <p onClick={() => history.push(path.BLOG)} role="presentation">
            Blog
          </p>
          <div className="select-contain">
            <p role="presentation" className="title-select">
              <div
                onClick={() => history.push(path.EVENT)}
                role="presentation"
                style={{ width: '100%' }}
              >
                Sự kiện
              </div>
              <ShowContentSelect className="show-select">
                <p
                  onClick={() => history.push(`/sukien/lastYear`)}
                  role="presentation"
                >
                  Sự kiện sale cuối năm
                </p>
                <p
                  onClick={() => history.push(`/sukien/Christmas`)}
                  role="presentation"
                >
                  Sự kiện giáng sinh
                </p>
                <p
                  onClick={() => history.push(`/sukien/Noel`)}
                  role="presentation"
                >
                  Sự kiện Noel
                </p>
              </ShowContentSelect>
            </p>
          </div>
          <p onClick={() => history.push(path.INFORMATION)} role="presentation">
            Thông tin
          </p>
          {isHavingToken() ? (
            <p onClick={handleClickLogout} role="presentation">
              Đăng xuất
            </p>
          ) : (
            <p onClick={() => history.push(path.LOGIN)} role="presentation">
              Đăng nhập
            </p>
          )}
        </DrawerContain>
      </ActionMenuContain>
    </AppBarContain>
  );
};
const mapStateToProps = (state) => {
  return {
    dataCourseCatalog:
      state.listCourseCatalogReducer.dataCourseCatalog &&
      state.listCourseCatalogReducer.dataCourseCatalog,
  };
};

export default connect(mapStateToProps)(AppBar);
