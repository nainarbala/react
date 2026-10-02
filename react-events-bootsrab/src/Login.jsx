import { useState } from "react";

function Login() {


    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [match, setMatch] = useState(true);


    function onCHangePwd1(event) {

        setPwd1(event.target.value);

    }

    function onCHangePwd2(event) {

        setPwd2(event.target.value);

        if (pwd1 == event.target.value) {
            setMatch(true);
        } else {
            setMatch(false);
        }

    }

    return (
        <div>

            <form style={{ width: "50%", margin: "auto" }}>
                <div className="mb-">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={pwd1} onChange={onCHangePwd1} type="password" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">ReEnter-Password</label>
                    <input value={pwd2} onChange={onCHangePwd2} type="password" className="form-control" />
                </div>


                <div className="mb-3 form-check">
                    <input type="checkbox" />
                    <label className="form-check-label">Check me out</label>
                    {!match && <p>Pass isnot matched</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    );
}
export default Login