function hamburger() {
  var x = document.getElementsByClassName("navs");
  var y=document.getElementsByClassName("hamburger")
  x[0].classList.toggle("mystyle");
  y[0].classList.toggle("mystyle");
}

function shortlink(){
  var link = document.querySelector("#O_link").value;
  if(link==''){
    document.querySelector(".input").classList.add('border');
    document.querySelector(".errormsg").classList.remove('visi');
  }
  else{
    document.querySelector(".input").classList.remove('border');
    document.querySelector(".errormsg").classList.add('visi');
  }
}

var buttons = document.querySelectorAll(".copied");
var old=0;
for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",function(){
    var shortlink = document.getElementsByClassName("shortLink")[i].innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value=shortlink;
    elem.select();
    elem.setSelectionRange(0,99999);
    document.execCommand("copy");
    document.body.removeChild(elem);
    buttons[old].classList.remove("darkblue");
    buttons[old].innerHTML="Copy";
    old=i;
    buttons[i].classList.add("darkblue");
    buttons[i].innerHTML="Copied!";
  })
}

function enable(txt){
  var shortenButton = document.getElementById("shorten_button");
  if(txt.value!=""){
    shortenButton.disabled=false;
  }else{
    shortenButton.disabled=true;
  }
}
