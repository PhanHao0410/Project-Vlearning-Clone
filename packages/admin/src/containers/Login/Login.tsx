/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
} from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'admin/src/components/InputField';
import InputFieldPassword from 'admin/src/components/InputFieldPassword';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginRequest, selectLoginSlice } from './reducer';
import { REQUEST_STATUS } from '../../constants/common';
import { passwordRegex } from '../../utils/formValidator';

import {
  getCachedUrl,
  isHavingToken,
  removeCachedUrl,
} from '../../utils/localStorage';
import { Wrapper, Card } from './styles';
import path from '../../constants/clientPath';
import history from '../../utils/history';

interface ILoginInputs {
  email: string;
  password: string;
}

function LoginPage() {
  const [onSubmitLoading, setOnSubmitLoading] = React.useState(false);

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required('Please Enter your password')
      .min(8, 'Password minimum 8 characters')
      .matches(
        passwordRegex,
        'Must Contain One Uppercase, One Lowercase, One Number and one special case Character',
      ),
  });

  const form = useForm<ILoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const { loginStatus, loginMessage } = useAppSelector(selectLoginSlice);

  const checkAndNavigate = () => {
    if (isHavingToken()) {
      const cachedUrl = getCachedUrl();
      if (cachedUrl) {
        history.replace(cachedUrl);
        removeCachedUrl();
      } else {
        history.replace(path.ROOT);
      }
    }
  };

  const handleSubmit = (data) => {
    dispatch(loginRequest(data));
  };

  React.useEffect(() => {
    if (loginStatus === REQUEST_STATUS.REQUESTING) {
      setOnSubmitLoading(true);
    } else {
      setOnSubmitLoading(false);
    }
    checkAndNavigate();
  }, [loginStatus]);

  React.useEffect(() => {
    checkAndNavigate();
  }, []);

  return (
    <Wrapper>
      <Card>
        <Typography variant="h5">Sign in</Typography>
        <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField type="email" name="email" label="Email" form={form} />

          <InputFieldPassword name="password" label="password" form={form} />

          <FormHelperText error>{loginMessage}</FormHelperText>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            disabled={onSubmitLoading}
            fullWidth
            variant="contained"
            color="primary"
            startIcon={
              onSubmitLoading && (
                <CircularProgress size={14} color="secondary" />
              )
            }
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Wrapper>
  );
}

export default React.memo(LoginPage);
