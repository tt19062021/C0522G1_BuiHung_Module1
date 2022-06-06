var intro="hello word"
document.getElementById("intro").innerHTML=intro;

<script> // bat ham tren //
var sectionElement= document.getElementById("mySelect");
sectionElement.addEventListener("change",changeFunction);
function changeFunction() {
    var selectvalue=document.getElementById("mySelect").value;
    alert(selectvalue)
}
</script>