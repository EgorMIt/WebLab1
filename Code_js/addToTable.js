function addToTable() {
    let table = document.getElementById("table_out");
    let data = Cookies.get("data_Egor");
    let input = "";
    if(data !== undefined && data !== "") {
        let mass_data = data.split("/");
        for (let i = 0; i < mass_data.length - 1; i++) {
            let mass_value = mass_data[i].split(";");
            input += "<tr>"
            for (let j = 1; j < mass_value.length; j++) {
                input += "<td>"
                input += mass_value[j];
                input += "</td>"
            }
            input += "</tr>"
        }
        table.innerHTML = input;
    }
}
addToTable();