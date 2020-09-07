let cookies_data="";
function getData(){
    const xhr = new XMLHttpRequest();
    // let url = new URL('http://localhost:7070/server_checking.php');
    // url.searchParams.set('x', value_X);
    // url.searchParams.set('y', value_Y);
    // url.searchParams.set('r', R);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(Cookies.get('input_data') !== undefined) {
                cookies_data = Cookies.get('input_data');
            }
            cookies_data += php_response(xhr.responseText);
            Cookies.set("input_data", cookies_data);
            addToTable();
        }
    }
    xhr.open('GET', 'server_checking.php?'+'x='+value_X+'&y='+value_Y+'&r='+value_R);
    xhr.send();
}

function php_response(param) {
    if(param.split("/")[0].split(";")[0] === 'false'){
        alert("Ошибка в отправленных данных");
    }else{
        drawPoint(value_X * 10, value_Y * 10, value_R * 10);
        return param;
    }
}