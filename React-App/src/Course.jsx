function Course({ title, price = "100", theme }) {

    function discount(discount, event) {
        console.log("discount is ", discount, event);
    }

    return (
        <div className="card">
            <div className={`course-banner ${theme}`} role="img" aria-label={`${title} course banner`}>
                <span className="banner-kicker">FULL COURSE</span>
                <span className="banner-title">{title}</span>
            </div>
            <h3>{title}</h3>
            <p>${price}</p>
            <button onClick={(event) => discount(20, event)}>Discount</button>
        </div>
    );
}


export default Course