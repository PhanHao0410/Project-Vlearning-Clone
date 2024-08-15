import React from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';

import {
  FooterContain,
  FooterContent,
  InformContain,
  SelectedContain,
  FormAdviseContain,
  FooterNoteContain,
} from './styles';

const FooterPage = () => {
  return (
    <FooterContain>
      <FooterContent>
        <InformContain>
          <div
            className="title-inform"
            onClick={() => window.scrollTo(0, 0)}
            role="presentation"
          >
            <span>V</span>learning
            <KeyboardIcon className="icon-keyboard" />
          </div>
          <div className="inform-contain">
            <span className="icon-contain">
              <PhoneIcon className="icon-item" />
            </span>
            <p>1800-123-4567</p>
          </div>
          <div className="inform-contain">
            <span className="icon-contain">
              <EmailIcon className="icon-item" />
            </span>
            <p>devit@gmail.com</p>
          </div>
          <div className="inform-contain">
            <span className="icon-contain">
              <FmdGoodIcon className="icon-item" />
            </span>
            <p>Hà Nội</p>
          </div>
        </InformContain>
        <SelectedContain>
          <div className="select-link">
            <h3>Liên kết</h3>
            <p>{`> Trang chủ`}</p>
            <p>{`> Dịch vụ`}</p>
            <p>{`> Nhóm`}</p>
            <p>{`> Blog`}</p>
          </div>
          <div className="select-link">
            <h3>Khóa học</h3>
            <p>{`> Front End`}</p>
            <p>{`> Back End`}</p>
            <p>{`> Full stack`}</p>
            <p>{`> Node Js`}</p>
          </div>
        </SelectedContain>
        <FormAdviseContain>
          <h3>Đăng kí tư vấn</h3>
          <input placeholder="Họ và tên" />
          <input placeholder="Email" />
          <input placeholder="Số điện thoại" />
          <Button className="btn-submit">Đăng kí</Button>
        </FormAdviseContain>
      </FooterContent>
      <FooterNoteContain>
        <h3>Copyright © 2021. All rights reserved.</h3>
        <div>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
        </div>
      </FooterNoteContain>
    </FooterContain>
  );
};

export default FooterPage;
