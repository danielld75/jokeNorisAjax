$(function () {
    var url = 'http://api.icndb.com/jokes/random';
    var $paragraph = $('#joke');

    $('#get-joke').click(function () {
        getJoke();
    });

    getJoke();

    function getJoke() {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (res) {
                $paragraph.text(res.value.joke);
            },
            error: function () {
                $paragraph.text("Happen something wrong");
            }
        })
    }
});
