function makeWrapeer()
{
    const wrap=document.getElementById("sideBar");
    wrap.style.display="block";

    const container=document.getElementById("container");

    // container.style.backgroundColor="red";
    container.style.gridTemplateColumns="auto  repeat(11,1fr)"
    container.style.gridTemplateAreas=
    `
    "h h h h h h h h h h h h"
    "s c c c c c c c c c c c"
    "s c c c c c c c c c c c"
    `;

    // const links = document.querySelectorAll('.wrapper a');
    // links.forEach(link => {
    //   link.style.fontSize = '2vw';
    //   link.style.color = '#ECF0F1';
    //   link.style.textDecoration = 'none';
    // });
}