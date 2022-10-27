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
                text: 'VMAF to Speed'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'VMAF'
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
			data: [[93.246, 1.91]]
		},
		{
			name: 'ST-Deint',
			data: [[94.445, 2.7]]
		},
		{
			name: 'PAL Interpolation',
			data: [[82.662, 2.85]]
		},
		{
			name: 'SonyVegas Blend Field',
			data: [[49.308, 3.51]]
		},
		{
			name: 'Vapoursynth EEDI3',
			data: [[90.122, 51.9]]
		},
		{
			name: 'TDAN',
			data: [[89.876, 0.68]]
		},
		{
			name: 'Bob',
			data: [[87.242, 52.83]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[88.882, 2.15]]
		},
		{
			name: 'DfRes SA',
			data: [[95.177, 0.02]]
		},
		{
			name: 'DfRes 122000 G2e 3',
			data: [[94.848, 0.0]]
		},
		{
			name: 'SwinDI',
			data: [[95.268, 0.0]]
		},
		{
			name: 'YADIF',
			data: [[87.24, 48.96]]
		},
		{
			name: 'SonyVegas Interpolate Field',
			data: [[90.151, 3.31]]
		},
		{
			name: 'EDVR',
			data: [[92.805, 0.56]]
		},
		{
			name: 'MFDIN L',
			data: [[97.429, 1.58]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[57.538, 6.53]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[92.141, 1.3]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[86.873, 1.9]]
		},
		{
			name: 'Vapoursynth TDeintMod',
			data: [[91.044, 50.29]]
		},
		{
			name: 'DfRes',
			data: [[93.212, 0.42]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[90.757, 37.91]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[89.625, 36.75]]
		},
		{
			name: 'FLAD',
			data: [[95.836, 0.05]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[91.309, 46.45]]
		},
		{
			name: 'DUF',
			data: [[91.595, 0.74]]
		},
		{
			name: 'EDVR_woTSA',
			data: [[93.327, 0.58]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[64.436, 1.45]]
		},
		{
			name: 'MFDIN',
			data: [[94.455, 1.58]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[90.964, 0.27]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[86.873, 1.95]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[90.25, 37.85]]
		},
		]
        });
    });

 });