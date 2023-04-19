let products = [
    {
        name: "Шоколад",
        price: 115
    },
    {
        name: "Виноград",
        price: 299
    },
    {
        name: "Бананы",
        price: 109
    },
    {
        name: "Яблоки",
        price: 145
    },
    {
        name: "Гранат",
        price: 798
    },
    {
        name: "Зефир",
        price: 113
    },
    {
        name: "Батончик",
        price: 54
    },
    {
        name: "Вафельная трубочка",
        price: 33
    },
    {
        name: "Печенье",
        price: 288
    },
    {
        name: "Пряники",
        price: 62
    },
    {
        name: "Торт",
        price: 1017
    }
];


for (let obj of products) {
    let main = document.getElementById("main");
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerHTML = obj.name;
    let p = document.createElement("p");
    let temp = (obj.price % 10);
    let temp2 = obj.price%100;
    let rub = "";
    if (temp == 1 && temp2!=11) {
        rub = "рубль"
    } else if(temp==1 && temp2==11){
        rub="рублей"
    } else if (temp == 2 || temp == 3 || temp == 4) {
        rub = "рубля"
    } else {
        rub = "рублей"
    };
    p.innerHTML = obj.price + " " + rub;
    div.appendChild(h2);
    div.appendChild(p);
    // document.body.appendChild(div);
    main.appendChild(div);
}
