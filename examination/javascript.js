
// var divinput = document.createElement("div");
// divinput.setAttribute("class", "d-flex justify-content-center");
// divinput.setAttribute("class", "input-group input-group-sm mb-3");

// var divinput2 = document.createElement("div");
// divinput2.setAttribute("class", "input-group-prepend");

// var divinput3 = document.createElement("input");
// divinput3.setAttribute("class", "input-group-text");
// divinput3.innerText = "smal";

// document.body.appendChild(divinput);
// divinput.appendChild(divinput2);
// divinput.appendChild(divinput3);


//let väder = [];


function b(){
    let location1 = document.getElementById("location").value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location1}&units=metric&appid=39df756d47756ffabdaa67dc074b39a2`)
        .then(res => res.json())
        .then(json => {
            console.log(json)    
        

        a(json, location1)

    })
}

function a(dembo, dembo2 ){
   
    console.log(dembo2)
    console.log(dembo + " blgiki")
    console.log(dembo.main.temp);
    console.log(dembo.weather[0].description);
    console.log(dembo.weather[0].icon);   

  
    var divkort = document.createElement("div"); 
    divkort.setAttribute("class", "card");
    divkort.setAttribute("style", "width:18rem");
    
    var bild = document.createElement("img");
    bild.src = "http://openweathermap.org/img/wn/"+ dembo.weather[0].icon+"@2x.png";
    bild.setAttribute("class", "card-img-top");

    var divkort2 = document.createElement("div");
    divkort2.setAttribute("class", "card-body");

    var kortinfo2title = document.createElement("h5");
    kortinfo2title.setAttribute("class", "card-title");
    kortinfo2title.innerText= "" + dembo2;

    var kortinfotemp = document.createElement("h2");
    kortinfotemp.setAttribute("class", "card-text");

    var kortinfo2paragraph = document.createElement("p");
    kortinfo2paragraph.setAttribute("class", "card-text");
    kortinfo2paragraph.innerText="It is " + dembo.weather[0].description + " in "  +  dembo2;

    var kortinfo3paragraph = document.createElement("p");
    kortinfo3paragraph.setAttribute("class", "card-text");
    kortinfo3paragraph.innerText="this is the temp " + dembo.main.temp;

    var kortinfo2button = document.createElement("a");
    kortinfo2button.setAttribute("class", "btn btn-primary");
    kortinfo2button.innerText="NOOOOOOO";

    divkort.appendChild(bild);
    divkort2.appendChild(kortinfo2title);
    divkort2.appendChild(kortinfo2paragraph);
    divkort2.appendChild(kortinfotemp);
    divkort2.appendChild(kortinfo3paragraph);
    divkort2.appendChild(kortinfo2button);
    divkort.appendChild(divkort2);
    var kort = document.body.appendChild(divkort);
    
    return kort;

}
    


