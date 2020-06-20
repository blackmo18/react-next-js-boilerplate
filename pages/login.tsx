import { CommonLayout } from "../components/layout/Layout"
import LoginPane from "../components/login/LoginPane"
import { useState } from "react"
import { clearStorage } from "../utils/localStorageUtil"
import { login } from "../utils/auths"
import { userLogin } from "../functions/user/UserApiCall"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  displayHorizontal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Login = () => {
  const [visible, setVissible] = useState(false)
  const classes = useStyles();
  const execLogin = async (credential) => {

    let  response  = await userLogin(credential)

    try {
      clearStorage()
      if (response.code == 'SUCCESS') {
        setVissible(false)
        let token = JSON.stringify(response.data)
        login(token);
      } else {
        setVissible(true)
      }
    } catch (err) {
      console.error('Network Issues', err)
    }

  }

  return (
    <div>
      <CommonLayout>
        <div className='commons'>
          <div >
            <Typography component='h2'>
              <div className={classes.displayHorizontal}>
                <span style={{fontWeight: 'bold'}}>user name:</span>
                &nbsp;
                &nbsp;
                <span>username</span>
              </div>
              <div className={classes.displayHorizontal}>
                <span style={{fontWeight: 'bold'}}>password:</span>
                &nbsp;
                &nbsp;
                <span>password</span>
              </div>
            </Typography>
          </div>
          <LoginPane loginUser={execLogin} visible={visible} style={{display:'block'}} />
        </div>
      </CommonLayout>
    </div>
  )
}

export default Login