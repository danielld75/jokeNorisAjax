$(function () {
    var url = 'http://api.icndb.com/jokes/random';
    var $paragraph = $('#joke');

    function getJoke() {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (res) {
                $paragraph.html(res.value.joke);
            },
            error: function () {
                $paragraph.text("Happen something wrong");
            }
        })
    }

    getJoke();

    var $button = $('#get-joke').click(getJoke);

});
