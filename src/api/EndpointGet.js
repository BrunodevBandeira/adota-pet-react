import React from 'react';

const EndpointGet = () => {

    const [id, setId] = React.useState("");
    const [dog, setDog] = React.useState([]);
    
// const url = "https://api.thedogapi.com/v1/breeds/15";

    React.useEffect(() => {
        const fetchDogData = async () => {
            try {
              const res = await fetch("https://api.thedogapi.com/v1/breeds")
              const data = await res.json()
              setDog(data)
            } catch (error) {
              console.error(error)
            }
          }
    
          fetchDogData();
  }, [])

  return (
    <>

      <section >
        {dog.map((item) => (
          <div key={item.id}>
            <article>
              <h1 >
                {item.name}
              </h1>
              <p>
                <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt={item.name} title={item.name} />
              </p>
            </article>
          </div>
        ))}
      </section>
    </>
  )
}

export default EndpointGet;