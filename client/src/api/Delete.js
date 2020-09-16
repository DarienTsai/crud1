// Delete a task
module.exports = async function(data){

  let settings = {
    "method": 'DELETE',
    "mode": "cors",
    "headers": {
      "Content-type": "application/json"
    },
    "body": JSON.stringify({id: data})
  }

  return await fetch('http://localhost:5000/', settings)
              .then(res => res.json())
              .then(data => {return data.payload});

}