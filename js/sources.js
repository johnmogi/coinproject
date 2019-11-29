/// <reference path="jquery-3.4.1.js" />

const config = {
    allCoins: "https://api.coingecko.com/api/v3/coins/list",
    oneCoin: "https://api.coingecko.com/api/v3/coins"
}
const api = {
    retreiveCurrencies: function () {
        return new Promise((resolve) => {
            $.ajax({
                url: config.allCoins,
                method: "GET",
                success: function (currencies) {
                    resolve(currencies)
                },
            })
        })
    }

}