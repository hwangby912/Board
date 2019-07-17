
 function getComment (_id) {
    alert(_id);
    // $.get('/comments/' + _id, '', (data, status) => {
    //     alert(data);
    // });
}
$(document).ready(() => {
    // $(document).on('dblclick', '.user_tr', () => {
    //     alert('aaa');
    // })

   

    function getUser() {
        $.get('/users', (data, status) => {
            // alert(data);
            let printTable = "<thead><tr><th>아이디</th><th>이름</th><th>나이</th><th>결혼여부</th></tr></thead><tbdoy>"
            data.forEach((ele) => {
                printTable += `<tr onclick="getComment('${ele._id}')"><td>${ele._id}</td><td>${ele.name}</td><td>${ele.age}</td><td>${ele.married}</td></tr>`;
            });
            printTable += '</tbody>';
            $('#user-list').html(printTable);
        });
    }

    $('#user-form').click(() => {

        let sendParams = {
            name : $('#username').val(), 
            age : $('#age').val(),
            married : $('#married').is(':checked'),
        };

        // alert(JSON.stringify(sendParams));

        $.post('/users', sendParams, (data, status) => {
            // alert(status + ' : ' + data);
            $('#username').val('');
            $('#age').val('');
            $('#married').prop('checked', false);

            if(status == 'success') {
                alert('register complete');
                getUser();
            }
        });

    });
});