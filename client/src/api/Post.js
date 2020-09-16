// Create a new task
module.exports = async function(task){

  let settings = {
    "method": "POST",
    "mode": "cors",
    "headers": {
      "Content-type": "application/json"
    },
    "body": JSON.stringify(task)
  }

  return await fetch('http://localhost:5000/', settings)
  .then(res => res.json())
  .then(data => {return data.payload});

}