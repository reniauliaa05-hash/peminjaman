// ============================
// LOGIN
// ============================

function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {

        localStorage.setItem("login", "true");

        window.location.href = "dashboard.html";

    } else {

        alert("Username atau password salah!");

    }
}


// ============================
// LOGOUT
// ============================

function logout() {

    localStorage.removeItem("login");

}


// ============================
// MODAL
// ============================

function openModal() {

    const modal = document.getElementById("modal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeModal() {

    const modal = document.getElementById("modal");

    if (modal) {
        modal.style.display = "none";
    }

}


// Tutup modal ketika klik di luar
window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};