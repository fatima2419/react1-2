import logo from './logo.svg';
import './App.css';

function Name(){
  console.log("hello from componets")
  return(<div className='hehe'>
    <img src={logo} className='logo'/>
    <h1>hii im fatima</h1>
    </div>
  );
}
function About(){
return(
  <div className='he'>
  <h3>about me</h3>
<p>lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
</div>
);
}
let c=0;
function Count(){
c++;
console.log(`btton is clicked${c}times`)
return(
<button onClick={Count}>
                Click Me
            </button>);
}
function App() {
  console.log("hii from main page")
  return (
    <>
    <Name/>
    <div className="App">
    <img src={logo} className='logo'/>
   <h1>my second name muhammed</h1>
    </div>
    <About/>
    <Count/>
    </>
  );
}

export default App;
