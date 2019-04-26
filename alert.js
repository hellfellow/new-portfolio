window.onscroll=()=>{
const navbar=document.querySelector('header')
if (window.pageYOffset !== 0){navbar.style.boxShadow = '0 0 10px black';}
else {navbar.style.boxShadow = '';}}


$( ".skill" ).click(function() {
  $( ".skill" ).animate({ "left": "+=50px" }, "slow" );
});




