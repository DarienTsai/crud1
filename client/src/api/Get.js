// Get all tasks
module.exports = function(task){

  let settings = {
    method: "GET",
    mode: "cors"
  }

  fetch('http://localhost:5000/', settings)
  .then(res => res.json())
  .then(data => console.log(data));

}