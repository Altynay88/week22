const ctx = document.getElementById('myChart').getContext('2d');
const monthly = document.getElementById('monthly').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['female', 'male', 'under 18 age'],
        datasets: [{
            label: 'Traffic',
            data: [120, 190, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        }]
    },
    options: {
      responsive: true
    }
});

const montly = new Chart(monthly, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Monthly',
            data: [12, 19, 36, 55, 20, 30, 120],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 7, 132, 1)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

