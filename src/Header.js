import React from 'react';

const Header = function(){
    const headerStyle = {
        textalign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
    };
    
    return(
        <div style={headerStyle}>
          Phone Directory
        </div>
    )
}

export default Header;