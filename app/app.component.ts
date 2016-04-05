
import {Component} from 'angular2/core';

/*
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/chartjs/chart-tests.ts
*/

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>

        `
})
export class AppComponent {

    constructor() {
        this.process();
    }
    process() {

        var canvas = <HTMLCanvasElement>document.getElementById('example-chart');
        var ctx = canvas.getContext('2d');

        var pieData: CircularChartData[] = [
            {
                value: 300,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ];

        // For a pie chart
        var myPieChart = new Chart(ctx).Pie(pieData, {
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false
        });

        console.log("PIECHART");
        console.log(myPieChart);
    }

}
