import { Typography, Button } from "@material-ui/core"
import { CommonLayout } from  '../components/layout/Layout'
import background from   '../public/images/machuPicchu.png'
import Link from "next/link"

const Index = () => {
  return (
    <div>
      <CommonLayout>
        <div className='background_image'>
            <Typography component='div'>
              <h2 className='main-title' style={{textAlign: 'center'}}>
                Welcome to my World
              </h2>
            </Typography>
        </div>
        <div className='commons black_background' style={{padding: 10}}>
          <Link href='/login'>
            <div className='button_active'>
               <Button
                style={{minWidth: '15em'}}
               >Login to Enter</Button>
            </div>
          </Link>
        </div>
      </CommonLayout>
    </div>
  )
}

export default Index