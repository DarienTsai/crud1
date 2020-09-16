// Update a task status
module.exports = async function(id, status){

  let settings = {
    "method": 'PUT',
    "mode": "cors",
    "headers": {
      "Content-type": "application/json"
    },
    "body": JSON.stringify({id: id, status: status})
  }

  return await fetch('http://localhost:5000/', settings)
              .then(res => res.json())
              .then(data => {return data.payload});

}