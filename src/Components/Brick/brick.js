import React from 'react';

import './brick.css';


const brick =  (props) => {return(
            <div className="brick">
                {props.name}
            </div>
        );
}

export default brick;