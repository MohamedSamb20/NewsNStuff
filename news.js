let subject;
let page = 0;

function Choose(){
  page = 0;
  subject = document.getElementById("Topic").value;
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

function SwitchForward(){
  page++;
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

function SwitchBack(){
  page--;
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

function DefaultMode() {
  document.getElementById("articles").innerHTML = "";
}

function Sports(p){
  fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=sports&from=2020-10-15&sortBy=popularity&apiKey=78b9d599c4f94f8fa3afb1a5458928d6&pageSize=100',{headers:new Headers({"X-Requested-With":"NewsorSum"})})
    .then(m => m.json())
      .then(response =>{
        console.log(response.totalResults)
        document.getElementById("articles").innerHTML = "";
        if(response.totalResults - (20*p)<20){
          for(let i = 20*p; i<response.totalResults; i++){
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+response.articles[i].author+"</i></small></h4><p>"+response.articles[i].description+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        } else{
          for(let i = 20*p; i<20*(p+1); i++){
            document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+response.articles[i].author+"</i></small></h4><p>"+response.articles[i].description+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
          }
        }
        document.getElementById("articles").innerHTML += "<div class='row'><div class='col-xl-4'>"
        if(p>0){
          document.getElementById("articles").innerHTML += "<div><a class='btn btn-info' role='button' onclick='SwitchBack()'>Previous Page</a></div>";
        }
        document.getElementById("articles").innerHTML += "</div><div class='col-xl-4'><h2>Page "+(p+1)+"</h2></div><div class='col-xl-4'>";
        if(p<(response.totalResults/20)){
          document.getElementById("articles").innerHTML += "<div><a class='btn btn-info' role='button' onclick='SwitchForward()'>Next Page</a></div>";
        }
        document.getElementById("articles").innerHTML += "</div></div>";
      })
}

function Technology(p) {
  fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=Technology&from=2020-10-15&sortBy=popularity&apiKey=78b9d599c4f94f8fa3afb1a5458928d6',{headers:new Headers({"X-Requested-With":"NewsorSum"})})
    .then(m => m.json())
      .then(response =>{
        document.getElementById("articles").innerHTML = "";
        for(let i = 0; i<response.totalResults; i++){
          document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+response.articles[i].author+"</i></small></h4><p>"+response.articles[i].description+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
        }
      })
}

function Entertainment(p){
  fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=Entertainment&from=2020-10-15&sortBy=popularity&apiKey=78b9d599c4f94f8fa3afb1a5458928d6',{headers:new Headers({"X-Requested-With":"NewsorSum"})})
    .then(m => m.json())
      .then(response =>{
        document.getElementById("articles").innerHTML = "";
        for(let i = 0; i<response.totalResults; i++){
          document.getElementById("articles").innerHTML += "<div class='media border p-3' style='padding: 10px;'><img src='" + response.articles[i].urlToImage+"' alt='Article Photo' class='mr-3 mt-3 Square' style='width:60px;'><div class='media-body'><h4>"+response.articles[i].title+"<small><i> Written on "+response.articles[i].publishedAt+" by "+response.articles[i].author+"</i></small></h4><p>"+response.articles[i].description+"</br><a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></p></div></div>";
        }
      })
}
