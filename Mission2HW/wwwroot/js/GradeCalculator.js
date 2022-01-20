$('#calculator').click(function () {


    let finalgrade = Math.round(($('#assignments').val()/100 * 55) +
        ($('#groupproject').val()/100 * 5) +
        ($('#quizzes').val()/100 * 10) +
        ($('#exams').val()/100 * 20) +
        ($('#intex').val() / 100 * 10))

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

    alert('Final Grade: ' + finalgrade + ' Final Letter Grade: ' + finlettergrade)
    
})

