
document.getElementById("subscribe-button")?.addEventListener("click", () => {

    document.getElementById("popup-form").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("overlay")?.addEventListener("click", () => {
    document.getElementById("popup-form").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

document.getElementById("subscriptionForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let formData = new FormData(this);
    let formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    fetch('https://http-echo-server.azurewebsites.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => response.json())
    .then(data => {
        alert("Prenumerationen har skickats!");
    })
    .catch(error => {
        alert("Något gick fel. Försök igen.");
    });
});
