import './App.css';
import PersonCard from "./components/PersonCard";
import InputComponent from './components/InputComponent/InputComponent';

const personData = [{id:"jhhjhj",name:"ramya",description:"ASE"},{id:"hbjhb",name:"ashwathi",description:"ASE"},{id:"hhjbhbk",name:"stafny",description:"ASE"},{id:"hjhjhnjsjkh",name:"nethravati",description:"ASE"}];
function App() {

  return (
   <>
    <div className="App">
      {
        personData.map((person,index) => <PersonCard key={person.id} personName={person.name} description={person.description}/>)
      }
   
      </div>
    <InputComponent placeholderText="enter info"/>
     
    </>
  );
}

export default App;
