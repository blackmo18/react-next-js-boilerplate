import {logout} from '../../utils/auths'

import CommonHeader from '../navigation/CommonHeader'

export const HeaderLayout = props => (
    <div className= 'common_header'>
        <CommonHeader hideLogout = {props.hideLogout} logout = {props.logout || logout}>
            {props.children}
        </CommonHeader>
    </div>
)

export const CommonLayout = props => (
    <div className= {props.className ? props.className: 'common_layout'}>
        {props.children}
    </div>
)
