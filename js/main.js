/// <reference path="./lib/jquery-3.4.1.js" />
const tempArr = [];
$(() => {

    // $('body').bootstrapMaterialDesign();

    $(() => {
        api.retreiveCurrencies().
        then(res => {
            saveTheCurrencies(res.slice(0, 10))
        })
    })

    function saveTheCurrencies(result) {
        tempArr.push(result)
        draw(result)
    }

    function draw(array) {

        // $("#stage").html("")
        for (let i = 0; i < 5; i++) {
            drawCoin(array[i])
        }
    }


    function drawCoin(currency) {
        // api.getCurrencyInfoById(currency).then((result) => {

        //     const image = result.image.small;
        //     const current_price_usd = result.market_data.current_price.usd;
        //     const current_price_eur = result.market_data.current_price.eur;
        //     const current_price_ils = result.market_data.current_price.ils;

        // });
        const card = `
            <div class="card col-4" id="${currency.id}">
            <img class="card-img-top" src="${currency.image.large}" alt="Card image cap"> 
            <div class="card-body">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input input-cards-id" id="L+${currency.id}" value="${currency.id}">
                    <label class="custom-control-label" for="L+${currency.id}"></label>
                </div>
                <h5 class="card-title">${currency.name}</h5>
                <p class="card-text">Symbol:${currency.symbol}</p>
                <p>
                    <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button"
                        aria-expanded="false" aria-controls="multiCollapseExample1">Toggle
                        first element</a>

                </p>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">More info</button>
                </div>
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                </div>
            </div>
            </div>

            `

        $("#stage").append(card)


        console.log(currency)
    }


}); //RF