function Button(props) {

return (<button onClick={()=>props.onClickFunction(props.inc)}>+{props.inc}</button>)
}

function Home(props) {
  return (
    <div>Home {props.message}</div>
  );
 
}

function App() {
  const [counter, setCounter] = useState(0);
  const incCounter = (inc) => setCounter(counter+inc)
  return (
   <div>
      <Home message={counter} />
      <Button onClickFunction={incCounter} inc={5}/>
      </div>
  );
 
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);

// *** The React 18 way:
// root.render(
//   <Button />,
// );

	

