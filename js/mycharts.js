/*------------------------------- 
 Traffic Chart
-------------------------------*/

let trafficChart = document.getElementById('traffic-chart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Work Sans';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = 'rgb(119,119,119)';

let myTrafficChart = new Chart(trafficChart, {
  aspectRatio: 2.5,
  animation: {
  duration: 0
  },
  type: 'line',
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
      {
        label: "Traffic Chart",
        fill: true,
        borderColor: 'rgba(115,119,191,0.5)',
        borderWidth: 1,
        lineTension: 0,
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        pointStyle: 'circle',
        pointRadius: 5,
        pointBorderColor: 'rgba(115,119,191,1)',
        backgroundColor: 'rgba(115,119,191,0.1)',
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        type: 'linear',
          ticks: {
            beginAtZero: true
          }
      }]
    }
  }
});

const trafficNav = document.getElementById('traffic-nav');

function resetButtonClass(){
  let listItems = trafficNav.children;
  
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].className = 'traffic-nav-link';
  }
}

trafficNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const button = e.target;
    
    if (button.textContent === 'Hourly') {
      resetButtonClass();
      button.className = 'active';
      myTrafficChart.options.scales.yAxes[0].ticks.max = 800;
      myTrafficChart.options.scales.yAxes[0].ticks.stepSize = 100;
      myTrafficChart.data.labels = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
      myTrafficChart.data.datasets[0].data = [58, 120, 454, 742, 731, 340, 469, 604, 589, 718, 361, 483, 235];
      myTrafficChart.update();

    } else if (button.textContent === 'Daily') {
      resetButtonClass();
      button.className = 'active';
      myTrafficChart.options.scales.yAxes[0].ticks.max = 2500;
      myTrafficChart.options.scales.yAxes[0].ticks.stepSize = 500;
      myTrafficChart.data.labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      myTrafficChart.data.datasets[0].data = [205, 1114, 1704, 1690, 1530, 1873, 2086];
      myTrafficChart.update();

    } else if (button.textContent === 'Weekly') {
      resetButtonClass();
      button.className = 'active';

      myTrafficChart.options.scales.yAxes[0].ticks.max = 2500;
      myTrafficChart.options.scales.yAxes[0].ticks.stepSize = 500;
      myTrafficChart.data.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
      myTrafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2200];
      myTrafficChart.update();

    } else if (button.textContent === 'Monthly' ) {
      resetButtonClass();
      button.className = 'active';

      myTrafficChart.options.scales.yAxes[0].ticks.max = 10000;
      myTrafficChart.options.scales.yAxes[0].ticks.stepSize = 1000;
      myTrafficChart.data.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      myTrafficChart.data.datasets[0].data = [5200, 4302, 2800, 5553, 5001, 3853, 2063, 1024, 4020, 5601, 7002, 9138];
      myTrafficChart.update();
    }
  }
});


/*------------------------------- 
 Daily Traffic Chart
-------------------------------*/

let myBarChart = document.getElementById('daily-chart').getContext('2d');
  let barChart = new Chart(myBarChart, {
  aspectRatio: 2.5,
  animation: {
  duration: 0
  },
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    yLabels: ["50", "100", "150", "200", "250"],
    datasets: [
      {
        label: "Daily Traffic",
        fill: true,
        lineTension: 0,
        backgroundColor: "rgb(115,119,191)",
        data: [75, 100, 175, 125, 225, 200, 100],
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        type: 'linear',
          ticks: {
            max: 250,
            min: 50,
            stepSize: 50
          }
      }]
    }
  }
});


/*------------------------------- 
 Mobile Chart
-------------------------------*/

let myDoughnutChart = document.getElementById('mobile-users').getContext('2d');
  let DoughnutChart = new Chart(myDoughnutChart, {
  aspectRatio: 2.5,
  animation: {
  duration: 0
  },
  type: 'doughnut',
  data: {
    labels:['Desktop', 'Tablets', 'Phones'],
    datasets:[{
      label: 'Mobile Traffic',
      borderWidth: 0,
      data: [2000, 550, 500],
      backgroundColor: [
        'rgb(116,177,191)',
        'rgb(129,201,143)',
        'rgb(115,119,191)'
      ]
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      labels: {
      fontColor: 'rgb(119,119,119)'
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enable: true
    }
  }
});
