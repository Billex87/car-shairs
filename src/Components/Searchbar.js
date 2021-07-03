import { useState } from 'react';
import axios from 'axios';
import Available from "./Available";

const Searchbar = () => {
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedYear, setSelectedYear] = useState("2021");
    const [searchResult, setSearchResult] = useState([]);
    const [showSearch, setShowSearch] = useState(true);
    const [emptyList, setEmptyList] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (selectedMake !== "" && selectedType !== "") {
            axios({
                url: `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${selectedMake}/modelyear/${selectedYear}/vehicleType/${selectedType}?format=json`,
                method: "GET",
                dataResponse: "json",

            }).then((response) => {
                if (response.data.Results.length === 0) {
                    setEmptyList(true);
                    setShowSearch(false);
                } else if (response.data.Results.length > 5) {
                    setSearchResult(response.data.Results.slice(0, 5));
                    setShowSearch(false);
                } else {
                    setSearchResult(response.data.Results);
                    setShowSearch(false);
                }
            });
        } else {
            alert("Please Choose From All Search Paramaters");
        }
    };

    const handleMake = (e) => setSelectedMake(e.target.value);
    const handleType = (e) => setSelectedType(e.target.value);
    const handleYear = (e) => setSelectedYear(e.target.value);

    const toggleSearch = () => setShowSearch(true);

    const toggleList = () => setEmptyList(false);

    const toggle = () => {
        toggleList();
        toggleSearch();
    };

    return (
        <section className="landing">
            {showSearch ?
                (<div className="searchbar">
                    <h3>Let's F<span>i</span>nd A R<span>i</span>de For You</h3>
                    <form>
                        <div className="container">
                            <label htmlFor="make">P<span>i</span>ck Your Veh<span>i</span>cle Make:</label>
                            <select onChange={handleMake} name="make" id="make">
                                <option defaultValue=""></option>
                                <option value="Aston Martin">Aston Martin</option>
                                <option value="BMW">BMW</option>
                                <option value="Bugatti">Bugatti</option>
                                <option value="Cadillac">Cadillac</option>
                                <option value="Chevrolet">Chevrolet</option>
                                <option value="Dodge">Dodge</option>
                                <option value="Ferrari">Ferrari</option>
                                <option value="Ford">Ford</option>
                                <option value="Honda">Honda</option>
                                <option value="Jaguar">Jaguar</option>
                                <option value="Lamborghini">Lamborghini</option>
                                <option value="Maserati">Maserati</option>
                                <option value="Mazda">Mazda</option>
                                <option value="Mercedes-benz">Mercedes Benz</option>
                                <option value="Nissan">Nissan</option>
                                <option value="Rolls Royce">Rolls Royce</option>
                                <option value="Saab">Saab</option>
                                <option value="Saturn">Saturn</option>
                                <option value="Subaru">Subaru</option>
                                <option value="Suzuki">Suzuki</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Toyota">Toyota</option>
                            </select>
                        </div>
                        <div className="container">
                            <label htmlFor="year">P<span>i</span>ck A Year: {selectedYear}</label>
                            <input onChange={handleYear} className="year" type="range" min="1970" max="2021" id="year" defaultValue="2021" />
                        </div>
                        <div className="container">
                            <label htmlFor="type">P<span>i</span>ck Your Veh<span>i</span>cle Type:</label>
                            <select onChange={handleType} name="type" id="type">
                                <option defaultValue=""></option>
                                <option value="Car">Car</option>
                                <option value="Truck">Truck</option>
                                <option value="Motorcycle">Motorcycle</option>
                            </select>
                        </div>
                    </form>
                    <div className="submit">
                        <button type="submit" onClick={submit}>F<span>i</span>nd Veh<span>i</span>cles</button>
                    </div>
                </div>)
                :
                (
                    <div className="availableList">
                        <Available searchResult={searchResult} make={selectedMake} year={selectedYear} type={selectedType} emptyList={emptyList} />
                        <div className="try">
                            <button onClick={toggle}>Try Aga<span>i</span>n</button>
                        </div>
                    </div>
                )}
        </section>
    );
};

export default Searchbar;
