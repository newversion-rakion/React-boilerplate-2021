import React from 'react';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { login } from '../../actions';

import LoginFormStyle from './LoginFormStyle';

export default function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Username: '',
      Password: '',
    },
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  return (
    <LoginFormStyle>
      <Grid
        style={{ height: '100vh' }}
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
      >
        <Grid item xs={3}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="Username"
              variant="outlined"
              margin="dense"
              onChange={formik.handleChange}
              value={formik.values.Username}
            />
            <div style={{ margin: '0 0 20px' }} />
            <TextField
              fullWidth
              label="Password"
              name="Password"
              type="password"
              variant="outlined"
              margin="dense"
              onChange={formik.handleChange}
              value={formik.values.Password}
            />
            <div style={{ margin: '0 0 20px' }} />
            <Button variant="contained" size="large" type="submit">
              Sign in
            </Button>
          </form>
        </Grid>
      </Grid>
    </LoginFormStyle>
  );
}

LoginForm.propTypes = {};
