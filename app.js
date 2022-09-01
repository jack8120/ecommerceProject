'use strict'

//console.log('check')
// Event record interest in item with on mouse enter


let footballcounter = 0;
let cricketBatcounter = 0;

//function for item hover

let footballElement = document.getElementById('footballAnalytics');
let cricketBatElement = document.getElementById('cricketBatAnalytics');

//initial render
footballElement.innerHTML = footballcounter;
cricketBatElement.innerHTML = cricketBatcounter;

function footballHover(){
    footballcounter++;
    footballElement.innerHTML = footballcounter;
}

function cricketBatHover(){
    cricketBatcounter++;
    cricketBatElement.innerHTML = cricketBatcounter;
}

// Canvas Charts


  const labels = [
    'Football',
    'Cricket Bat',

  function showData(){
    if(render)


  }  
    
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Footballs Vs Cricket Bats',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [tennisBatCounter, cricketBatcounter],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

// Card interactivity

