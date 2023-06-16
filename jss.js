var geral_frutas = document.getElementById("prateleiras_frutas")

const produtos = [
    {
        "id":"f_1",
        "nome":"Banana",
        "img":"./imgs/banana.jpg",
        "valor": 4.99
    },
    {
        "id":"f_2",
        "nome":"Laranja",
        "img":"./imgs/laranja.jpg",
        "valor": 5.99
    },
    {
        "id":"f_3",
        "nome":"Goiaba",
        "img":"./imgs/goiaba.jpg",
        "valor": 6.99
    },
    {
        "id":"f_4",
        "nome":"Pera",
        "img":"./imgs/pera.jpg",
        "valor": 6.50
    },
    {
        "id":"f_5",
        "nome":"Uva",
        "img":"./imgs/uva.jpg",
        "valor": 5.25
    }
]
    
  
    window.onload = function(){
        for(let i = 0; i< produtos.length; i++) {
            var frutas = `
            <div class="card_all">
                <div class="card_1">
                    <div class="text_card">
                        <p>${produtos[i].nome}</p>
                    </div>

                    <div class="img_card">
                        <img src=${produtos[i].img}></img>
                    </div>

                    <div class="preco_card">
                        <button onclick="comprar(${i})">Adicionar</button>
                    </div>
                </div>
            </div>`;
            geral_frutas.innerHTML += frutas;
        }
    };
    function comprar(i){
        console.log("entrou")
    }
    
