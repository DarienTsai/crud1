// Get all tasks
module.exports = async function(){

  let settings = {
    "method": "GET",
    "mode": "cors"
  }

  return await fetch('http://localhost:5000/', settings)
              .then(res => res.json())
              .then(data => {return data.payload})

}