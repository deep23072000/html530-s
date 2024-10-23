function g()
{
    let y = window.scrollY;
    console.log(y)
    // alert(y)
    if(y>200){
        document.querySelector('body').style.backgroundColor = "black"
    }
}