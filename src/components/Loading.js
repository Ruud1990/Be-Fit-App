import React from 'react';
import {PropagateLoader} from 'react-spinners';

const Loading = () => {
 return (
    <div className="loading-wrapper">
    <PropagateLoader className='loader' />
     </div>
 )
}

export default Loading