$(function () {
    $(document).ready(function() {

        Highcharts.chart('speed_plot', {
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                spacingBottom: 15,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
                // Explicitly tell the width and height of a chart
                width: null,
                height: null
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            title: {
                text: 'PSNR to Speed'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'PSNR'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'FPS on CPU'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'middle'
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x}, {point.y}'
                    }
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            series: [		{
			name: 'NNEDI',
			data: [[37.099, 1.91]]
		},
		{
			name: 'ST-Deint',
			data: [[40.974, 2.7]]
		},
		{
			name: 'PAL Interpolation',
			data: [[32.901, 2.85]]
		},
		{
			name: 'SonyVegas Blend Field',
			data: [[28.344, 3.51]]
		},
		{
			name: 'Vapoursynth EEDI3',
			data: [[37.061, 51.9]]
		},
		{
			name: 'TDAN',
			data: [[37.625, 0.68]]
		},
		{
			name: 'Bob',
			data: [[36.668, 52.83]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[35.278, 2.15]]
		},
		{
			name: 'DfRes SA',
			data: [[42.177, 0.02]]
		},
		{
			name: 'DfRes 122000 G2e 3',
			data: [[41.891, 0.0]]
		},
		{
			name: 'SwinDI',
			data: [[39.812, 0.0]]
		},
		{
			name: 'YADIF',
			data: [[36.918, 48.96]]
		},
		{
			name: 'SonyVegas Interpolate Field',
			data: [[36.649, 3.31]]
		},
		{
			name: 'EDVR',
			data: [[39.337, 0.56]]
		},
		{
			name: 'MFDIN L',
			data: [[42.547, 1.58]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[30.772, 6.53]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[38.556, 1.3]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[34.486, 1.9]]
		},
		{
			name: 'Vapoursynth TDeintMod',
			data: [[37.617, 50.29]]
		},
		{
			name: 'DfRes',
			data: [[39.247, 0.42]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[36.449, 37.91]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[36.788, 36.75]]
		},
		{
			name: 'FLAD',
			data: [[41.964, 0.05]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[37.948, 46.45]]
		},
		{
			name: 'DUF',
			data: [[38.512, 0.74]]
		},
		{
			name: 'EDVR_woTSA',
			data: [[39.686, 0.58]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[29.259, 1.45]]
		},
		{
			name: 'MFDIN',
			data: [[38.494, 1.58]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[37.031, 0.27]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[34.486, 1.95]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[35.712, 37.85]]
		},
		]
        });
    });

 });