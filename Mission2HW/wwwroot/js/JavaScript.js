$('#btnsend').click(function () {

    /*for some reason I couldn't get this function to work properly and actually show the grade. I couldn't tell if it had to
    do with my calculations or with the if statement or the way I set up the button and I ran out of time trying to figure it out.
    Ideally this would have printed out the final number and letter grade when you click the button on the GradeCalculator.cshtml page*/

    let finalgrade = ($('#assignments').val()/100 * 55) +
        ($('#groupproject').val()/100 * 5) +
        ($('#groupproject').val()/100 * 10) +
        ($('#quizzes').val()/100 * 20) +
        ($('#intex').val() / 100 * 10)

    let finlettergrade = ''

    if (finalgrade >= 94) {
        finlettergrade = 'A'
    } else if (finalgrade >= 90) {
        finlettergrade = 'A-'
    } else if (finalgrade >= 87) {
        finlettergrade = 'B+'
    } else if (finalgrade >= 84) {
        finlettergrade = 'B'
    } else if (finalgrade >= 80) {
        finlettergrade = 'B-'
    } else if (finalgrade >= 77) {
        finlettergrade = 'C+'
    } else if (finalgrade >= 74) {
        finlettergrade = 'C'
    } else if (finalgrade >= 70) {
        finlettergrade = 'C-'
    } else if (finalgrade >= 67) {
        finlettergrade = 'D+'
    } else if (finalgrade >= 64) {
        finlettergrade = 'D'
    } else if (finalgrade >= 60) {
        finlettergrade = 'D-'
    } else  {
        finlettergrade = 'E'
    }

    alert('Final Grade: ' + finalgrade + '<br />' + 'Letter Grade: ' + finlettergrade)



    
})