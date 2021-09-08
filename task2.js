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
}).then(response => {
   appendData(response.data);
   $('th').click(function sorting (countries_stat) {
      var column = $(this).data('column')
      var order = $(this).data('order')
      console.log("column was clicked",column,order)
      if(order=="desc")
      {  

         $(this).data("order",'asc')
         if(column=="country")
         {
         console.log(response.data.countries_stat)
         response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.country_name > b.country_name ? 1 : -1)
         }
         else if(column=="active_cases")
         {
            
           
            response.data.countries_stat = response.data.countries_stat.sort((a,b) =>{
            if(a.active_cases > b.active_cases) return 1;
            if(a.active_cases < b.active_cases) return -1;
            return 0; } )
          
         }
         else if(column=="total_cases")
         {
            console.log(response.data.countries_stat)
            response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.total_cases > b.total_cases ? 1 : -1)
          
         }
         else if(column=="total_recovered")
         {
            console.log(response.data.countries_stat)
            response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.total_recovered > b.total_recovered ? 1 : -1)
          
         }
         else if(column=="total_deaths")
         {
            console.log(response.data.countries_stat)
            response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.total_deaths > b.total_deaths ? 1 : -1)
          
         }
      }
      else
      {
         $(this).data("order",'desc')
         if(column=="country")
         {
         console.log(response.data.countries_stat)
         response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.country_name < b.country_name ? 1 : -1)
         }
         else if(column=="active_cases")
         {
            console.log(response.data.countries_stat)
            response.data.countries_stat = response.data.countries_stat.sort((a,b) =>  a.active_cases<b.active_cases?1: -1)
          
         }
         else if(column=="total_cases")
         {
            console.log(response.data.countries_stat)
            response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.total_cases < b.total_cases ? 1 : -1)
          
         }
         else if(column=="total_recovered")
         {
            console.log(response.data.countries_stat)
            response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.total_recovered < b.total_recovered ? 1 : -1)
          
         }
         else if(column=="total_deaths")
         {
            console.log(response.data.countries_stat)
            response.data.countries_stat = response.data.countries_stat.sort((a,b) => a.total_deaths < b.total_deaths ? 1 : -1)
          
         }
      }
      appendData(response.data);
   });
})
.catch(error => {console.error(error)});



 function appendData(data) {
    var table = document.getElementById('myTable');
     table.innerHTML="";
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
    
   
