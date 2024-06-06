let outputBox = document.querySelector("#user-key")



let pressedKey = document.addEventListener('keydown', function(e) {
    outputBox.textContent = '"' + e.key + '"'
})

