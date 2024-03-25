import "./StoreInfoSenor2Taco.css";

function StoreInfo() {

    return (

    <div className="store-info">
    
        <div className="location info">
        <h5 className = "header">Address</h5>
            <p className="address theme">9213 Valley View St</p>
            <p className="address theme">Cyress, CA, 90630</p>
            <p className="address theme">(714) 828-8650</p>
        </div>

        <div className="hours info">
        <h5 className = "header">Hours</h5>
            <p className="hours theme">Mon-Fri: 8AM -8PM</p>
            <p className="hours theme">Sat: 7AM - 8PM</p>
            <p className="hours theme">Sun: 7AM - 5PM</p>
        </div>

        <div className="socials info">
            <h5 className = "header">Socials</h5>
            <div className="social-container">
                <div className="social-pic">
                    <a href="https://www.facebook.com/pages/category/Fast-Food-Restaurant/Senor-Taco-165819833562758/"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                </div>
                <div className="social-pic">
                    <a href="https://www.yelp.com/biz/se%C3%B1or-taco-cypress-2"><i class="fa-brands fa-yelp fa-2xl"></i></a>
                </div>
            </div>
          
        </div>
    
    </div>

    )
}

export default StoreInfo;
