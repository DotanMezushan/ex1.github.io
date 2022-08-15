function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toggleChildSun1(){
  const childeRef =document.getElementsByClassName("sun1");
  
  if(childeRef[0].classList.contains("hide")){
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.remove("hide");
      childeRef[i].style.display = "block";
    }
  }else{
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.add("hide");
      childeRef[i].style.display = "none";

    }
  }
}

function toggleChildSun2(){
  const childeRef =document.getElementsByClassName("sun2");
  if(childeRef[0].classList.contains("hide")){
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.remove("hide");
      childeRef[i].style.display = "block";
    }
  }else{
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.add("hide");
      childeRef[i].style.display = "none";

    }
  }
}

function toggleChildSun3(){
  const childeRef =document.getElementsByClassName("sun3");
  if(childeRef[0].classList.contains("hide")){
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.remove("hide");
      childeRef[i].style.display = "block";
    }
  }else{
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.add("hide");
      childeRef[i].style.display = "none";

    }
  }
}

function toggleChildSun4(){
  const childeRef =document.getElementsByClassName("sun4");
  if(childeRef[0].classList.contains("hide")){
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.remove("hide");
      childeRef[i].style.display = "block";
    }
  }else{
    for(let i=0; i<childeRef.length ; i++) {
      childeRef[i].classList.add("hide");
      childeRef[i].style.display = "none";

    }
  }
}


