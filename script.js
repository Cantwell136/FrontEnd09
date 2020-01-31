let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200){
    let myObj = JSON.parse(this.responseText);
    document.getElementById("nameAge").innerHTML = myObj.name + myObj.birthday;
  };
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function bBio(){
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        let myObj = JSON.parse(this.responseText);
        document.getElementById("bio").innerHTML = myObj.X;
      };
    };
    newRequest.open("GET", "einstein.json", true);
    newRequest.send();
}
