let body= document.querySelector('body');

document.querySelectorAll('button').forEach(button => {
    button.onclick = function() {
        body.style.backgroundColor = button.id;
    };
});