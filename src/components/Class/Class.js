import { useEffect } from 'react';
import './Class.css';
import React, {useState} from 'react';

function Class(props){

    const [classInfo, setClassInfo] = useState({});

    const url = "https://api.peterportal.org/rest/v0/courses/"

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + props.name);
            const data = await response.json(); /* await: must wait until function call complete before next line runs */
            console.log(data);
            setClassInfo(data);
        };
        fetchData();
    }, [props.name]); /* dependency list: useEffect only called when props.name changes */

    /* conditional rendering */
    let info;
    if(classInfo.id){
         info = <div className="Information">
            <p id="title">{classInfo.title}</p>
            <p id="department">Department: {classInfo.department}</p>
            <p id="description">{classInfo.description}</p>
        </div>
    } 
    else if(classInfo.error){
        info = <p>Class Not Found</p>
    }
    else{
        info = <p>Loading...</p>
    }
   

    return(
        <div className="class">
            {props.name}
            <div>
                {info}
            </div>
        </div>
    )
}

export default Class;