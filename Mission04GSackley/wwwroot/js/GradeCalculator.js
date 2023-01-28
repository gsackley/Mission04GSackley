//// The following block of code accepts all the different categories of grades, 
//calculates them based off of percentages in learning suite and then spits back 
//to the HTML page their final grade percentage
$(document).ready(function () {
    $("#calculate-button").click(function () {
        var assignments = parseFloat($("#assignments").val());
        var quizzes = parseFloat($("#quizzes").val());
        var projects = parseFloat($("#projects").val());
        var intex = parseFloat($("#intex").val());
        var midterm = parseFloat($("#midterm").val());
        var final = parseFloat($("#final").val());
        var total = (assignments * 0.5) + (quizzes * 0.1) + (projects * 0.1) + (intex * 0.1) + (midterm * 0.1) + (final * 0.1);
        var percentage = total.toFixed(2);
        $("#grade").text("Your Final Grade is a " + percentage + "%");

    });
});
