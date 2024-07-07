function caretSideBar()
{
    const wrapperCheck=document.getElementById("wrapi");
    wrapperCheck.style.display="block";
    document.getElementById("carati").style.display="none";
    // window.open('/Learning Topics/1. align-content.html','_blank');
    
}

function makeHeader()
{
    document.getElementById("hamBurgerButton").style.display="none";
    document.getElementById("headerList").style.display="block";
    const head=document.getElementById("headerAll");
    head.style.display="flex";

    const custom_style={
    display: flex;
    width: 100%;
    background-color: rgb(79, 79, 79);
    flex-directon:column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    border-bottom: 2px solid rgb(46, 46, 46);
    position: relative;
    z-index: 1000;
    }
    
    Object.assign(head.style,custom_style);

}

// header
// {
//     display: flex;
//     height: min(10vw,80px);
//     width: 100%;
//     background-color: rgb(79, 79, 79);
//     justify-content: space-between;
//     align-items: center;
//     font-family: 'Times New Roman', Times, serif;
//     border-bottom: 2px solid rgb(46, 46, 46);
//     position: relative;
//     z-index: 1000;
// }

// const ele=document.getElementById("ele_id");
// const custom_style={
//     display: "block",
//     color: "red"
// }

// //Object.assign():
// Object.assign(ele.style,custom_style);