import React from 'react';

const Timesidebar = ({watchTime}) => {


  
    return (
        <div>
            <div>
            
          <h3 className='text-2xl text-blue-800 border bg-slate-200'>Spent time on read:{watchTime}min</h3> 
        </div>
          
        </div>
    );
};

export default Timesidebar;