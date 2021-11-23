
function inn(){
    document.getElementById("one")
    one.src = "on.jpg"
}


function out(){
    document.getElementById("one")
    one.src = "off.jpg"
}


function nam(){
        var paraColor = document.getElementById("gam")
        var col = prompt("Enter Text Colour")
         gam.style.color = col
         var bg = prompt("enter background colour")
         gam.style.backgroundColor= bg
    }





    function show() {
        document.getElementById("myImg").style.display = "inline"
    }
    
    function big() {
        document.getElementById("myImg").style.width = "600px"
    }
    
    function smal() {
        document.getElementById("myImg").style.width = "300px"
    }
    
    function hide() {
        document.getElementById("myImg").style.display = "none"
    }
    
    function ChangCol() {
        var para1 = prompt("Enter par 1 color")
        var para2 = prompt("Enter par 2 color")
        var para3 = prompt("Enter par 3 color")
        var para4 = prompt("Enter par 4 color")
        
    
        var result = document.getElementsByTagName("p")
        result[0].style.color = (para1)
        result[1].style.color = (para2)
        result[2].style.color = (para3)
        result[3].style.color = (para4)
        
    
    }