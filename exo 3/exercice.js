let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = document.getElementById('noun').value + " " + document.getElementById('adjective').value + " " + document.getElementById('person').value;
};
libButton.addEventListener('click', libIt);








