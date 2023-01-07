import React, {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';

const Search1 =  () => {
    console.log("rendering");
       const [search,setSearch] = useState("");
       const [searchedData,setSearchedData] = useState([]);

       const searchDB = async (searchVal) => {
          const baseUrl = "https://peacioapi.com:3000/searchDB/"+searchVal; 
          let res = await axios.get(baseUrl);
	       console.log("res");
	       console.log(res.data.data);
	       setSearchedData(res.data.data);
   	  return res;
       }

//	let res = await searchDB(props.query);
  //      console.log(res.data);
	return  ( 
	<div>
	  <div>
	    <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={()=>searchDB(search)} >Search </button>
          </div>
		{searchedData.length > 0 && (
                    <div>
                        {searchedData.map((value, key) => {
				return (
                                 <p>    {value.id} {value.price} </p>
				);
			})}

	    </div>
		)}
	</div>
	)
}


export default Search1;


