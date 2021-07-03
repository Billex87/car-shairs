import Vehicle from "./Vehicle";


const Available = (props) => {

    const listVehicle = props.searchResult.map((vehicle) => {
        return (
            <Vehicle vehicle={vehicle} />
        );
    });

    return (
        <div>
            {props.emptyList ?
                (<p className="error"> There are no vehicles for this search!</p>)
                :
                (<div>
                    <h3>{props.year} {props.make} {props.type} Models Ava<span>i</span>lable:</h3>
                    <ul className="resultList">
                        {listVehicle}
                    </ul>
                </div>)
            }
        </div>
    );
};
export default Available;