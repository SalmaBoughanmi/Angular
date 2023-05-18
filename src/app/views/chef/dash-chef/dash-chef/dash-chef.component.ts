import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dash-chef',
  templateUrl: './dash-chef.component.html',
  styleUrls: ['./dash-chef.component.css']
})
export class DashChefComponent {
  public chart: any;
  constructor() { }

  ngOnInit(): void {
      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };
      // const optionsDailySalesChart: any = {
      //     lineSmooth: Chartist.Interpolation.cardinal({
      //         tension: 0
      //     }),
      //     low: 0,
      //     high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      //     chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      // }
      //var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      //this.startAnimationForLineChart(dailySalesChart);
      this.createChart();
      var myChart = new Chart("myChart", {
          type: 'bar',
          data: {
              labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3,4,8,2,6,7,1],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                  ],
                  borderWidth: 1
              }]
          },
          // options: {
          //     scales: {
          //         y: {

          //                 beginAtZero: true

          //         }
          //     }
          // }
      });
  }
  createChart(){

      this.chart = new Chart("MyPie", {
        type: 'pie', //this denotes tha type of chart

        data: {// values on X-Axis
          labels: ['Nombre d acceptation', 'Nombre d employe','Nombre Refus','Nombre d offre', ],
             datasets: [{
      label: 'My First Dataset',
      data: [300, 240, 100, 432,],
      backgroundColor: [
        'green',
        'pink',
        'red',
              'yellow',
        'orange',
        'blue',
      ],

    }],
        },
        options: {
          aspectRatio:2.5
        }

      });
    }


}
