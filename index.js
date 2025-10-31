function tables(){
        let article = document.querySelector("article")
        article.style.display = "block"
        table.innerHTML = ``
        table.innerHTML = `<table id="table" border="3">
                                <tbody>
                                    <tr></tr>
                                </tbody>
                            </table>`
                let box = Number(col.value)
                let noodles = Number(row.value)
                let operation = operand.value
                let result;
                tableRow = document.querySelector("#table tr")
                tableRow.innerHTML = ``
        for (var i = box; i > 0; i--){
            tableRow.innerHTML += `<td></td>`
            table = document.querySelector("#table tr td:last-of-type")
            for(var j = 1; j <= noodles; j++){
                if (operation == "+"){
                    operator = "+"
                    result = i + j;
                }else if(operation == "-"){
                    operator = "-"
                    result = i - j
                }else if(operation == "*"){
                    operator = "X"
                    result = i*j
                }else{
                    result = (i / j).toFixed(2)
                    operator = "/"
                }
                table.innerHTML += `<p>${i} ${operator} ${j} = ${result}</p>`
            }
        }
    }