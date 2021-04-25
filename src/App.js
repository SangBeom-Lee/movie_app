
function Food (props){
  return <h3>I Love {props.fav}</h3>
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgipopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
