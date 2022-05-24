import React, { useState } from 'react'; /* MUST BE LOWERCASE 'react' */
import './Home.css';
import Class from '../Class/Class.js'
import ClassGraphQL from '../Class/ClassGraphQL.js'

function Home(props){
    document.title = "Add Class";
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [favoriteClasses, setClasses] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();  //default will send POST request and throw change of page
        let temp = value.toUpperCase();
            temp = temp.replace(' ','');
        if(!favoriteClasses.includes(temp)){    
            setClasses(favoriteClasses.concat(temp));
            setValue('');   //clear input
        }
    };
    console.log(favoriteClasses);

    return (
        <div className="mainSection">
            <h1>Welcome</h1>
             <form onSubmit={handleSubmit}>
                <label>Add Favorite Class: </label>
                 <input type="text" value={value} className="enterClass" onChange={handleChange}/>
                <button type="submit">Add</button> 
            </form>
           
            <div className="favClass">
                {favoriteClasses.map((favClass) => 
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
            <div className="favClass">
                {favoriteClasses.map((favClass) => 
                    <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>

        </div>
    )
}

export default Home;  //allows other files to access Home