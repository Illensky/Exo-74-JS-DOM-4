//Votre code ci dessous

let catImg = document.getElementById('cat-pic');

function miaou () {
    document.getElementById('cat-chat').innerText = "Donne moi a manger con d'humain"
}

function pasMiaou () {
    document.getElementById('cat-chat').innerText = ""
}

catImg.addEventListener("mouseover", miaou)
catImg.addEventListener("mouseleave", pasMiaou)






