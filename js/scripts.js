document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("phone").addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
            let formattedValue = "";
    
            if (value.length > 0) {
                formattedValue = value.slice(0, 3);
            }
            if (value.length > 3) {
                formattedValue += "-" + value.slice(3, 6);
            }
            if (value.length > 6) {
                formattedValue += "-" + value.slice(6, 10);
            }
    
            e.target.value = formattedValue;
        });

        document.getElementById("submit_button").addEventListener("click", function (e) {
            alert("Your form has submitted successfully!");
        });


    });



   