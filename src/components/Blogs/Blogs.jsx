
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Timesidebar from '../Timesidebar/Timesidebar';
import './Blogs.css'
import Title from '../Title/Title';

const Blogs = () => {
    
    const [cards,setCards]=useState([])
    const [watchTime,setWatchTime]=useState(0)
   

    const [title, setTitle] = useState([]);
    
    
     

   useEffect(()=>{


        fetch(`data.json`)
        .then(res=>res.json())

        .then(data=>setCards(data))
    },[])
    const theFunction=(card)=>{
       

       const newWatchTime=watchTime+card;
      setWatchTime(newWatchTime)
       
     
    }


    const functionclick=(titles)=>{
        

        setTitle([...title,titles])

      

        
    }
            
        
        
           
           
        
     
    
    


    return (
        <div className='blogs-container bg-slate-50'>
        <div className='blog-container'>
           
            {

        cards.map(card=><Blog card={card} theFunction={theFunction} functionclick={functionclick}></Blog>)
   } 

        </div>
        <div className='site-container border'>
        <Timesidebar watchTime={watchTime}></Timesidebar>
        <Title title={title}></Title>
       

        </div>

    </div>
    );
};

export default Blogs;


