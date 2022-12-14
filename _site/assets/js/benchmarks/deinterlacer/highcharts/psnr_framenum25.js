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
                text: 'PSNR to Frame Number: Sequence # 25'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'PSNR'
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
		data: [30.084, 29.808, 30.032, 29.978, 29.614, 30.158, 29.808, 29.758, 30.065, 29.949, 29.842, 29.878, 29.852, 29.96, 30.247, 30.32, 30.001, 30.087, 30.063, 30.117, 30.276, 30.28, 30.12, 30.087, 30.096, 30.132, 30.508, 30.325, 30.372, 30.879]
},{
		name: 'ST-Deint',
		data: [34.344, 33.506, 38.25, 36.523, 38.712, 35.341, 32.777, 37.191, 36.417, 34.422, 36.919, 38.871, 38.527, 37.946, 36.882, 36.947, 36.361, 38.321, 34.253, 34.169, 36.294, 35.032, 33.891, 36.834, 37.677, 37.949, 36.962, 36.86, 34.883, 37.183]
},{
		name: 'PAL Interpolation',
		data: [28.874, 30.509, 30.784, 30.73, 33.327, 32.313, 33.314, 32.512, 32.007, 33.048, 31.22, 30.251, 32.974, 31.44, 30.978, 31.088, 31.365, 31.071, 31.387, 33.252, 31.976, 31.299, 31.499, 31.463, 30.609, 33.517, 31.896, 31.463, 32.442, 33.75]
},{
		name: 'SonyVegas Blend Field',
		data: [27.792, 27.554, 28.187, 27.942, 27.872, 27.897, 27.329, 27.634, 27.669, 27.548, 27.776, 27.853, 27.828, 27.811, 27.771, 27.709, 27.617, 27.873, 27.502, 27.282, 27.05, 26.585, 26.694, 27.179, 26.588, 26.281, 26.277, 26.913, 26.514, 25.242]
},{
		name: 'Vapoursynth EEDI3',
		data: [29.876, 29.608, 29.82, 29.76, 29.412, 29.947, 29.606, 29.55, 29.849, 29.747, 29.639, 29.672, 29.655, 29.757, 30.034, 30.098, 29.793, 29.885, 29.852, 29.903, 30.059, 30.072, 29.91, 29.883, 29.885, 29.932, 30.282, 30.116, 30.149, 30.659]
},{
		name: 'TDAN',
		data: [34.32, 38.632, 38.78, 36.822, 38.72, 39.633, 34.058, 38.215, 37.78, 38.426, 38.2, 40.313, 40.3, 38.805, 38.185, 37.205, 38.65, 39.901, 36.475, 38.038, 38.675, 37.094, 36.978, 37.966, 37.369, 37.939, 37.058, 37.176, 36.136, 34.275]
},{
		name: 'Bob',
		data: [29.239, 29.02, 29.199, 29.146, 28.862, 29.292, 29.02, 28.963, 29.224, 29.153, 29.06, 29.087, 29.081, 29.156, 29.404, 29.437, 29.199, 29.283, 29.247, 29.288, 29.43, 29.447, 29.309, 29.295, 29.283, 29.34, 29.646, 29.512, 29.535, 29.972]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [29.901, 30.645, 32.476, 31.189, 33.06, 31.535, 29.576, 32.113, 32.057, 30.971, 31.619, 32.19, 33.01, 32.851, 32.03, 31.981, 31.488, 32.925, 31.069, 30.736, 31.752, 30.909, 30.624, 32.434, 32.257, 36.839, 32.658, 31.358, 31.062, 31.845]
},{
		name: 'DfRes SA',
		data: [36.505, 40.052, 39.071, 38.569, 39.801, 40.282, 38.283, 39.482, 39.578, 40.405, 40.097, 42.104, 41.722, 40.355, 39.472, 39.506, 39.689, 41.819, 39.15, 40.366, 40.554, 39.695, 39.277, 39.772, 41.208, 40.897, 39.271, 40.102, 39.84, 35.738]
},{
		name: 'DfRes 122000 G2e 3',
		data: [35.774, 40.121, 38.807, 37.964, 39.687, 39.891, 37.704, 39.282, 39.333, 40.182, 39.795, 42.02, 41.525, 40.281, 39.268, 38.99, 39.629, 41.691, 38.65, 40.106, 40.402, 39.511, 38.963, 39.621, 41.143, 40.769, 39.11, 39.958, 39.751, 35.487]
},{
		name: 'SwinDI',
		data: [30.901, 30.595, 30.815, 30.762, 30.363, 30.99, 30.603, 30.539, 30.852, 30.747, 30.62, 30.656, 30.621, 30.752, 31.045, 31.154, 30.788, 30.884, 30.852, 30.934, 31.076, 31.079, 30.917, 30.851, 30.884, 30.924, 31.282, 31.117, 31.132, 31.711]
},{
		name: 'YADIF',
		data: [33.004, 34.128, 32.76, 32.455, 34.051, 33.231, 31.117, 32.727, 34.023, 33.471, 32.225, 33.173, 33.997, 32.516, 32.547, 31.981, 32.872, 33.765, 31.755, 32.263, 32.831, 32.833, 32.708, 33.435, 34.33, 34.249, 32.71, 33.062, 32.914, 32.901]
},{
		name: 'SonyVegas Interpolate Field',
		data: [29.238, 29.019, 29.198, 29.145, 28.86, 29.291, 29.018, 28.962, 29.223, 29.152, 29.059, 29.087, 29.08, 29.155, 29.403, 29.436, 29.198, 29.282, 29.245, 29.288, 29.428, 29.446, 29.308, 29.293, 29.282, 29.339, 29.644, 29.511, 29.534, 29.97]
},{
		name: 'EDVR',
		data: [34.687, 38.988, 38.931, 37.816, 38.874, 40.441, 37.174, 39.419, 39.145, 40.027, 39.207, 41.246, 41.655, 40.246, 39.349, 39.067, 39.48, 40.227, 38.156, 39.287, 40.018, 38.73, 38.285, 38.68, 39.875, 40.025, 38.735, 38.438, 37.876, 31.891]
},{
		name: 'MFDIN L',
		data: [39.929, 41.133, 40.481, 40.998, 40.971, 41.565, 39.7, 40.858, 40.801, 41.353, 41.052, 42.631, 42.458, 41.094, 40.648, 40.856, 41.264, 42.414, 40.57, 41.255, 40.993, 40.924, 40.531, 41.091, 41.745, 41.404, 40.212, 41.271, 40.778, 40.346]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [32.175, 31.69, 35.842, 33.776, 35.028, 32.871, 30.272, 32.562, 31.503, 30.884, 32.667, 33.375, 33.005, 32.606, 30.992, 30.997, 31.096, 32.229, 30.224, 29.424, 28.466, 27.287, 27.714, 29.226, 27.472, 26.666, 26.404, 27.829, 26.876, 24.271]
},{
		name: 'MSU Deinterlacer',
		data: [33.355, 36.269, 37.422, 36.649, 37.899, 37.89, 36.093, 37.936, 37.69, 36.948, 37.488, 39.586, 39.048, 38.393, 37.872, 37.164, 37.685, 39.555, 36.718, 37.61, 37.634, 37.481, 37.023, 37.723, 38.26, 38.538, 37.425, 37.309, 37.447, 32.612]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [27.002, 26.851, 27.061, 27.013, 26.889, 27.075, 26.844, 26.936, 27.121, 27.027, 26.995, 27.077, 27.054, 27.118, 27.272, 27.32, 27.15, 27.244, 27.155, 27.226, 27.334, 27.308, 27.243, 27.309, 27.276, 27.351, 27.548, 27.49, 27.495, 27.816]
},{
		name: 'Vapoursynth TDeintMod',
		data: [30.254, 30.945, 31.546, 31.916, 32.967, 32.89, 32.359, 32.96, 32.838, 32.635, 32.408, 32.238, 32.772, 32.274, 31.794, 32.414, 32.696, 33.02, 32.148, 32.956, 33.012, 32.368, 32.439, 33.114, 32.787, 33.563, 32.924, 32.288, 32.124, 32.368]
},{
		name: 'DfRes',
		data: [37.564, 38.088, 38.294, 38.222, 37.871, 38.822, 37.396, 38.185, 38.288, 38.326, 38.042, 38.788, 38.615, 38.265, 38.259, 38.151, 38.113, 38.692, 37.83, 38.315, 38.331, 38.128, 37.875, 38.052, 38.286, 38.228, 37.991, 38.418, 38.169, 37.43]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [29.237, 30.873, 31.162, 30.932, 31.074, 31.481, 31.05, 31.019, 31.291, 31.304, 30.924, 30.777, 31.232, 31.182, 31.18, 31.281, 30.99, 31.225, 31.131, 31.347, 31.319, 31.279, 31.128, 31.252, 30.963, 32.462, 31.589, 31.205, 31.502, 32.192]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [32.838, 32.332, 33.707, 33.444, 33.617, 33.795, 33.077, 33.52, 33.751, 33.554, 33.428, 33.269, 33.82, 33.478, 33.52, 33.902, 33.562, 33.643, 32.787, 33.606, 33.649, 33.356, 32.833, 33.556, 33.285, 33.999, 33.94, 33.447, 33.545, 34.558]
},{
		name: 'FLAD',
		data: [38.844, 40.51, 39.927, 40.378, 39.919, 41.238, 39.104, 40.593, 40.067, 40.687, 40.582, 42.068, 41.733, 40.849, 40.273, 40.21, 40.867, 41.975, 39.908, 40.673, 40.333, 40.033, 40.208, 40.634, 41.423, 41.297, 39.845, 40.738, 40.349, 40.512]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [33.832, 35.343, 34.845, 34.423, 35.419, 35.844, 32.704, 34.91, 35.717, 35.389, 34.388, 35.642, 35.874, 34.743, 35.108, 34.082, 35.206, 36.302, 33.82, 34.624, 35.446, 35.076, 34.673, 35.421, 36.351, 35.908, 35.015, 35.282, 34.902, 30.421]
},{
		name: 'DUF',
		data: [33.913, 38.224, 38.595, 37.112, 38.634, 39.675, 35.69, 38.346, 38.195, 38.834, 38.902, 40.932, 40.654, 39.189, 38.824, 37.867, 38.856, 40.227, 37.348, 38.835, 39.408, 38.335, 37.421, 37.755, 38.276, 39.204, 37.58, 37.611, 37.269, 26.46]
},{
		name: 'EDVR_woTSA',
		data: [34.964, 39.13, 39.006, 37.699, 38.882, 40.491, 36.976, 39.216, 38.833, 39.883, 39.316, 41.459, 41.412, 40.225, 39.543, 38.782, 38.992, 40.577, 38.209, 39.735, 39.939, 38.99, 38.411, 38.991, 40.411, 40.28, 38.808, 39.033, 37.393, 32.863]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [32.005, 30.113, 34.105, 30.369, 35.711, 30.175, 34.388, 29.339, 35.238, 28.317, 35.325, 29.767, 35.913, 29.499, 35.245, 27.925, 34.715, 29.051, 34.081, 26.613, 34.435, 24.427, 34.042, 26.221, 34.348, 23.746, 34.613, 24.998, 34.691, 21.415]
},{
		name: 'MFDIN',
		data: [36.206, 38.376, 38.107, 37.296, 38.718, 39.246, 35.188, 38.502, 38.271, 38.471, 38.147, 40.141, 40.4, 38.614, 38.456, 37.05, 38.954, 40.474, 36.648, 38.029, 39.033, 37.79, 37.636, 39.066, 39.6, 39.264, 38.03, 38.728, 38.173, 36.699]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [30.813, 30.443, 30.949, 30.778, 30.492, 30.882, 30.357, 30.657, 30.852, 30.677, 30.678, 30.752, 30.772, 30.864, 31.056, 31.149, 30.855, 30.974, 30.773, 30.809, 31.089, 30.907, 30.702, 30.915, 30.979, 31.002, 31.328, 31.072, 30.978, 31.611]
},{
		name: 'Muksun Deinterlacer',
		data: [27.002, 26.851, 27.061, 27.013, 26.889, 27.075, 26.844, 26.936, 27.121, 27.027, 26.995, 27.077, 27.054, 27.118, 27.272, 27.32, 27.15, 27.244, 27.155, 27.226, 27.334, 27.308, 27.243, 27.309, 27.276, 27.351, 27.548, 27.49, 27.495, 27.816]
},{
		name: 'Kernel Deinterlacer',
		data: [29.237, 31.458, 32.47, 31.352, 32.421, 32.486, 31.394, 31.779, 32.452, 32.186, 31.699, 31.409, 32.472, 32.102, 31.772, 31.897, 31.435, 32.281, 31.617, 31.783, 31.967, 31.839, 31.528, 32.521, 31.723, 35.813, 32.438, 31.684, 32.082, 32.936]
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