/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const dashboard24HoursPerformanceChart = {
  data: canvas => {
    return {
      labels: [
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"

      ],
      datasets: [
        {
          borderColor: "#f17e5d",
          backgroundColor: "#259D70",
          pointRadius: 100,
          padding:15,
          margin:15,
          pointHoverRadius: 0,
          borderWidth: 0,
          data: [50, 70, 90, 150, 160, 340, 365, 360, 370, 385, 390, 50, 408, 420]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5
            // padding: 20
          },
          gridLines: {
            drawBorder: true,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: .5,
          gridLines: {
            drawBorder: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: true
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f"
          }
        }
      ]
    }
  }
};

const dashboardEmailStatisticsChart = {
  data: canvas => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

const dashboardNASDAQChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },
      {
        data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: "#51CACF",
        backgroundColor: "transparent",
        pointBorderColor: "#51CACF",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
};
