import React from 'react';;

const EndpointGet = () => {

    const [id, setId] = React.useState("");
    const [dog, setDog] = React.useState(null);
    
//https://api.thedogapi.com/v1/breeds/

    React.useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds/15')
        .then((r) => r.json())
        .then((json) =>  console.log(json))
    }, []); 

    return (
        <div>
            {/* {dog.map(({name}) => (
                // <img src={foto.image}   />
            ))}   */}
            <p> {dog.name} </p>
        </div>
      );
}

export default EndpointGet