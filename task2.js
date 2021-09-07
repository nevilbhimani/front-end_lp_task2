// fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
// 		"x-rapidapi-key": "891fd2d924msh4c1d3aed6b73804p13eaacjsn5a37fa64c771"
// 	}
// }).then(response =>  response.json())

// .then(data =>{
//     console.log(data);
//     appendData(data);
// })
// .catch(err => {
// 	console.error(err);
// });

// async function getData(){
//    let response = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
//       "method": "GET",
//       "headers": {
//          "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
//          "x-rapidapi-key": "891fd2d924msh4c1d3aed6b73804p13eaacjsn5a37fa64c771"
//       }
//    })
//    let data=await response.json()
//    return data;
// }
// getData().then((data) => {appendData(data)});

axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
   "method": "GET",
   "headers": {
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
      "x-rapidapi-key": "891fd2d924msh4c1d3aed6b73804p13eaacjsn5a37fa64c771"
   }
}).then(response => {appendData(response.data)})
.catch(err => {console.error(error)});
 function appendData(data) {
    var table = document.getElementById('myTable');
     
     for(var i = 0; i < data.countries_stat.length; i++) {
     var row = `<tr>
     <td>${data.countries_stat[i].country_name}</td>
      <td>${data.countries_stat[i].active_cases}</td>
     <td>${data.countries_stat[i].cases}</td>
      <td>${data.countries_stat[i].total_recovered}</td>
     <td>${data.countries_stat[i].deaths}</td>
       </tr>`
     table.innerHTML  += row    
       }
    }
    

