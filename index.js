// window.addEventListener("load", (e) => {
//     let btn = document.querySelector("input[type=button]");
//     let input = document.querySelector("input[type=text]");

//     btn.onclick = (e) => {
//         input.value = "hello";
//     }
// })

// jqeury


$((e) => {
    // // jQuery 객체의 순회
    // $("#s2 input").eq(0).val("버튼1");
    // $("#s2 input").eq(1).val("버튼2");
    // // DOM으로 꺼내기 = > get
    // $("#s2 input").get(2).value = "버튼3";

    // // each = > DOM으로 꺼내짐
    // $("#s2 input").each(function(i) {
    //     //this.value = "버튼"+(i+1);
    //     $(this).val("버튼"+(i+1));
    // })

    //   // each = > DOM으로 꺼내짐
    //   // 다음 내용은 this를 사용할 수 없어서 동작X
    // //   $("#s2 input").each((i)=>{
    // //     //this.value = "버튼"+(i+1);
    // //     $(this).val("버튼"+(i+1));
    // // })

    // // 마지막 번째 항목
    // $("#s2 input").last().val("마지막 버튼");

    // // 세번째 버튼
    // $("#s2 input").filter(":nth-child(3)").val("찾았다");

    // 노드 트리에서의 순회
    // $("#s2 input").eq(1).next().prevAll().val("찾았다");

    // CSS와 Effect

    // $("#s2 input").css("border","1px solid red");
    // $("#s2 input").css("background","beige");
    // $("#s2 input").css("width","100px");
    // $("#s2 input").css("height","50px");

    // $("#s2 input")
    //     .css({
    //         border: "1px solid red",
    //         background: "beige"
    //     })
    //     .css({
    //         width: "100px",
    //         height: "50px"
    //     });

    $("#s2 input")
    .first()
    .click((e)=>{
        $("#s2 input")
        .animate({
            border: "1px solid red",
            width: "100px"
            
        },1000)
        .css({
            background: "beige"
        })
        .delay(1000)
        .animate({
            height: "50px"
        },{
            duration:1000,
            queue : false
        })
        .animate({
            borderWidth : "10px"
        });
    })
})

$((e) => {
    const section = $("#s1");
    let btn = section.find("input[value=click]");
    let input = section.find("input[type=text]");
    let btnTrigger = section.find("input[value=trigger]");
    let img = section.find("img");

    // btn.bind("click", (e) => {
    //     let url = input.val();
    //     img.attr("src",url);

    // })

    btn.click((e) => {
        console.log("sdf");
        let url = input.val();
        img.attr("src", url);

    })

    btnTrigger.click((e) => {
        btn.trigger("click");
    })
})



