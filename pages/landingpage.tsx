import { whenAuthorized, withAuhtSync, logout } from "../utils/auths";
import { Button, Typography } from "@material-ui/core";
import { CommonLayout } from "../components/layout/Layout";

const LandingPage = (props) => {
  const blockDisplay = {display: 'block'}

  return (
    <div>
      <CommonLayout>
        <div className='background_image_dusk'>
            <Typography component='div'>
              <h2 className='main-title' style={{textAlign: 'center'}}>
                Every morning is another journey we will conquer
              </h2>
              <p style={{textAlign: 'center'}}>Our own imagination is our own limit</p>
            </Typography>
        </div>
        <div className='commons black_background button_active' style={{padding: 10}}>
          <Button
           style={{minWidth: '15em'}}
           onClick={ e => { logout()}}
          >Logout</Button>
        </div>
      </CommonLayout>
    </div>
  )
}

LandingPage.getServersideProps = async ctx => {
  whenAuthorized(ctx);
};

export default withAuhtSync(LandingPage);