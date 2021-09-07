fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "891fd2d924msh4c1d3aed6b73804p13eaacjsn5a37fa64c771"
	}
}).then(response =>  response.json())

.then(data =>{
    console.log(data);
    appendData(data);
})
.catch(err => {
	console.error(err);
});
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

    //    for(var i = 0; i < 2; i++) {
    //     var row = `<tr>
    //     <td>satyam</td>
    //      <td>nevil</td>
    //     <td>jainish</td>
    //      <td>naitik</td>
    //     <td>priyal</td>
    //       </tr>`
      
     table.innerHTML  += row    
       }
    }
    

