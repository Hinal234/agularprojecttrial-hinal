
    // function loadDoc() {
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function() {
    //       document.getElementById("demo").innerHTML =this.responseText;
    //     }
    //     xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    //     xhttp.send();
    //   }
      
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((apidata)=>{
        console.log(apidata);
        return apidata.json();
    })
    .then((actualdata)=>  {
        console.log(actualdata);
    })

    .catch(error=> {
        console.log(error);
    })
