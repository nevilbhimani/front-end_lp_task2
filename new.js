


async function getData(){
    let response = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
       "method": "GET",
       "headers": {
          "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
          "x-rapidapi-key": "891fd2d924msh4c1d3aed6b73804p13eaacjsn5a37fa64c771"
       }
    })
   Data =await response.json();
   console.log(Data) 
   setTable(Data);
   sortTable(Data);
   return Data;   
 }
 var worldData=await getData();
 console.log(worldData);
 
function setTable(Data){
   
    var tab_body=document.getElementById("myTable");
    tab_body.innerHTML="";
    for(var i=0;i<Data.countries_stat.length;i++){
        var row="";
        row+="<tr>";
        row+="<td>" + Data.countries_stat[i].country_name + "</td>";
        row+="<td>" + Data.countries_stat[i].active_cases + "</td>";
        row+="<td>" + Data.countries_stat[i].cases + "</td>";
        row+="<td>" + Data.countries_stat[i].total_recovered + "</td>";
        row+="<td>" + Data.countries_stat[i].deaths + "</td>";
       row+="</tr>";
        tab_body.innerHTML+=row;
    }

}
function sortTable(data){
    let countryHead=document.getElementById("country")
        countryHead.onclick=function(){
        console.log("clicked")
        let countriesArr=data.countries_stat.map(countries1=>countries1.country_name)
        countriesArr.sort((a,b) => a.country_name > b.country_name ? 1 : -1)
        console.log(countriesArr)
    }
}


    
      
