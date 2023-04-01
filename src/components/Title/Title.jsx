import React from 'react';

const Title = ({title}) => {


   
    return (
        <div className='border bg-slate-50'>
            <h3 className='text-2xl bg-slate-100'>Bookmarked Blogs:{title.length}</h3>

            {title.map((title) => (
        <div className='border p-2'>
            <p className='border-2  border-slate-600 font-bold bg-slate-200 gap-4'>{title}</p></div>
      ))}
            
                
           
        </div>
    );
};

export default Title;