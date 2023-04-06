var header = document.getElementById("header")
var navigation_header = document.getElementById("navigation_header")
var content = document.getElementById('content')
var showSidebar = false

function toogleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar){
        navigation_header.style.marginLeft = '-10vw'
        navigation_header.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)'
    }
    else{
        navigation_header.style.marginLeft = '-100vw'
        navigation_header.style.animationName = ''
        content.style.filter = ''
         
    }
}

function closedSidebar(){
    if(showSidebar)
    {
        toogleSidebar()
    }
}

window.addEventListener('resize', function(even){
    if(window.innerWidth > 768 && showSidebar){
        toogleSidebar()
    }
})