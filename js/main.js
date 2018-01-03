$(function () {
    var url = 'http://api.icndb.com/jokes/random';
    var paragraph = document.getElementById('joke');
    var button = document.getElementById("get-joke");

    function getJoke() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function () {
            var response = JSON.parse(xhr.response);
            paragraph.innerHTML = response.value.joke;
        });
        xhr.send();
    }

    getJoke();
    button.addEventListener('click', function () {
        getJoke();
    });

});
