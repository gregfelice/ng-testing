System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/chartjs/chart-tests.ts
            */
            AppComponent = (function () {
                function AppComponent() {
                    this.process();
                }
                AppComponent.prototype.process = function () {
                    var canvas = document.getElementById('example-chart');
                    var ctx = canvas.getContext('2d');
                    var pieData = [
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
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>My First Angular 2 App</h1>\n\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map