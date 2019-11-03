prices = [[3.17, 3.19, 3.22, 3.25, 3.34], 
        [2.79, 2.8, 2.81, 2.83, 2.82],
         [4.65, 4.74, 4.52, 4.58, 4.62], 
         [5.63, 5.51, 5.71, 5.64, 5.3], 
         [4.86, 5.03, 4.83, 4.98, 4.95], 
        [1.56, 1.56, 1.55, 1.55, 1.54], 
        [7.52, 7.52, 7.72, 7.39, 7.44]]

names = ['Eggs', 'Bread', 'Flour', 'Cornflake', 'Apples', 'Bananas', 'Chickens']

var ctx = document.getElementById('wheat-price').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['May', 'June', 'July', 'August', 'September'],
        datasets: [{
            label: 'Price',
            data: [3.17, 3.19, 3.22, 3.25, 3.34],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

Chart.defaults.global.defaultFontColor = "#fff";

function change_data(clicked_id){
    number = clicked_id
    for (var i = 0; i<=5; i++){
        myChart.data.datasets[0].data[i] = prices[number][i]
    myChart.update()
    }
}