import React from "react";
import Products from "./Products";


const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/sm3.jpg" className="card-img" alt="Background"
                 />
                <div class="card-img-overlay">
                    <div className="container">

                    </div>
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">
                    CHECK OUT ALL THE TRENDS
                     </p>
                </div>
            </div>
             <Products />
        </div>
    );
}

export default Home;