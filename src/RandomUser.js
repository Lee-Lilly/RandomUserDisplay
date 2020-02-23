import React from 'react';

export default function RandomUser() {

    //initialize the person name and image link as empty string.
    const [name, setName] = React.useState({ firstName: '', lastName: '' });
    const [image, setImg] = React.useState('');

    const GetNew = (event) => {// Handle response
        //fetch data from web API
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(resData => { //look into the json file
                console.log(resData.results);
                //get name object
                console.log(resData.results[0]["name"]);
                let personName = resData.results[0]["name"];
                //state update of names
                setName({ firstName: personName["first"], lastName: personName["last"] });
                //get image link
                console.log(resData.results[0]["picture"]);
                let picture = resData.results[0]["picture"];
                setImg(picture.large);
            })
            .catch(err => console.error(err));
    }
   
    return (
        <div className="container"> 
            <h3>{name.firstName} {name.lastName}</h3>
            <p><img src={image} alt=""/></p>
            <button className="btn-success" onClick={GetNew}>Get New</button>     
        </div>
    );
}    