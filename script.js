var add = document.getElementById("add");
var istatus = document.querySelector("h5");


add.addEventListener("click", function(){
    if(istatus.textContent === "Stranger"){
        istatus.textContent = "Friends";
        istatus.style.color = "green";
        add.textContent = "Remove Friend";
        add.style.color = "#111";
        add.style.backgroundColor = "#dadada"
    } else {
        istatus.textContent = "Stranger";
        istatus.style.color = "red";
        add.textContent = "Add Friend";
        add.style.color = "#fff";
        add.style.backgroundColor = "cadetblue";
    }
});