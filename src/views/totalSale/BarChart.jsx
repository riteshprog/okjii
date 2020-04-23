import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class BarChart extends React.Component {
  state = {
    dataBar: {
      labels: ['02', '03', '04', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
      datasets: [
        {
          label: {
            display:false
          },
          data: [900, 1000, 1100, 1200, 1500, 2500, 3500, 1800, 1700, 1600, 1300, 1200, 3800],
          backgroundColor: [
            "rgba(94, 212, 164)",
            "rgba(77, 193, 144)",
            "rgba(65, 184, 130)",
            "rgba(58, 170, 122)",
            "rgba(47, 165, 115)",
            "rgba(46, 158, 110)",
            "rgba(32, 145, 99)",
            "rgba(26, 124, 83)",
            "rgba(65, 184, 130)",
            "rgba(58, 170, 122)",
            "rgba(47, 165, 115)",
            "rgba(46, 158, 110)",
            "rgba(32, 145, 99)",
            "rgba(26, 124, 83)",


          ],
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: .5,
            label: {
              display:false
            },
            gridLines: {
              
              display: false,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: 'App'
            }
          }
        ]
      }
    }
  }


  render() {
    return (
      <MDBContainer>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default BarChart;