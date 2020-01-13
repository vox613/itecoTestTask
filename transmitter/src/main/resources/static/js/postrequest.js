$(document).ready(function () {

    $("#messageForm").submit(function (event) {
        event.preventDefault();
        ajaxPost();
    });


    function ajaxPost() {
        var formData = {
            msgText: $("#msgText").val()
        };

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "/rest/messages",
            data: JSON.stringify(formData),
            dataType: 'json',
        });
        resetData();
    }

    function resetData() {
        $("#msgText").val("");
    }
});