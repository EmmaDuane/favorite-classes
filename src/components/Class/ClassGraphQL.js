import './Class.css';
import React, {useState, useEffect} from 'react';

function ClassGraphQL(props){

    const [classInfo, setClassInfo] = useState({});

    const url = "https://api.peterportal.org/graphql";

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id: "${props.name}"){
                        title
                        department
                        description                       
                    }
            }`;
                
                
            const response = await fetch(url, { /* dependency list */
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await response.json(); /* await: must wait until function call complete before next line runs */
            console.log(data);
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name]); /* dependency list: useEffect only called when props.name changes */

    /* conditional rendering */
    let info;
    if(classInfo){
         info = <div className="Information">
            <p id="title">{classInfo.title}</p>
            <p id="department">Department: {classInfo.department}</p>
            <p id="description">{classInfo.description}</p>    
        </div>
    } 
    else if(!classInfo){
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
};

export default ClassGraphQL;