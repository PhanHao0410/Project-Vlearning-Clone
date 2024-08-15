import React from 'react';
import { Button } from '@mui/material';

import { ErrorsContain, ErrorsContent } from './styles';
import AppBar from '../AppBar';

const Error = () => {
  return (
    <>
      <AppBar />
      <ErrorsContain>
        <ErrorsContent>
          <div className="content-404">
            <h1>404</h1>
          </div>
          <div className="content-box-404">
            <h3>Có gì đó sai ở đây</h3>
            <Button className="btn-back">Quay lại trang chủ</Button>
          </div>
        </ErrorsContent>
      </ErrorsContain>
    </>
  );
};

export default Error;
