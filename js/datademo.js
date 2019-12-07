$(() => {

    // var options = {
    //     exportEnabled: true,
    //     animationEnabled: true,
    //     title: {
    //         text: "Units Sold VS Profit"
    //     },
    //     subtitles: [{
    //         text: "Click Legend to Hide or Unhide Data Series"
    //     }],
    //     axisX: {
    //         title: "States"
    //     },
    //     axisY: {
    //         title: "Units Sold",
    //         titleFontColor: "#4F81BC",
    //         lineColor: "#4F81BC",
    //         labelFontColor: "#4F81BC",
    //         tickColor: "#4F81BC",
    //         includeZero: false
    //     },
    //     axisY2: {
    //         title: "Profit in USD",
    //         titleFontColor: "#C0504E",
    //         lineColor: "#C0504E",
    //         labelFontColor: "#C0504E",
    //         tickColor: "#C0504E",
    //         includeZero: false
    //     },
    //     toolTip: {
    //         shared: true
    //     },
    //     legend: {
    //         cursor: "pointer",
    //         itemclick: toggleDataSeries
    //     },
    //     data: [{
    //         type: "spline",
    //         name: "Units Sold",
    //         showInLegend: true,
    //         xValueFormatString: "MMM YYYY",
    //         yValueFormatString: "#,##0 Units",
    //         dataPoints: [{
    //                 x: new Date(2016, 0, 1),
    //                 y: 120
    //             },
    //             {
    //                 x: new Date(2016, 1, 1),
    //                 y: 135
    //             }
    //         ]
    //     }]
    // };
    $("#liveBut").click(() => {
        $("#stage").html(`<div id="chartContainer" style="height: 370px; max-width: 920px; margin: 0px auto;"></div>`)
        console.log(tempArr.data)
        $("#chartContainer").CanvasJSChart(tempArr.data);

        function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        }

    });
}); //RF