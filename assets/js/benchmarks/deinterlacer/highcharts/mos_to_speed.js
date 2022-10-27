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
                text: 'MOS to Speed'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'MOS'
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
			data: [[0.511, 1.91]]
		},
		{
			name: 'ST-Deint',
			data: [[0.59, 2.7]]
		},
		{
			name: 'PAL Interpolation',
			data: [[0.0, 2.85]]
		},
		{
			name: 'SonyVegas Blend Field',
			data: [[0.0, 3.51]]
		},
		{
			name: 'Vapoursynth EEDI3',
			data: [[0.427, 51.9]]
		},
		{
			name: 'TDAN',
			data: [[0.258, 0.68]]
		},
		{
			name: 'Bob',
			data: [[0.143, 52.83]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[0.0, 2.15]]
		},
		{
			name: 'DfRes SA',
			data: [[0.981, 0.02]]
		},
		{
			name: 'DfRes 122000 G2e 3',
			data: [[0.898, 0.0]]
		},
		{
			name: 'SwinDI',
			data: [[0.0, 0.0]]
		},
		{
			name: 'YADIF',
			data: [[0.672, 48.96]]
		},
		{
			name: 'SonyVegas Interpolate Field',
			data: [[0.178, 3.31]]
		},
		{
			name: 'EDVR',
			data: [[0.521, 0.56]]
		},
		{
			name: 'MFDIN L',
			data: [[1.11, 1.58]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[0.0, 6.53]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[0.768, 1.3]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[0.0, 1.9]]
		},
		{
			name: 'Vapoursynth TDeintMod',
			data: [[0.284, 50.29]]
		},
		{
			name: 'DfRes',
			data: [[0.965, 0.42]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[0.095, 37.91]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[0.24, 36.75]]
		},
		{
			name: 'FLAD',
			data: [[0.0, 0.05]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[0.377, 46.45]]
		},
		{
			name: 'DUF',
			data: [[0.373, 0.74]]
		},
		{
			name: 'EDVR_woTSA',
			data: [[0.543, 0.58]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[0.0, 1.45]]
		},
		{
			name: 'MFDIN',
			data: [[1.007, 1.58]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[0.581, 0.27]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[0.4, 1.95]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[0.076, 37.85]]
		},
		]
        });
    });

 });