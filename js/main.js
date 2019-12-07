/// <reference path="./lib/jquery-3.4.1.js" />
// $('body').bootstrapMaterialDesign();

const tempArr = {
    data: []

};

$(() => {


    function drawCoin(currency) {

        const card = `
        
    <div class="card bg-light border-dark col-4" id="${currency.id}">
    <div class="card-body bg-transparent">
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input input-cards-id" id="L+${currency.id}" value="L+${currency.id}">
            <label class="custom-control-label" for="L+${currency.id}"></label>
        </div>
        <h5 class="card-title">${currency.symbol}</h5>
        <p class="card-text">${currency.name}</p>
        <img class="card-img-top" src="${currency.image.large}" alt="Card image cap"> 

        <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapse+${currency.id}" role="button"
                aria-expanded="false" aria-controls="multiCollapse+${currency.id}">More Info</a>

        </p>

        <div class="collapse multi-collapse" id="multiCollapse+${currency.id}">
            <p class="card-text"><small class="text-muted">Last updated : <br/>${currency.last_updated}</small>

            </p>
            <p class="card-text">price : ${currency.market_data.current_price.usd}$</p> 
        </div>
    </div>
    </div>

    `

        $("#stage").append(card)


        console.log(currency)
    }


    $("#chartContainer").CanvasJSChart(tempArr.data);

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }


    function init() {
        // tempArr.length = 0;
        $("#stage").html("")
        // spinner("divCoins");
    }

    function spinner() {
        const spin = `
<div class="spinner-grow text-success mx-auto" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger mx-auto" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning mx-auto" role="status">
<span class="sr-only">Loading...</span>
</div>
`;
        $("#stage").html(spin)
    }



    $(() => {
        $("#homeBut").click(() => {


            spinner()


            api.retreiveCurrencies().
            then(res => {
                // saveTheCurrencies(res.slice(0, 8))
                saveTheCurrencies(res)
            })

            function saveTheCurrencies(result) {
                tempArr.data.push(result)
                draw(result)
            }

            function getCoin(result) {
                console.log(result)

            }

            function draw(array) {
                init();
                // for (let i = 0; i < 8; i++) {
                for (let i = 0; i < array.length; i++) {

                    drawCoin(array[i])
                }
            }



        });
    });
}); //RF