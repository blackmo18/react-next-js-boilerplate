import '../../styles/navigation/navlink.global.scss'

const NavLink = (props) => {
    
    let url = ''

    const handleClick = (event) => {
       const id = props.navCallBack(event.target.getAttribute('id')) 
       switch(id) {
           case 'student': {
               url = '/sudent'
               break
           }
           case 'adviser' : {
               url = '/advisory'
               break
           }
           case 'advisory': {
               url = '/advislory'
               break
           }
       }

    }

    return (
        <div className = 'navlink'>
            <div>
                <label id='student' onClick = { e => handleClick(e) }>Student</label>
            </div>
            <div>
                <label id='adviser'onClick = { e => handleClick(e) }>Adviser</label>
            </div>
            <div>
                <label id='advisory'onClick = { e => handleClick(e)} >Advisories</label>
            </div>
        </div>
    )
}

export default NavLink