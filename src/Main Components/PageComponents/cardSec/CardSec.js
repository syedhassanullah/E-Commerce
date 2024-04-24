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
        <div className='all'>
            <h1 className='title1'>New Arrivals</h1>
            <p className='para'>Random text If none of the above steps resolve the issue, there may be a <br/>hardware problem with either your computer or the LCD monitor, and</p>
        <div className='btsec'>
        <button className='blackbt1'>Men's Fasion</button>
        <button className='blackbt1'>Women's Fasion</button>
        <button className='blackbt1'>Women Accessories</button>
        <button className='blackbt1'>Man Accessories</button>
        <button className='blackbt1'>Discount Deals</button>
        </div>
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
                    return null;
                    })}

            </div>
            <button className='blackbt'>view more</button>
            </div>
        </>
    )
}

export default CardSec