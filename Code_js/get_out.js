let data_cookies="";
function getData(){
    const xhr = new XMLHttpRequest();
    let url = new URL('http://localhost:7070/treatment.php');
    url.searchParams.set('x', value_X);
    url.searchParams.set('y', value_Y);
    url.searchParams.set('r', R);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(Cookies.get('data_Egor') !== undefined) {
                data_cookies = Cookies.get('data_Egor');
            }
            data_cookies += chek_good_php(xhr.responseText);
            Cookies.set("data_Egor", data_cookies);
            addToTable();
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

function chek_good_php(param) {
    if(param.split("/")[0].split(";")[0] === '1'){
        alert("Ошибка в отправленных данных");
    }else{
        drawPoint(value_X * 10, value_Y * 10, R * 10);
        return param;
    }
}