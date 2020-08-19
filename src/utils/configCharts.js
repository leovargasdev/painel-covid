// Configurações dos gráficos
const options = {
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(255, 255, 255, 0)'
      },
      stacked: true
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(255, 255, 255, 0.4)'
      },
      stacked: true
    }]
  },
  animation: {
    duration: 3000,
    easing: 'linear'
  },
  legend: {
    display: true,
    labels: {
      fontColor: '#dedede'
    }
  },
  title: {
    display: true,
    position: 'left',
    fontColor: '#dedede',
    padding: 0
  },
  tooltips: {
    mode: 'index',
    axis: 'y'
  },
  responsive: true,
  maintainAspectRatio: false // permite controlar a responsividade dos charts
};

export default options;
