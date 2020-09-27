$( document ).ready(function() {

    var form = document.getElementById('form');
    form.addEventListener('submit', function(event){
        event.preventDefault()

        var fname = document.getElementById('fname').value;
        var father = document.getElementById('fathername').value;
        var caddress = document.getElementById('caddress').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var location = document.getElementById('location').value;
        var details = document.getElementById('details').value;
        var phone = document.getElementById('phone').value;
        var dist = document.getElementById('dist').value;
        var state = document.getElementById('state').value;

        var fnameout = document.getElementsByClassName('fname-out');
        var fatherout = document.getElementsByClassName('fathername-out');
        var caddressout = document.getElementsByClassName('caddress-out');
        var dateout = document.getElementsByClassName('date-out');
        var timeout = document.getElementsByClassName('time-out');
        var locationout = document.getElementsByClassName('location-out');
        var detailsout = document.getElementsByClassName('details-out');
        var phoneout = document.getElementsByClassName('phone-out');
        var distout = document.getElementsByClassName('dist-out');
        var stateout = document.getElementsByClassName('state-out');

        var app = document.getElementById('app-res');
        app.style.display = "";

        for (i=0; i<2; i++) {
            fnameout[i].innerHTML = fname;
            dateout[i].innerHTML = date;
            timeout[i].innerHTML = time;
            stateout[i].innerHTML = state;
        }

        for (i=0; i<locationout.length; i++) {
            locationout[i].innerHTML = location;
        }

        fatherout[0].innerHTML = father;
        caddressout[0].innerHTML = caddress;
        detailsout[0].innerHTML = details;
        phoneout[0].innerHTML = phone;
        distout[0].innerHTML = dist;


        var doc = new jsPDF('p', 'pt', 'a4');
            doc.addHTML($('#output')[0], function () {
            doc.save('Test.pdf');
        });
    })

});