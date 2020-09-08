// Create a new task
module.exports = function(task){

  let settings = {
    "method": "POST",
    "mode": "cors",
    "headers": {
      "Content-type": "application/json"
    },
    "body": JSON.stringify(task)
  }

  fetch('http://localhost:5000/', settings)
  .then(res => res.json())
  .then(data => console.log(data));

}