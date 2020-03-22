document.getElementById('pod').onclick = function() {
    var yourKq = document.getElementById('kq').value;

    if (yourKq >= 1 && yourKq < 21) {
        alert('Вы живёте в первом подъезде');
    } else if (yourKq >= 21 && yourKq < 49) {
        alert('Вы живёте во втором подъезде');
    } else if (yourKq >= 49 && yourKq < 91) {
        alert('Вы живёте в третьем подъезде');
    } else if (yourKq >= 91 && yourKq < 121) {
        alert('Вы живёте в четвёртом подъезде');
    } else if (yourKq >= 121 && yourKq < 151) {
        alert('Вы живёте в пятом подъезде');
    } else {
        alert('Такого подъезда не существует!');
    };
};