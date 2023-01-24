import React from 'react';

const Main = () => {
    const[img, setImg] = React.useState("");
//https://api.thedogapi.com/v1/breeds
    React.useEffect(() => {
        fetch(`https://api.thedogapi.com/v1/breeds`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setImg(data)
        }).catch((error) => {
            console.log(error)
        })     
    })

  return (
    <div>
        Main
        {img.map((foto) => (
            <p> {foto.name} </p>
        ))}
    </div>
  )
}

export default Main;