import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';


function App() {

	const [image, setImage]=useState(false);

	const [firstName, setFirstName]=useState("");
	const [lastName, setLastName]=useState("");

	const [manName, setManName] = useState("");
	const [partNumber, setPartNumber] = useState("");
	const [manPartNumber, setManPartNumber] = useState("");
	const [partOption, setPartOption] = useState("");
	const [partDesc, setPartDesc] = useState("");
	const [partShortDesc, setPartShortDesc] = useState("");
	const [partImgUrl, setPartImgUrl] = useState("");
	const [partTechImgUrl, setPartTechImgUrl] = useState("");
	const [partSalePrice, setPartSalePrice] = useState("");
	const [partManPrice, setPartManPrice] = useState("");
	const [currency, setCurrency] = useState("");
	const [merchantId, setMerchantId] = useState("");
	const [merchantName, setMerchantName] = useState("");
	const [deliveryCharge, setDeliveryCharge] = useState("");
	const {isLoading, error, data, isFetching, refetch} = useQuery('dogs',
		() => axios ('https://random.dog/woof.json'),
		{
			enabled: false,
		}
		
		);

const Button = () => {
return	  <button onClick={refetch}>Get </button>
}

const PostData = async  (part) => {
	console.log("part");
	console.log(part);
//	let x = {keyword: user.firstName};
	const response = await axios.post("https://peacioapi.com:3000/addPartAPI", part);
//	console.log(x);
//	const response = await fetch("https://peacioapi.com:3000/getDBData", {
  //         method: 'POST',
//	   body: x,
//	headers: {
  //         'Content-type': 'application/json; charset-UTF-8'
//	}
//	})
	return response;


}

const {mutate,  isError} = useMutation(PostData, {
	onSuccess: (successData) => {
		console.log("post was done");

           console.log(successData);
	}
})
const ImageDisplay = () => {
return ( data ? <img src={data.data.url}/> : <p></p>);
}
 console.log("render");
 console.log(error);
 console.log(data);
	if (error) return <h1>{error.message}</h1>
	if (isLoading) return <h1>Loading</h1>
		//console.log(data);




  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p><div>
  <Button />
	  <button onClick={refetch}>Get </button>
         </div>
	  Enter Part Data - partTechImgUrlmanPartNumber
	  <div>
            <label>Man Name</label>
	    <input type="text" 
	       placeholder="Man Name  " 
	       value={manName} 
	       onChange={(e)=>setManName(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Part Number</label>
	    <input type="text" 
	       placeholder="Part Number  " 
	       value={partNumber} 
	       onChange={(e)=>setPartNumber(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Man Part Number</label>
	    <input type="text" 
	       placeholder="Man Part Number " 
	       value={manPartNumber} 
	       onChange={(e)=>setManPartNumber(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Man Part Option</label>
	    <input type="text" 
	       placeholder="Part Option " 
	       value={partOption} 
	       onChange={(e)=>setPartOption(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Part Desc</label>
	    <input type="text" 
	       placeholder="Part Desc " 
	       value={partDesc} 
	       onChange={(e)=>setPartDesc(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Part Short Desc</label>
	    <input type="text" 
	       placeholder="Part Short Desc " 
	       value={partShortDesc} 
	       onChange={(e)=>setPartShortDesc(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Part Img Url</label>
	    <input type="text" 
	       placeholder="Part Img Url " 
	       value={partImgUrl} 
	       onChange={(e)=>setPartImgUrl(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Part Tech Img Url</label>
	    <input type="text" 
	       placeholder="Par Tech Img Url " 
	       value={partTechImgUrl} 
	       onChange={(e)=>setPartTechImgUrl(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Part Sale Price</label>
	    <input type="text" 
	       placeholder="Part SalePrice " 
	       value={partSalePrice} 
	       onChange={(e)=>setPartSalePrice(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Part Man Price</label>
	    <input type="text" 
	       placeholder="Part ManPrice " 
	       value={partManPrice} 
	       onChange={(e)=>setPartManPrice(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Currency</label>
	    <input type="text" 
	       placeholder="Currency " 
	       value={currency} 
	       onChange={(e)=>setCurrency(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Merchant ID</label>
	    <input type="text" 
	       placeholder="Merchant Id " 
	       value={merchantId} 
	       onChange={(e)=>setMerchantId(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Merchant Name</label>
	    <input type="text" 
	       placeholder="Merchant Name " 
	       value={merchantName} 
	       onChange={(e)=>setMerchantName(e.target.value)} 
	    />
	  </div>
	  <div>
            <label>Delivery Charge</label>
	    <input type="text" 
	       placeholder="Delivery Charge " 
	       value={deliveryCharge} 
	       onChange={(e)=>setDeliveryCharge(e.target.value)} 
	    />
	  </div>
	  <div>
           <button onClick={()=>mutate({
		   manName:manName, 
		   partNumber: partNumber,
		   manPartNumber: manPartNumber,
		   partDesc: partDesc,
		   partOption: partOption,
		   partShortDesc: partShortDesc,
		   partImgUrl: partImgUrl,
		   partTechImgUrl: partTechImgUrl,
		   partSalePrice: partSalePrice,
		   partManPrice: partManPrice,
		   currency: currency,
		   merchantId: merchantId,
		   merchantName: merchantName,
		   deliveryCharge: deliveryCharge }

	   )}>Add Part</button>
	  </div>
	  <div>
            <label>First Name </label>{firstName}
	    <input type="text" placeholder="First " value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
	  </div>
	  <div>
            <label>Last Name </label>
	    <input type="text" placeholder="Last " value={lastName} onChange={(e)=>setLastName(e.target.value)} />
	  </div>
	  <div>
           <button onClick={()=>mutate({firstName:firstName, lastName, lastName})}>Post</button>
	  </div>
	  <ImageDisplay />
      </header>
    </div>
  );
}

export default App;
