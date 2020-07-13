import React from 'react'; 

const check = (action, permission) => {
    if (action === permission) return true; 

    return false; 
}

const Authorization = props => {
    const { action, permission } = this.props; 

    return check(action, permission) ? props.isAuthorized() : props.isNotAuthorized(); 
}

Authorization.defaultProps = {
    isAuthorized: () => null,
    isNotAuthorized: () => null
}

export default Authorization; 