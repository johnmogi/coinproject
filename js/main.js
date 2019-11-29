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

        const card = `
<div class="card col-4">
<!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
<div class="card-body">
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input input-cards-id" id="zcn" value="zcn">
        <label class="custom-control-label" for="zcn"></label>
    </div>
    <h5 class="card-title">${currency.name}</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
        to
        additional
        content. This content is a little bit longer.</p>
    <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button"
            aria-expanded="false" aria-controls="multiCollapseExample1">Toggle
            first element</a>

    </p>
    <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
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