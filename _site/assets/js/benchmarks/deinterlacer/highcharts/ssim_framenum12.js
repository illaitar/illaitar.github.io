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
                text: 'SSIM to Frame Number: Sequence # 12'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'SSIM'
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
		data: [0.921, 0.925, 0.927, 0.925, 0.935, 0.93, 0.935, 0.927, 0.928, 0.924, 0.923, 0.917, 0.921, 0.921, 0.914, 0.915, 0.921, 0.914, 0.929, 0.921, 0.921, 0.916, 0.922, 0.905, 0.914, 0.914, 0.916, 0.916, 0.913, 0.93]
},{
		name: 'ST-Deint',
		data: [0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.998, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999]
},{
		name: 'PAL Interpolation',
		data: [0.931, 0.871, 0.871, 0.871, 0.881, 0.873, 0.881, 0.872, 0.873, 0.864, 0.865, 0.859, 0.859, 0.862, 0.857, 0.86, 0.867, 0.861, 0.874, 0.865, 0.865, 0.862, 0.866, 0.852, 0.86, 0.859, 0.861, 0.862, 0.859, 0.874]
},{
		name: 'SonyVegas Blend Field',
		data: [0.916, 0.917, 0.917, 0.92, 0.925, 0.921, 0.925, 0.919, 0.91, 0.912, 0.912, 0.907, 0.909, 0.91, 0.907, 0.91, 0.912, 0.908, 0.916, 0.912, 0.912, 0.909, 0.911, 0.898, 0.909, 0.91, 0.911, 0.91, 0.907, 0.918]
},{
		name: 'Vapoursynth EEDI3',
		data: [0.919, 0.923, 0.924, 0.922, 0.933, 0.927, 0.932, 0.924, 0.925, 0.921, 0.92, 0.914, 0.918, 0.919, 0.911, 0.912, 0.918, 0.911, 0.926, 0.918, 0.918, 0.913, 0.919, 0.903, 0.912, 0.911, 0.914, 0.913, 0.91, 0.928]
},{
		name: 'TDAN',
		data: [0.969, 0.974, 0.975, 0.974, 0.977, 0.976, 0.977, 0.974, 0.975, 0.972, 0.973, 0.969, 0.972, 0.971, 0.968, 0.966, 0.97, 0.968, 0.973, 0.971, 0.972, 0.971, 0.972, 0.968, 0.97, 0.97, 0.97, 0.971, 0.969, 0.97]
},{
		name: 'Bob',
		data: [0.914, 0.918, 0.919, 0.917, 0.928, 0.921, 0.927, 0.918, 0.918, 0.916, 0.916, 0.91, 0.913, 0.915, 0.907, 0.908, 0.914, 0.907, 0.922, 0.914, 0.914, 0.909, 0.915, 0.897, 0.907, 0.907, 0.91, 0.909, 0.906, 0.924]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.949, 0.954, 0.955, 0.953, 0.961, 0.956, 0.96, 0.954, 0.954, 0.952, 0.952, 0.947, 0.95, 0.951, 0.945, 0.945, 0.95, 0.945, 0.956, 0.95, 0.95, 0.946, 0.951, 0.938, 0.945, 0.944, 0.946, 0.946, 0.945, 0.958]
},{
		name: 'DfRes SA',
		data: [0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.979]
},{
		name: 'DfRes 122000 G2e 3',
		data: [0.997, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.998, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.998, 0.999, 0.999, 0.999, 0.984]
},{
		name: 'SwinDI',
		data: [0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999]
},{
		name: 'YADIF',
		data: [0.909, 0.905, 0.905, 0.906, 0.915, 0.909, 0.914, 0.906, 0.903, 0.902, 0.901, 0.896, 0.899, 0.901, 0.894, 0.896, 0.901, 0.894, 0.908, 0.9, 0.901, 0.896, 0.9, 0.884, 0.893, 0.894, 0.897, 0.897, 0.893, 0.937]
},{
		name: 'SonyVegas Interpolate Field',
		data: [0.914, 0.918, 0.919, 0.917, 0.928, 0.921, 0.927, 0.918, 0.918, 0.916, 0.916, 0.91, 0.913, 0.915, 0.907, 0.908, 0.914, 0.907, 0.922, 0.914, 0.914, 0.909, 0.915, 0.897, 0.907, 0.907, 0.91, 0.909, 0.906, 0.924]
},{
		name: 'EDVR',
		data: [0.983, 0.993, 0.994, 0.994, 0.994, 0.995, 0.994, 0.995, 0.996, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.994, 0.995, 0.995, 0.996, 0.996, 0.995, 0.995, 0.996, 0.996, 0.996, 0.994, 0.995, 0.995, 0.995, 0.932]
},{
		name: 'MFDIN L',
		data: [0.992, 0.992, 0.992, 0.992, 0.992, 0.993, 0.992, 0.992, 0.993, 0.992, 0.992, 0.991, 0.992, 0.991, 0.991, 0.99, 0.99, 0.99, 0.992, 0.99, 0.991, 0.992, 0.991, 0.991, 0.991, 0.991, 0.992, 0.992, 0.99, 0.992]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
},{
		name: 'MSU Deinterlacer',
		data: [0.946, 0.96, 0.961, 0.961, 0.965, 0.966, 0.969, 0.965, 0.966, 0.961, 0.962, 0.957, 0.961, 0.961, 0.957, 0.956, 0.959, 0.957, 0.963, 0.96, 0.96, 0.96, 0.96, 0.953, 0.957, 0.957, 0.958, 0.959, 0.956, 0.947]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.904, 0.907, 0.907, 0.908, 0.918, 0.912, 0.917, 0.909, 0.905, 0.903, 0.902, 0.896, 0.899, 0.902, 0.895, 0.898, 0.902, 0.894, 0.91, 0.901, 0.901, 0.896, 0.9, 0.882, 0.894, 0.895, 0.898, 0.896, 0.893, 0.911]
},{
		name: 'Vapoursynth TDeintMod',
		data: [0.915, 0.92, 0.922, 0.919, 0.931, 0.924, 0.93, 0.921, 0.922, 0.919, 0.919, 0.912, 0.916, 0.917, 0.909, 0.91, 0.917, 0.909, 0.925, 0.917, 0.917, 0.912, 0.917, 0.899, 0.91, 0.909, 0.912, 0.911, 0.908, 0.926]
},{
		name: 'DfRes',
		data: [0.979, 0.974, 0.973, 0.974, 0.976, 0.975, 0.978, 0.976, 0.976, 0.972, 0.974, 0.971, 0.973, 0.973, 0.968, 0.969, 0.969, 0.968, 0.972, 0.97, 0.972, 0.971, 0.972, 0.966, 0.968, 0.97, 0.971, 0.972, 0.968, 0.973]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.914, 0.91, 0.912, 0.909, 0.919, 0.914, 0.917, 0.91, 0.91, 0.908, 0.908, 0.902, 0.904, 0.905, 0.899, 0.898, 0.905, 0.899, 0.912, 0.905, 0.905, 0.901, 0.906, 0.891, 0.898, 0.897, 0.901, 0.901, 0.898, 0.915]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.962, 0.934, 0.935, 0.932, 0.938, 0.938, 0.937, 0.934, 0.935, 0.931, 0.933, 0.928, 0.929, 0.929, 0.926, 0.922, 0.929, 0.927, 0.93, 0.929, 0.929, 0.928, 0.929, 0.924, 0.923, 0.923, 0.926, 0.928, 0.925, 0.934]
},{
		name: 'FLAD',
		data: [0.989, 0.99, 0.99, 0.989, 0.989, 0.99, 0.99, 0.989, 0.991, 0.989, 0.99, 0.989, 0.99, 0.989, 0.988, 0.986, 0.988, 0.988, 0.988, 0.988, 0.988, 0.989, 0.989, 0.989, 0.988, 0.988, 0.988, 0.989, 0.988, 0.988]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.933, 0.934, 0.935, 0.933, 0.942, 0.937, 0.941, 0.934, 0.935, 0.932, 0.933, 0.927, 0.93, 0.931, 0.924, 0.924, 0.93, 0.925, 0.937, 0.93, 0.93, 0.926, 0.931, 0.917, 0.925, 0.925, 0.927, 0.927, 0.924, 0.924]
},{
		name: 'DUF',
		data: [0.96, 0.983, 0.984, 0.984, 0.986, 0.986, 0.986, 0.986, 0.988, 0.985, 0.984, 0.984, 0.984, 0.985, 0.984, 0.982, 0.984, 0.981, 0.987, 0.986, 0.986, 0.986, 0.987, 0.985, 0.985, 0.983, 0.984, 0.984, 0.984, 0.87]
},{
		name: 'EDVR_woTSA',
		data: [0.983, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.998, 0.997, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.941]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.999, 0.901, 0.898, 0.896, 0.902, 0.899, 0.902, 0.895, 0.892, 0.89, 0.892, 0.886, 0.89, 0.892, 0.886, 0.89, 0.893, 0.888, 0.901, 0.893, 0.894, 0.888, 0.892, 0.874, 0.886, 0.889, 0.891, 0.89, 0.888, 0.901]
},{
		name: 'MFDIN',
		data: [0.98, 0.98, 0.98, 0.98, 0.983, 0.982, 0.983, 0.981, 0.981, 0.98, 0.98, 0.979, 0.98, 0.98, 0.978, 0.978, 0.979, 0.978, 0.982, 0.98, 0.979, 0.979, 0.979, 0.977, 0.978, 0.978, 0.979, 0.978, 0.978, 0.981]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.928, 0.931, 0.932, 0.931, 0.94, 0.935, 0.94, 0.933, 0.934, 0.93, 0.931, 0.924, 0.928, 0.929, 0.921, 0.923, 0.928, 0.921, 0.935, 0.928, 0.928, 0.924, 0.929, 0.914, 0.923, 0.922, 0.924, 0.924, 0.921, 0.936]
},{
		name: 'Muksun Deinterlacer',
		data: [0.904, 0.907, 0.907, 0.908, 0.918, 0.912, 0.917, 0.909, 0.905, 0.903, 0.902, 0.896, 0.899, 0.902, 0.895, 0.898, 0.902, 0.894, 0.91, 0.901, 0.901, 0.896, 0.9, 0.882, 0.894, 0.895, 0.898, 0.896, 0.893, 0.911]
},{
		name: 'Kernel Deinterlacer',
		data: [0.914, 0.911, 0.913, 0.91, 0.92, 0.916, 0.919, 0.911, 0.911, 0.909, 0.909, 0.903, 0.905, 0.906, 0.901, 0.899, 0.907, 0.9, 0.913, 0.906, 0.906, 0.902, 0.907, 0.892, 0.899, 0.899, 0.902, 0.903, 0.899, 0.916]
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