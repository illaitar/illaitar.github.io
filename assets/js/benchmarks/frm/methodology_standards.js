Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of codecs in Annual MSU Video Codecs Comparisons (Subjective Part)'
    },
    xAxis: {
        title: {text: 'Year'},
        categories: ['2018','2019','2020','2021']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of codecs in Annual MSU Video Codecs Comparisons (Subjective Part)'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            },
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function(){
                    var val = this.y;
                    if (val > 0) {
                        return val;
                    }
                    return '';
                },
            },
            pointWidth: 60,
        }
    },
    exporting: {
        sourceWidth: 1000,
        sourceHeight: 600,
    },
    credits: {
        enabled: false,
    },
    series: [{
        name: 'H.264/AVC',
        data: [2, 1, 1, 1]
    }, {
        name: 'HEVC',
        data: [9, 9, 10, 7]
    }, {
        name: 'VVC',
        data: [0, 0, 0, 6]
    }, {
        name: 'AV1',
        data: [1, 4, 6, 5]
    }, {
        name: 'Other',
        data: [2, 4, 4, 3]
    }]
});
