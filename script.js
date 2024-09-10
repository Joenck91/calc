document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");

    // Itera sobre cada botão na NodeList e adiciona um ouvinte de clique
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            console.log("okk");
        });
    });
});
