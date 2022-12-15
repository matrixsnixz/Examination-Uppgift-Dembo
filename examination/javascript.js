//var mainvmeny = document.createElement("div")
//mainvmeny.setAttribute("class", )
//var vmeny = document.createElement("div")
//vmeny.setAttribute("class", )
//var vmenyinput = document.createElement("input")
//var mainvmeny = document.createElement()
  
fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=39df756d47756ffabdaa67dc074b39a2")
    .then(res => res.json())
    .then(data => console.log(data));