import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='CARD'>
            <div className="card text-bg-dark">
                <img src="/pics/bgg2.jpg" className="card-img" alt="Background" height={"600vh"} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 text-dark "><strong>NEW ARRIVALS</strong></h5>
                    <p className="card-text lead fs-2 text-dark">Check out all the new trends</p>
                    <p className="card-text text-dark"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <Products/>

        </div>
    )
}

export default Home