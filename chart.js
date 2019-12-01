

  function drawChart(numbers, researches){

    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: researches,
          datasets: [{
              label: 'Numbers that I searched',
              backgroundColor: 'rgb(147, 22, 43, 0.1)',
              borderColor: 'rgb(147, 22, 43)',
              data: numbers
          }]
      },

      // Configuration options go here
      options: {}
  });


  }
