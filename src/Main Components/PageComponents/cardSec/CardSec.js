import React, { useEffect, useState } from 'react'
import './CardSec.css'
import { Link } from 'react-router-dom';

function CardSec() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }



    return (
        <>


            <div className='cardmain'>

                {
                    posts?.map((value, index) => {
                    if(index < 6){
                        return (
                            <Link to={`/CardDetail/${value.id}`} state={{ title: value.title}} className='cardshop1'>
                            <div key={index} >
                                <div className='cardshop'>
                                    <div className='cimg'></div>
                                    <div className='ctext1'>
                                        <h2>{value.title}</h2>
                                        <div class="rating">⭐️⭐️⭐️⭐️⭐️</div>
                                    </div>
                                    <h5 className='alkaram'>Al Karam</h5>
                                    <h3>(4.1k) Customer Reviews</h3>
                                    <div className='ctext2'>
                                        <h2>$95.50</h2>
                                        <p>Almost Sold Out</p>
                                    </div>
                                </div>
                            </div>
                            </Link>

                        )
                    }
                    
                        
                    
                    })}

            </div>
        </>
    )
}

export default CardSec