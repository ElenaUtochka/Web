data = [
    {
        image: "../img/hoodie.svg",
        name: "Худи",
        price: 3999
    },
    {
        image: "../img/dress.svg",
        name: "Платье",
        price: 5999
    },
    {
        image: "../img/bathrobe.svg",
        name: "Халат",
        price: 1599
    },
    {
        image: "../img/backpack.svg",
        name: "Рюкзак",
        price: 2699
    },
    {
        image: "../img/sneaker.svg",
        name: "Кроссовки",
        price: 12999
    }
]
function generateBody() {
    let tbody = document.createElement("tbody");
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        for (key in data[i]) {
            let td = document.createElement("td");
            if (key == "image") {
                let img = document.createElement("img");
                img.setAttribute("src", data[i][key]);
                td.appendChild(img);
            }
            else {
                td.innerHTML = data[i][key];
            }
            if (key == "price") {
                td.setAttribute("class", `td${i}`);
            }
            tr.appendChild(td);
        }
        let td = document.createElement("td");
        td.setAttribute("class", "relative");
        let tdinp = document.createElement("input");
        tdinp.setAttribute("type", "number");
        tdinp.setAttribute("min", "0");
        tdinp.setAttribute("value", "1");
        tdinp.setAttribute("class", `td${i}`);
        tdinp.setAttribute("id", `td${i}`);

        tdinp.oninput = function () {
            changeSumElement(`td${i}`);
        }





        tr.appendChild(td);
        let tdplus = document.createElement("button");
        tdplus.innerHTML = "+";
        tdplus.setAttribute("class", "plus absoulute");
        let tdminus = document.createElement("button");
        tdplus.onclick = function () {
            let inp = document.getElementById(`td${i}`);
            inp.value = Number(inp.value) + 1;
            changeSumElement(`td${i}`);
        }
        tdminus.innerHTML = "-";
        tdminus.setAttribute("class", "minus absoulute");
        tdminus.onclick = function () {
            let inp = document.getElementById(`td${i}`);
            inp.value = Math.max(0, inp.value - 1);
            changeSumElement(`td${i}`);
        }
        td.appendChild(tdminus);
        td.appendChild(tdinp);
        td.appendChild(tdplus);
        td = document.createElement("td");
        td.setAttribute("class", `td${i}`);
        td.innerHTML = data[i].price;
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    return tbody;
}



function changeSumElement(element) {
    let cost = document.getElementsByClassName(element);
    cost[2].innerHTML = cost[1].value * cost[0].innerHTML;
    sumAll();
}

function sumAll() {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        let result = document.getElementsByClassName(`td${i}`);
        sum = sum + Number(result[2].innerHTML);
    }
    let SumElement = document.getElementById("Sum");
    SumElement.innerHTML = `${sum} руб.`;
}


