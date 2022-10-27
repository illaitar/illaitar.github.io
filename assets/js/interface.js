function toggleMenuHandler() {
  var header = document.querySelector('.navbar');
  header.classList.toggle('unfolded');
}

window.addEventListener('load', function () {
  var menuToggleButton = document.querySelector('.navbar > .navbar-header > .menu-toggle-button');
  menuToggleButton.addEventListener('click', toggleMenuHandler);
});

let arrow = document.createElement('button');
arrow.innerHTML = '<i class="fa fa-arrow-up" aria-hidden="true"></i>Top';
arrow.setAttribute('id', 'nav_arrow');
arrow.setAttribute('title', 'Go to the top');
arrow.setAttribute('onclick', 'topFunction()');





let __menu = document.createElement('table');
__menu.setAttribute('id', '__menu');

let __menu_set=false

function __set_menu(hrefs){
  arrow.style.display = "none";
  __menu_set=true
  let str=''
  for (const href of hrefs){
    str+='<tr onclick=\"location.href=\''+href[1]+'\'\"><td>'+href[0]+'</td></tr>'
  }
  __menu.innerHTML=str
  document.body.prepend(__menu)
}


function __set_menu_buttons(hrefs, current, style=null){
buttons=document.getElementById("buttons")
hr=document.createElement('hr');
hr.classList.add('btnsep')
buttons.appendChild(hr)
links=document.createElement('div');
links.classList.add('nav-current')
links.classList.add('subproject-links')
if (style!=null){
  links.style = style
}
for (const href of hrefs){
    button=document.createElement('a');
    if (href[0]==current){
      button.classList.add('current_button')
    }
    button.href=href[1]
    button.classList.add('button')
    button.innerHTML=href[0]
    links.appendChild(button)
}
buttons.appendChild(links)
__set_menu(hrefs)
}


window.onload = function() {
document.body.prepend(arrow)
};


function scrollFunction() {
//console.log(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
//console.log(document.documentElement.scrollTop)
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  if (__menu_set){
    __menu.style.display = "block";
  }
  else {

  }
  arrow.style.display = "block";
} else {
  arrow.style.display = "none";
  __menu.style.display = "none";

}
}

window.onscroll = function() {scrollFunction()};

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}