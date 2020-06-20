
import { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: '#079A7B'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#079A7B'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#187461'
      },
      '&:hover fieldset': {
        borderColor: '#079A7B'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#079A7B'
      }
    },
  },
  button: {
    width: '100%'
  }
}));

const LoginPane = props => {
  const [credential, setCredential] = useState({ userName: '', password: '' });

  const handleUserName = event => {
    credential.userName = event.target.value;
  };

  const handlePassword = event => {
    credential.password = event.target.value;
  };

  const submitForm = event => {
    event.preventDefault();
    setCredential(Object.assign({}, credential, { error: '' }));

    if (props.loginUser) {
      props.loginUser(credential);
    }
  };

  const setVisibility = visible => {
    const vs = { visibility: 'hidden' };
    if (!visible) {
      return 'hidden';
    } else {
      return 'visible';
    }
  };

  const classes = useStyles();

  return (
    <div className='login_class'>
      <form onSubmit={e => submitForm(e)}>
        <div className='textinput'>
          <TextField
            className={classes.root}
            label='User Name'
            variant='outlined'
            required
            onChange={e => handleUserName(e)}
          />
        </div>
        <div className='textinput'>
          <TextField
            className={classes.root}
            label='Password'
            type='password'
            variant='outlined'
            required
            onChange={e => handlePassword(e)}
          />
        </div>
        <div>
          <Button type='submit' variant='contained' disableElevation className={classes.button}>
            Login
          </Button>
          {/* <label className = 'error_label' style ={setVisibility(props.visible)}>Login Failed</label> */}
          <Typography
            className='error_label'
            style={{visibility: setVisibility(props.visible)}}
          >
            <label style={{ width: '100%'}}>Login Failed</label>
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default LoginPane;
