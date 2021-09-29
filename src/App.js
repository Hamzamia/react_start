import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [' Rubel', 'Bapparaz', ' salman Khan', 'Tanmoy', 'kapoor', 'mahbub', 'sani']

  const cinemas = [
    {
      nayok: 'Kuber majhi', nayika: 'kopila'
    },
    { nayok: 'bappa raj', nayika: 'natasha' },
    {
      nayok: 'rajib', nayika: 'kopila'
    }
  ]

  return (
    <div className="App">
      <Friend phone="0177542156" address="b-baria"></Friend>
      <Friend phone="0199542159" address="dhaka"></Friend>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }

      </ul>
      {/* <Cinema nayok="jms bond" nayika='cat w'></Cinema> */}

      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }

      <a href="https://google.com/">google.com</a>
      <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[2]} nayika="cheka"></Person>
      <Person name={nayoks[1]} nayika="aysharia"></Person>

    </div>
  );
}

function Person(props) {
  console.log(props)
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightcoral',
    margin: '10px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name:{props.name}</h1>

      <h3>Hero of: {props.nayika}</h3>  </div>
  );

}

function Cinema(props) {
  return (
    <div className='person'>
      <h3>nayok: {props.nayok}</h3>
      <h4>nayika: {props.nayika}</h4>
    </div>
  )
}
function Friend(props) {
  console.log(props)
  return (
    <div className="person">
      <h3>Phone:{props.phone}</h3>
      <h5>Address:{props.address}</h5>
    </div>
  )
}

export default App;
