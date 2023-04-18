function sumTable() {
    // select all data rows (exclude first and last row)
    const rows = Array.from(document.querySelectorAll("tr"))
        .slice(1, -1);
    let result = 0;
    // for each row
    //--select last column
    //--add content to sum

    for (let row of rows){
        const value = Number(row.lastElementChild.textContent);
        result += value;
    }
    //display sum in total row 

    document.getElementById("sum").textContent = result;

}