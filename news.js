let subject;
let page = 0;

function Choose(){
  page = 0;//page reset
  subject = document.getElementById("Topic").value;//gets subject value
  if(subject == "Default"){//if statements to find which type of news to display
    DefaultMode();
  }else if(subject == "Sports"){
    Sports(page);
  }else if (subject == "Technology") {
    Technology(page);
  }else if(subject == "Entertainment"){
    Entertainment(page);
  }else{//If subject is, somehow, anything else, i get an error statement in the console
    console.log("Error");
  }
}

function SwitchForward(){
  page++;//page increases by 1
  if(subject == "Default"){//does same thing as lines 7 through 17
    DefaultMode();
  }else if(subject == "Sports"){
    Sports(page);
  }else if (subject == "Technology") {
    Technology(page);
  }else if(subject == "Entertainment"){
    Entertainment(page);
  }else{
    console.log("Error");
  }
}

function SwitchBack(){
  page--;//page decreases by 1
  if(subject == "Default"){
    DefaultMode();
  }else if(subject == "Sports"){
    Sports(page);
  }else if (subject == "Technology") {
    Technology(page);
  }else if(subject == "Entertainment"){
    Entertainment(page);
  }else{
    console.log("Error");
  }
}

function checkNull(info){//function to check if there are any null values in commonly null data
  if(info == null){
    return "Unknown"
  }
  else{
    return info
  }
}


function DefaultMode() {//Default mode gives a message with basic directions
  document.getElementById("articles").innerHTML = "<h3>You accidentally, or maybe purposely, chose default. To get valid results, make sure to choose one of the defined 3 options: Sports, Entertainment, or Technology</h3>";
}

function Sports(p){
  fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=78b9d599c4f94f8fa3afb1a5458928d6&pageSize=100',{headers:new Headers({"X-Requested-With":"NewsorSum"})})//gets data from api about sports
    .then(m => m.json())
      .then(response =>{
        document.getElementById("articles").innerHTML = "";//clears any previous data that mightve been displayed
        if(response.totalResults - (20*p)<20){//if we have enough data to make a full page...
          for(let i = 20*p; i<response.totalResults; i++){//for loop that displays 20 news articles in the media comment bootstrap format
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='No Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+checkNull(response.articles[i].author)+"</i></small></h4><p>"+checkNull(response.articles[i].description)+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        } else{
          for(let i = 20*p; i<20*(p+1); i++){//displays all remaining data if less than 20
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='No Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+checkNull(response.articles[i].author)+"</i></small></h4><p>"+checkNull(response.articles[i].description)+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        }
        pageShow = p+1
        document.getElementById("articles").innerHTML += "<div class='row'>"//next few if statements create buttons that allow users to change pages
        if(p>0 && p<(response.totalResults/20)-1){//if between the first and the last page
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchBack()'>Previous Page</a></div></div><div class='column'><h3>Page "+pageShow+"</h3></div><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchForward()'>Next Page</a></div></div></div>";
        }else if(p>0){//if at the last page
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchBack()'>Previous Page</a></div></div><div class='column'><h3>Page "+pageShow+"</h3></div></div>";
        }else if(p<(response.totalResults/20)-1){//if at first page
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><h3>Page "+pageShow+"</h3></div><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchForward()'>Next Page</a></div></div></div>";
        }else{//if there is only one page total
          document.getElementById("articles").innerHTML +="<div class='row'><div class='column'><h3>Page "+pageShow+"</h3></div>";
        }
      })
}

function Technology(p) {
  fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=78b9d599c4f94f8fa3afb1a5458928d6&pageSize=100',{headers:new Headers({"X-Requested-With":"NewsorSum"})})
    .then(m => m.json())
      .then(response =>{
        document.getElementById("articles").innerHTML = "";
        if(response.totalResults - (20*p)<20){
          for(let i = 20*p; i<response.totalResults; i++){
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='No Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+checkNull(response.articles[i].author)+"</i></small></h4><p>"+checkNull(response.articles[i].description)+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        } else{
          for(let i = 20*p; i<20*(p+1); i++){
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='No Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+checkNull(response.articles[i].author)+"</i></small></h4><p>"+checkNull(response.articles[i].description)+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        }
        pageShow = p+1
        document.getElementById("articles").innerHTML += "<div class='row'>"
        if(p>0 && p<(response.totalResults/20)-1){
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchBack()'>Previous Page</a></div></div><div class='column'><h3>Page "+pageShow+"</h3></div><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchForward()'>Next Page</a></div></div></div>";
        }else if(p>0){
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchBack()'>Previous Page</a></div></div><div class='column'><h3>Page "+pageShow+"</h3></div></div>";
        }else if(p<(response.totalResults/20)-1){
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><h3>Page "+pageShow+"</h3></div><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchForward()'>Next Page</a></div></div></div>";
        }else{
          document.getElementById("articles").innerHTML +="<div class='row'><div class='column'><h3>Page "+pageShow+"</h3></div>";
        }
      })
}

function Entertainment(p){
  fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=78b9d599c4f94f8fa3afb1a5458928d6&pageSize=100',{headers:new Headers({"X-Requested-With":"NewsorSum"})})
    .then(m => m.json())
      .then(response =>{
        document.getElementById("articles").innerHTML = "";
        if(response.totalResults - (20*p)<20){
          for(let i = 20*p; i<response.totalResults; i++){
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='No Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+checkNull(response.articles[i].author)+"</i></small></h4><p>"+checkNull(response.articles[i].description)+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        } else{
          for(let i = 20*p; i<20*(p+1); i++){
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='No Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+checkNull(response.articles[i].author)+"</i></small></h4><p>"+checkNull(response.articles[i].description)+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        }
        pageShow = p+1
        document.getElementById("articles").innerHTML += "<div class='row'>"
        if(p>0 && p<(response.totalResults/20)-1){
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchBack()'>Previous Page</a></div></div><div class='column'><h3>Page "+pageShow+"</h3></div><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchForward()'>Next Page</a></div></div></div>";
        }else if(p>0){
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchBack()'>Previous Page</a></div></div><div class='column'><h3>Page "+pageShow+"</h3></div></div>";
        }else if(p<(response.totalResults/20)-1){
          document.getElementById("articles").innerHTML += "<div class='row'><div class='column'><h3>Page "+pageShow+"</h3></div><div class='column'><div><a class='btn btn-info' role='button' onclick='SwitchForward()'>Next Page</a></div></div></div>";
        }else{
          document.getElementById("articles").innerHTML +="<div class='row'><div class='column'><h3>Page "+pageShow+"</h3></div>";
        }
      })
}
