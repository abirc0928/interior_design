// *************** access event *****************

const basicMinus = document.getElementById('basic-minus');
const basicPlus = document.getElementById('basic-plus');
const proMinus = document.getElementById('pro-minus');
const proPlus = document.getElementById('pro-plus');
const basicPrice = document.getElementById('basic-price');
const proPrice = document.getElementById('pro-price');
const basicRoomCount = document.getElementById('basic-room-count')
const proRoomCount = document.getElementById('pro-room-count')
const basicCheckOut = document.getElementById("check-out-basic")
const proCheckOut = document.getElementById("check-out-pro")
const basicButton = document.getElementById("basic-button")
const proButton = document.getElementById("pro-button")
const theme1 = document.getElementById('theme1')
const theme2 = document.getElementById('theme2')
const openButton = document.getElementById('open-button')
const mySidebar = document.getElementById("mySidebar")

// ***************** add event listerner *******************

basicMinus.addEventListener('click', function () {
    roomCountity('basicMinus');
});

basicPlus.addEventListener('click', function () {
    roomCountity('basicPlus');
});

proMinus.addEventListener('click', function () {
    roomCountity('proMinus');
});

proPlus.addEventListener('click', function () {
    roomCountity('proPlus');
});

basicButton.addEventListener('click', function () {
    roomCheckOut(basicRoomCount.innerHTML, 'basic')
})
proButton.addEventListener('click', function () {
    roomCheckOut(proRoomCount.innerHTML, 'pro')
})
theme1.addEventListener("click", function () {
    var rootStyle = document.querySelector(":root");
    var rootVal = getComputedStyle(rootStyle);
    const isWhite = rootVal.getPropertyValue("--theme-font-color");
    if (isWhite === '#FFFFFF') {
        rootStyle.style.setProperty("--theme-font-color", "#11061C");
        rootStyle.style.setProperty("--theme-bg", "#8C94F2");
        rootStyle.style.setProperty("--color-black", "#eddefc");
        rootStyle.style.setProperty("--theme-font-color-secondary", "#0a0212");
        rootStyle.style.setProperty("--theme-bg-light", "#99a0ec");
        rootStyle.style.setProperty("--theme-footer-color", "#0a0212");
        rootStyle.style.setProperty("--color-alert", "#212121");
    }
    else {
        rootStyle.style.setProperty("--theme-font-color", "#FFFFFF");
        rootStyle.style.setProperty("--theme-bg", "#FE6347");
        rootStyle.style.setProperty("--color-black", "#000000");
        rootStyle.style.setProperty("--theme-font-color-secondary", "#e8e5e5");
        rootStyle.style.setProperty("--theme-bg-light", "#ff846e");
        rootStyle.style.setProperty("--theme-footer-color", "#F1F1F1");
        rootStyle.style.setProperty("--color-alert", "#FFFFFF");
    }

})
theme2.addEventListener("click", function () {
    var rootStyle = document.querySelector(":root");
    var rootVal = getComputedStyle(rootStyle);
    const isWhite = rootVal.getPropertyValue("--theme-font-color");
    if (isWhite === '#FFFFFF') {
        rootStyle.style.setProperty("--theme-font-color", "#11061C");
        rootStyle.style.setProperty("--theme-bg", "#8C94F2");
        rootStyle.style.setProperty("--color-black", "#eddefc");
        rootStyle.style.setProperty("--theme-font-color-secondary", "#0a0212");
        rootStyle.style.setProperty("--theme-bg-light", "#99a0ec");
        rootStyle.style.setProperty("--theme-footer-color", "#0a0212");
        rootStyle.style.setProperty("--color-alert", "#212121");
    }
    else {
        rootStyle.style.setProperty("--theme-font-color", "#FFFFFF");
        rootStyle.style.setProperty("--theme-bg", "#FE6347");
        rootStyle.style.setProperty("--color-black", "#000000");
        rootStyle.style.setProperty("--theme-font-color-secondary", "#e8e5e5");
        rootStyle.style.setProperty("--theme-bg-light", "#ff846e");
        rootStyle.style.setProperty("--theme-footer-color", "#F1F1F1");
        rootStyle.style.setProperty("--color-alert", "#FFFFFF");
    }

})

// *********************** Functions ******************

function roomCountity(type) {

    if (type == "basicMinus") {
        temp = parseInt(basicPrice.innerHTML)
        if (temp != 199) {
            temp -= 199
            basicPrice.innerHTML = temp
            count = parseInt(basicRoomCount.innerHTML)
            count -= 1
            basicRoomCount.innerHTML = count
        }

    } else if (type == "basicPlus") {
        temp = parseInt(basicPrice.innerHTML)
        temp += 199
        basicPrice.innerHTML = temp
        count = parseInt(basicRoomCount.innerHTML)
        count += 1
        basicRoomCount.innerHTML = count
    } else if (type == "proMinus") {
        temp = parseInt(proPrice.innerHTML)
        if (temp != 249) {
            temp -= 249
            proPrice.innerHTML = temp
            count = parseInt(proRoomCount.innerHTML)
            count -= 1
            proRoomCount.innerHTML = count
        }
    }
    else if (type == "proPlus") {
        temp = parseInt(proPrice.innerHTML)
        temp += 249
        proPrice.innerHTML = temp
        count = parseInt(proRoomCount.innerHTML)
        count += 1
        proRoomCount.innerHTML = count
    }
}

function roomCheckOut(roomCount, type) {
    if (type == 'basic') {
        basicCheckOut.innerHTML = `<p >Thank you for choosing ${roomCount} room</p>`
    }
    if (type == 'pro') {
        proCheckOut.innerHTML = `<p >Thank you for choosing ${roomCount} room</p>`
    }
}



