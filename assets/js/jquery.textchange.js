$(function () {
    var messages = [],
        index = 0;

    messages.push('Software Engineer');
    messages.push('Full-Stack Web Developer');
    messages.push('Lifelong Musician');
    messages.push('Pasta Connoisseur');


    function cycle() {
        $('#textChange').html(messages[index]);
        index++;

        if (index === messages.length) {
            index = 0;
        }

        setTimeout(cycle, 4000);
    }

    cycle();
})