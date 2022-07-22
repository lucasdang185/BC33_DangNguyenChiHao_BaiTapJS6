function ex1() {
  var s = 0;
  var n = 0;
  while (s < 10000) {
    n++;
    s += n;
  }
  document.getElementById("rs1").innerHTML = n;
}

function ex2() {
  var t = 1;
  var s = 0;
  var x = +document.getElementById("txtX").value;
  var n = +document.getElementById("txtN").value;
  for (var i = 0; i < n; i++) {
    t = t * x;
    s = s + t;
  }
  document.getElementById("rs2").innerHTML = s;
}

function ex3(){
    var n = +document.getElementById("txtN1").value;
    var m=1;
    for(var i=1; i<=n; i++){
        m *=i;
    }
    document.getElementById("rs3").innerHTML=m;

}
function ex4(){
    var divs = document.getElementsByClassName("div");
    for (var i = 0; i < divs.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0){
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
}
