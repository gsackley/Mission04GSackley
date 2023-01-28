$("#btnSend").click(function () {
    alert('From: ' + $("#txtFrom").val() +
        ', Subject: ' + $("#txtSubject").val() +
        ', Message: ' + $("#txtMesssage").val());

    $("#picGanderson").fadeToggle();
})