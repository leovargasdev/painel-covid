// Configurações dos gráficos
const options = {
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(0, 0, 0, 0)'
      },
      stacked: true
    }]
  },
  animation: {
    duration: 3000,
    easing: 'linear'
  },
  legend: {
    display: true
  },
  title: {
    display: true,
    position: 'left',
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
