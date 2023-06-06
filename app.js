document.getElementById("btn").addEventListener("keydown", function (event) {
    if (event == "Enter") {
        age();

    }
})

// if(date1=='')
function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
   
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    var d3 = document.getElementById('date');
    var m3 = document.getElementById('month');
    var y3 = document.getElementById('year');
    d3.value = '';
    m3.value = '';
    y3.value = '';
    if (y >= 0) { document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days'; }
    else {
        document.getElementById('age').innerHTML = 'You are not born yet.';
    }
}