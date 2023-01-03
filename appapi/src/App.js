import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import useSWR from 'swr';

 const  fetcher = (...args) => fetch(...args).then((resp)=>resp.json());

function App() {

	const [gameTitle, setGameTitle] = useState('');
	const [searchGames, setSearchGames] = useState([]);
	const [gameDeals, setGameDeals] = useState([]);
const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3';
//	const data=null;
//	console.log("rendering");
	const {data, error} = useSWR(url,fetcher); 

	const searchGame = () => {
           fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
		   .then((resp) => resp.json())
		   .then((data) => { 
			   console.log(data);
                        setSearchGames(data);
		   })
        
	}

        //   fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3`)
	//	   .then((resp) => resp.json())
	//	   .then((data) => { 
	//		   console.log(data);
//			   setGameDeals(data)
//	//	   });
//	useEffect (() => {
  //         fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3`)
//		   .then((resp) => resp.json())
//		   .then((data) => { 
//			   console.log(data);
//			   setGameDeals(data)
//		   });
//	}, [])
        

  return (
	  <>
    <div className="App">
    <h1>Test Api</h1>
	  <input type="text" placeholder="search" onChange={(e)=>{setGameTitle(e.target.value)}}/>
	  <button onClick={searchGame}>Search</button>
<div>
   {searchGames.map((game, key) => {
        return (<div><div>{game.external}</div><div>
                       <img src={game.thumb} />

		   </div><div>{game.cheapest}</div>
		   </div>)
   }
   )}

	  </div>


	  </div>
	  <div>
<h1>Results</h1>
	  </div>

<div>
   {data && data.map((game, key) => {
        return (<div><div>{game.title}</div><div>
                       <img src={game.thumb} />

		   </div><div>{game.salePrice}</div>
		   </div>)
   }
   )}

	  </div>

	  </>
  );
}

export default App;
