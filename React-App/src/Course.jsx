import { useEffect, useState } from "react";

function Course({ id, title, price = "100", theme, onDelete }) {

    const [purchased, setPurchased] = useState(false);
    const [discount, setDiscount] = useState(price);

    useEffect(() => {
        console.log("Course use Effect");
    }, [purchased]);


    function pruchasing(discount) {
        console.log(purchased);
        console.log("discount is ", discount);
        setPurchased(true);
        console.log(purchased);
        console.log(purchased);

        console.log(purchased);


    }

    function discountPrice(amt) {
        setDiscount(price - amt);
    }





    return (
        <div className="card">
            <div className={`course-banner ${theme}`} role="img" aria-label={`${title} course banner`}>
                <span className="banner-kicker">FULL COURSE</span>
                <span className="banner-title">{title}</span>
            </div>
            <h3>{title}</h3>
            <p>${discount}</p>
            <p>Hi {purchased ? 'already purchased' : 'please purchase'}</p>
            <button onClick={(event) => pruchasing(20, event)}>Purchages</button>

            <button onClick={() => discountPrice(10)}>Discount</button>
            <button onClick={() => onDelete(id)}>Deleted</button>

        </div>
    );
}


export default Course