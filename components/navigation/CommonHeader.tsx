import Link from 'next/link'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const CommonHeader = (props) =>  {
    
    const logout = async () => {
        if (props.logout) {
            props.logout()
        }
    }
    
    return (
        <AppBar
            position = 'relative' 
            color='inherit'
            elevation = {0}
        >
            <Toolbar>
                <Link href='/landingpage'>
                    <a>Home</a>
                </Link>
                <Link href='/login'>
                    <a>Login</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <div className='expand'></div>
                <Button style = {{color: 'white', display: props.hideLogout ? 'none': 'block' }} onClick = {e => {logout()}}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default CommonHeader