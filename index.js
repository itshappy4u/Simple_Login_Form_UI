function toggle(){
    var sidenav = document.getElementById("sidenav");
    var section = document.getElementById("section");
    var topnav = document.getElementById("topnav");
    var width = sidenav.style.width;

    if(width == '0px')
    {
        sidenav.style.width = '180px';
        sidenav.style.transition = '0.3s';
        topnav.style.left = '180px';
        topnav.style.width = '100%';
        topnav.style.transition = '0.3s';
        section.style.marginLeft = "180px";
        section.style.width = "100%";
    }      
    else
    {
        sidenav.style.width = '0px';
        sidenav.style.transition = '0.3s';
        topnav.style.left = '0px';
        topnav.style.width = '100%';
        topnav.style.transition = "0.3s";
        section.style.marginLeft = "0px";
        section.style.width = "100%";
        section.style.transition ="0.3s";
    }
}

function table(activeId,inActiveId){
    var active = document.getElementById(activeId);
    var inactive = document.getElementById(inActiveId);
   /* var activeButton = document.getElementById(activeBtn);
    var inActiveButton = documnet.getElementById(inActiveBtn);

    activeButton.style.background = "darkorange";
    activeButton.style.color = "white";
    inActiveButton.style.background = "white";
    inActiveButton.style.color = "black";*/
    active.style.display = "block";
    inactive.style.display = "none";
}