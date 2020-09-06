function addToTable() {
    let table = document.getElementById("table_out");
    let data = Cookies.get("data_Egor");
    let inner = "";
    if(data !== undefined && data !== "") {
        let mass_data = data.split("/");
        for (let i = 0; i < mass_data.length - 1; i++) {
            let mass_value = mass_data[i].split(";");
            inner += "<tr>"
            for (let j = 1; j < mass_value.length; j++) {
                inner += "<td>"
                inner += mass_value[j];
                inner += "</td>"
            }
            inner += "</tr>"
        }
        table.innerHTML = inner;
    }
}
addToTable();