import {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import  './forecast.css' 
const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);
    const loadOptions = (inputValue) => {
        return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=2ae1e0a4ba4589fccff57de5884ef703`)
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.map((city) => {
                    return {
                        value: `${city.lat} ${city.lon}`,
                        label: `${city.name}, ${city.country}`,
                    }
                })
            }
        })
        .catch((err) => console.log(err));
    };
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <>
            <label className='title'>Weather</label>
            <AsyncPaginate 
                placeholder = "Search for city"
                debounceTimeout = {600}
                value = {search}
                onChange = {handleOnChange}
                loadOptions={ loadOptions }
            />
        </>
    )
}
export default Search;