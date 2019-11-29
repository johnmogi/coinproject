/// <reference path="./lib/jquery-3.4.1.js" />
const tempArr = [];
$(() => {

    // $('body').bootstrapMaterialDesign();

    $(() => {
        api.retreiveCurrencies().
        then(res => {
            saveTheCurrencies(res)
        })
    })

    function saveTheCurrencies(result) {
        tempArr.push(result)
        draw(result)
    }

    function draw(array) {
        $("#stage").html();
        for (let i = 0; i < 5; i++) {
            drawCoin(array[i])
        }
    }

    function drawCoin(currency) {
        console.log(currency)
    }



}); //RF