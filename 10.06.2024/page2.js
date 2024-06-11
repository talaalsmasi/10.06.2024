const mydiv = document.getElementById("mydiv");
const name = localStorage.setItem("fullname", fullname.value);
mydiv.innerHTML = `Hello, ${name}`;