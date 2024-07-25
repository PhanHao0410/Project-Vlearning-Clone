import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchData } from './thunk';

const HomeUI = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.dataSlice.dataList);
  console.log('check data ui: ', data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return <div>Wellcome uihome v-learning</div>;
};

export default HomeUI;
