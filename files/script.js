function gotoweb(a){
    window.location = "https://www." + a;
}

function myFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName('li');
    card_name = document.getElementsByClassName("card-title")
    card = document.getElementsByClassName("card")
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < card_name.length; i++) {
        a = card_name[i]
        txtValue = a.textContent || a.innerText;
        if (txtValue.replace("&","").toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}