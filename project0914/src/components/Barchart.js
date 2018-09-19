import React from 'react';
var Chart = require("react-chartjs").Bar;

export default class BarChart extends React.Component{
    
    render(){
        const chartData = {
            labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월","9월"],
          datasets: [
              {
                  label: "방문자수",
                  fillColor: "rgba(220,220,220,0.5)",
                  strokeColor: "rgba(220,220,220,0.8)",
                  highlightFill: "rgba(220,220,220,0.75)",
                  highlightStroke: "rgba(220,220,220,1)",
                  data: [65, 59, 80, 81, 56, 55, 40, 80, 100]
              },
              {
                  label: "상품조회",
                  fillColor: "rgba(151,187,205,0.5)",
                  strokeColor: "rgba(151,187,205,0.8)",
                  highlightFill: "rgba(151,187,205,0.75)",
                  highlightStroke: "rgba(151,187,205,1)",
                  data: [28, 48, 40, 19, 86, 27, 90, 90, 200]
              }
          ]
          }
          const chartOptions = {
            scaleBeginAtZero : true,
            scaleShowGridLines : true,
            scaleGridLineColor : "rgba(0,0,0,.05)",
            scaleGridLineWidth : 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            barShowStroke : true,
            barStrokeWidth : 2,
            barValueSpacing : 5,
            barDatasetSpacing : 1
        }
        return(
            <Chart data={chartData} options={chartOptions} width="600" height="160"/>
        );
    }
}