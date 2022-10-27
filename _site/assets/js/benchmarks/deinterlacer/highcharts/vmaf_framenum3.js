$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {
            
            chart: {
                zoomType: 'xy',
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            title: {
                text: 'VMAF to Frame Number: Sequence # 3'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'VMAF'
                }
            },
            xAxis: {
                title: {
                        text: 'Frame Number'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },series: [{
		name: 'NNEDI',
		data: [97.168, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'ST-Deint',
		data: [96.784, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.403, 99.438, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'PAL Interpolation',
		data: [96.886, 95.652, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.329, 100.0, 100.0, 100.0, 100.0, 96.401, 93.972, 90.87, 88.945, 100.0, 99.388, 86.174, 81.896, 87.074, 79.483, 76.916, 99.108]
},{
		name: 'SonyVegas Blend Field',
		data: [67.186, 44.09, 22.325, 26.668, 19.205, 52.625, 31.513, 43.312, 36.358, 59.257, 39.895, 45.841, 28.278, 20.324, 72.4, 66.633, 68.78, 30.175, 32.413, 33.296, 45.861, 42.599, 22.618, 17.02, 15.501, 17.834, 26.354, 16.074, 25.744, 69.731]
},{
		name: 'Vapoursynth EEDI3',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'TDAN',
		data: [100.0, 93.42, 84.888, 88.954, 93.738, 99.089, 100.0, 100.0, 100.0, 94.738, 96.182, 100.0, 100.0, 87.262, 100.0, 100.0, 100.0, 91.2, 92.19, 93.81, 92.498, 86.184, 71.805, 78.176, 85.711, 77.261, 84.513, 72.648, 84.649, 100.0]
},{
		name: 'Bob',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.439, 97.486, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [96.309, 98.238, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.941, 95.446, 92.046, 100.0, 100.0, 97.748, 94.506, 97.004, 93.296, 87.517, 100.0]
},{
		name: 'DfRes SA',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes 122000 G2e 3',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'SwinDI',
		data: [97.227, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'YADIF',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.55, 99.544, 97.909, 94.735, 100.0, 100.0, 97.042, 92.107, 94.286, 91.587, 90.581, 100.0]
},{
		name: 'SonyVegas Interpolate Field',
		data: [96.791, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.807, 98.485, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.87, 100.0]
},{
		name: 'EDVR',
		data: [100.0, 100.0, 100.0, 100.0, 98.469, 99.458, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.934, 96.098, 92.31, 85.422, 89.661, 89.809, 98.014, 94.403, 96.438, 91.565, 90.721, 100.0]
},{
		name: 'MFDIN L',
		data: [97.015, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [81.193, 54.604, 27.648, 31.732, 25.694, 62.491, 38.186, 47.698, 39.382, 59.797, 42.839, 51.123, 35.941, 28.854, 88.228, 81.324, 84.179, 36.475, 41.387, 43.682, 55.358, 53.765, 27.657, 22.442, 20.93, 23.411, 32.869, 21.745, 33.554, 82.72]
},{
		name: 'MSU Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.809, 96.583, 100.0, 100.0, 100.0, 97.771, 99.675, 96.847, 96.44, 100.0]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [96.104, 98.538, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.84, 97.132, 94.698, 100.0, 100.0, 96.55, 93.969, 96.008, 91.904, 87.239, 100.0]
},{
		name: 'Vapoursynth TDeintMod',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [96.792, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.557, 97.943, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.012, 100.0]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.562, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'FLAD',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.646, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.67, 100.0]
},{
		name: 'DUF',
		data: [100.0, 98.61, 97.788, 90.388, 97.114, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.749, 100.0, 100.0, 100.0, 100.0, 94.67, 94.252, 93.901, 93.529, 92.13, 91.16, 92.553, 86.324, 93.007, 85.125, 87.66, 100.0]
},{
		name: 'EDVR_woTSA',
		data: [100.0, 96.065, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.899, 100.0, 100.0, 100.0, 99.422, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [80.543, 14.827, 100.0, 11.454, 100.0, 46.217, 100.0, 34.669, 100.0, 58.99, 100.0, 35.226, 100.0, 16.339, 100.0, 55.45, 100.0, 20.01, 98.974, 11.567, 95.922, 18.147, 100.0, 17.627, 93.446, 16.367, 94.2, 16.737, 85.073, 76.163]
},{
		name: 'MFDIN',
		data: [95.248, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.956, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.838, 100.0]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Muksun Deinterlacer',
		data: [96.104, 98.538, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.84, 97.132, 94.698, 100.0, 100.0, 96.55, 93.969, 96.008, 91.904, 87.239, 100.0]
},{
		name: 'Kernel Deinterlacer',
		data: [96.792, 98.265, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.357, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.551, 95.996, 100.0, 100.0, 100.0, 97.001, 98.713, 97.004, 92.111, 100.0]
},],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    });

});