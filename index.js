// window.addEventListener("load", (e) => {
//     let btn = document.querySelector("input[type=button]");
//     let input = document.querySelector("input[type=text]");

//     btn.onclick = (e) => {
//         input.value = "hello";
//     }
// })

// jqeury

$((e)=>{
    let btn = $("input[type=button]");
    let input = $("input[type=text]");
    let img = $("img");

    btn.bind("click", (e) => {
        let url = input.val();
        img.attr("src",url);
    
    })
})



