document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = "Passwords do not match";
    } else {
       
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.action, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                if (response === "success") {
                    
                    alert("Registration successful!");
                    window.location.href = "login.html"; 
                } else {
                    document.getElementById('error-message').innerText = response;
                }
            }
        };
        xhr.send('username=' + encodeURIComponent(username) +
                 '&email=' + encodeURIComponent(email) +
                 '&password=' + encodeURIComponent(password));
    }
});
