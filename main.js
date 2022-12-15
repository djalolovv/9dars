const tbody = document.querySelector ("#tbody") 

let fruits = [
    { product_name: "Apple", product_price: 2.1, product_weight: 320 },
    { product_name: "Banana", product_price: 1.7, product_weight: 84 },
    { product_name: "Orange", product_price: 2.5, product_weight: 86 },
    { product_name: "Pineapple", product_price: 3.0, product_weight: 126 },
    { product_name: "Kiwi", product_price: 4.0, product_weight: 550 },
    { product_name: "Mango", product_price: 2.7, product_weight: 328 },
    { product_name: "Cherry", product_price: 1.8, product_weight: 360 },
    { product_name: "Berry", product_price: 1.9, product_weight: 77 },
    { product_name: "Strawberry", product_price: 2.9, product_weight: 620 },
];
function addProduct(e){
    e.preventDefault();
    let newProduct = {
        product_name: e.target[0].value,
        product_price: +e.target[1].value,
        product_weight: +e.target[2].value
    }
    let text = newProduct.product_name;
    let isDefined = false;
for(let i = 0; i < fruits.length; i++) {
    let userText = fruits[i].product_name.slice(0, text.length);
    if(userText.toLocaleLowerCase() == text.toLocaleLowerCase()) {
        isDefined = true;
        alert('bunday meva bor');
    }
}
if(!isDefined) {
    fruits.push(newProduct);
    let {product_name, product_price, product_weight} = newProduct;
    tbody.innerHTML += `<tr>
        <td>${fruits.length}</td>
        <td>${product_name}</td>
        <td>${product_price}</td>
        <td>${product_weight}</td>
        </tr>`;
         e.target[0].value = '';
         e.target[1].value = '';
         e.target[2].value = '';
}
}

function bodygaYoz (){
    tbody.innerHTML = "";
    for(let f = 0; f < fruits.length; f++){
        tbody.innerHTML += `<tr>
        <td>${f + 1}</td>
        <td>${fruits[f].product_name}</td>
        <td>${fruits[f].product_price}</td>
        <td>${fruits[f].product_weight}</td>
        </tr>`
    }
}
bodygaYoz();

