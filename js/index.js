var fields = [
                document.querySelector('[name=user-name]'),
                document.querySelector('[name=user-email]'), 
                document.querySelector('[name=user-cellphone]'),
            ];
var form = document.querySelector('form');
var table = document.querySelector('.table');
var tbody = document.createElement('tbody');
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var tr = document.createElement('tr');
    fields.forEach(function(field){
        var td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
    table.appendChild(tbody);
    fields.forEach(function(field){
        field.value = '';
    });
});