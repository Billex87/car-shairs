import { useState } from 'react';

const Vehicle = (props) => {
    const [info, setinfo] = useState(false);
    const showInfo = () => setinfo(!info);
    const booking = () => alert("Hire Me To Rent :)");

    return (
        <div key={props.vehicle.Model_ID}>
            <div className="vehicleContainer">
                <li>{props.vehicle.Model_Name}</li>
                <button className="info" onClick={showInfo}><span>i</span>nfo</button>
                <div>
                    <button className="book" onClick={booking}>Book</button>
                </div>
            </div>
            <div className="vehicleInfo">
                {info ?
                    (<a href="https://www.billymckinnon.com" target="_blank" rel="noreferrer" >F<span>i</span>nd Out Here 😜</a>)
                    :
                    (<></>)
                }
            </div>
        </div >
    );
};

export default Vehicle;
