let moreBtn = document.querySelector("#more")
let logoContainer = document.querySelector("#container")
let itemCount
let newItem
let logos = [
    "../image/logo5.png",
    "../image/logo6.png",
    "../image/logo7.png",
    "../image/logo8.png",
    "../image/logo9.png",
    "../image/logo10.png",
    "../image/logo11.png",
    "../image/logo12.png",
    "../image/logo13.png",
    "../image/logo14.png",
    "../image/logo15.png",
    "../image/logo16.png",
    "../image/logo17.png",
    "../image/logo18.png",
    "../image/logo19.png",
    "../image/logo20.png",
    "../image/logo21.png",
    "../image/logo22.png",
    "../image/logo23.png",
    "../image/logo24.png",
]


document.addEventListener("scroll", function (event) {
    // let documentHeight = document.body.scrollHeight;
    // let currentScroll = window.scrollY + window.innerHeight;
    // // When the user is [modifier]px from the bottom, fire the event.
    // let modifier = 200; 
    // if(currentScroll + modifier > documentHeight) {
    //     console.log('You are at the bottom!')
    // }
    let scrollTop = window.scrollY

    let documentHeight = document.body.clientHeight

    let windowHeight = window.innerHeight

    let scrollPercent = scrollTop / (documentHeight - windowHeight)

    let scrollPercentRounded = Math.round(scrollPercent * 100)
    
    if (scrollPercentRounded > 100) {
        loadMore()
        Object.values(logoContainer.children).forEach(function (item) {
            item.setAttribute("class" , "itemHover")
        })
    }
})

moreBtn.addEventListener("click" , loadMore)


function loadMore() {
    itemCount = logoContainer.childElementCount
    console.log("itemCount : " , itemCount , "\nlogoCount : " , logos.length);
    if (itemCount <= logos.length) {
        for (var i = 1; i < 5; i++){
            newItem = document.createElement("div")
            newItem.insertAdjacentHTML("afterbegin","<img src= ../image/logo"+(itemCount + i)+".png /> <p>Logo "+(itemCount + i) +"</p>")
            logoContainer.append(newItem)
        }
    } else {
    }

}


