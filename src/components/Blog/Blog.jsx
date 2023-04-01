
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props.card.id)
  
    

    const theFunction=props.theFunction;
    const functionclick=props.functionclick;
    return (
        <div>

                <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={props?.card?.image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body ">
                        <h2 className="card-title font-bold text-2xl">{props?.card?.title}</h2>
                        
                        <div className='flex justify-between'>
                            <div className='flex gap-6'>
                            <img className="w-10 h-10 rounded-full" src={props?.card?.authorimage} alt="" />
                                <div>
                                <h4 className='font-bold'>{props?.card?.authorname}</h4>
                                <h4>{props?.card?.date}</h4>
                                </div>
                            </div>
                            <h3 >{props?.card?.min}min Read
                            <FontAwesomeIcon icon={faBookmark}  onClick={()=>functionclick(props?.card?.title)} />
                            </h3>
                        </div>

                        </div>


                        <button onClick={()=>theFunction(props?.card?.min)}>mark as Read</button>

                    </div>
                    
                </div>

            
        
    );
};

export default Blog;

