import { useState } from "react";

function Course({ title, price = "100", theme }) {

    const [purchased, setPurchased] = useState(true)

    function discount(discount) {
        console.log(purchased);
        console.log("discount is ", discount);
        setPurchased(false);
        console.log(purchased);

    }





    return (
        <div className="card">
            <div className={`course-banner ${theme}`} role="img" aria-label={`${title} course banner`}>
                <span className="banner-kicker">FULL COURSE</span>
                <span className="banner-title">{title}</span>
            </div>
            <h3>{title}</h3>
            <p>${price}</p>
            <p>Hi {purchased ? 'already purchased' : 'please purchase'}</p>
            <button onClick={(event) => discount(20, event)}>Discount</button>
        </div>
    );
}


export default Course