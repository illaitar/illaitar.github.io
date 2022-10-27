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
                text: 'PSNR to Frame Number: Sequence # 9'
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
		data: [53.155, 50.338, 49.498, 49.059, 48.23, 47.839, 47.943, 47.943, 48.172, 47.537, 47.89, 48.113, 47.805, 48.039, 48.241, 44.321, 42.052, 41.215, 41.382, 40.764, 40.788, 40.948, 41.237, 41.951, 42.557, 42.765, 43.153, 43.144, 42.534, 41.57]
},{
		name: 'ST-Deint',
		data: [77.778, 52.627, 52.265, 50.994, 50.679, 49.715, 49.571, 49.839, 49.609, 48.961, 49.278, 49.557, 49.484, 49.259, 49.454, 45.479, 44.348, 42.697, 42.492, 42.047, 42.123, 42.504, 42.842, 43.265, 43.32, 44.202, 44.19, 44.452, 44.159, 42.857]
},{
		name: 'PAL Interpolation',
		data: [39.946, 38.444, 42.469, 41.668, 40.837, 40.44, 40.193, 40.191, 39.992, 39.762, 39.721, 39.82, 39.653, 39.671, 39.637, 38.48, 37.191, 36.608, 35.869, 36.227, 36.518, 36.566, 36.655, 37.274, 37.764, 37.961, 38.122, 37.7, 37.194, 36.908]
},{
		name: 'SonyVegas Blend Field',
		data: [35.7, 46.178, 41.004, 36.764, 35.244, 35.191, 35.897, 35.384, 33.817, 33.7, 36.23, 36.301, 36.378, 38.847, 39.004, 32.276, 30.999, 28.11, 26.765, 25.996, 25.677, 25.307, 26.716, 27.279, 28.492, 28.963, 29.481, 29.698, 29.605, 28.668]
},{
		name: 'Vapoursynth EEDI3',
		data: [54.438, 51.133, 49.919, 49.441, 48.522, 48.0, 48.191, 47.978, 48.337, 47.784, 48.176, 48.414, 48.081, 48.432, 48.598, 44.476, 42.165, 41.237, 41.474, 40.847, 40.795, 40.91, 41.193, 41.934, 42.565, 42.802, 43.221, 43.246, 42.718, 41.631]
},{
		name: 'TDAN',
		data: [53.841, 50.843, 49.385, 47.659, 47.006, 46.99, 47.627, 46.891, 46.791, 46.411, 46.868, 46.534, 44.55, 42.865, 39.611, 37.614, 37.802, 37.248, 38.356, 37.943, 37.156, 38.288, 37.703, 38.515, 39.952, 39.652, 40.624, 40.248, 39.489, 37.299]
},{
		name: 'Bob',
		data: [53.556, 49.681, 48.792, 48.126, 47.381, 46.836, 46.986, 46.875, 47.17, 46.655, 46.956, 47.237, 46.931, 47.103, 47.213, 43.454, 41.548, 40.782, 40.579, 39.866, 39.669, 40.063, 40.368, 41.089, 41.692, 41.924, 42.258, 42.015, 41.379, 40.675]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [43.473, 48.602, 46.218, 45.077, 44.265, 43.607, 43.144, 43.021, 43.02, 42.544, 42.611, 42.561, 42.235, 42.151, 42.168, 40.269, 38.406, 38.128, 37.768, 37.377, 37.351, 37.748, 37.995, 38.348, 38.849, 39.027, 39.227, 38.925, 38.349, 37.896]
},{
		name: 'DfRes SA',
		data: [54.744, 53.572, 51.587, 50.302, 49.48, 49.34, 49.697, 49.287, 49.387, 48.722, 49.054, 48.949, 48.442, 48.733, 49.03, 43.967, 41.947, 41.261, 41.906, 41.367, 41.472, 41.657, 41.776, 42.092, 42.723, 42.98, 43.477, 43.414, 42.605, 37.612]
},{
		name: 'DfRes 122000 G2e 3',
		data: [54.571, 53.223, 51.511, 50.132, 49.243, 49.214, 49.536, 49.042, 49.141, 48.438, 48.948, 48.662, 48.274, 48.425, 48.721, 43.858, 42.225, 41.302, 41.642, 41.074, 41.166, 41.532, 41.578, 41.968, 42.659, 42.985, 43.417, 43.2, 42.411, 37.732]
},{
		name: 'SwinDI',
		data: [53.52, 51.477, 49.935, 49.503, 48.695, 48.351, 48.521, 48.353, 48.667, 48.117, 48.551, 48.682, 48.338, 48.563, 48.792, 44.601, 42.266, 41.384, 41.679, 41.049, 41.1, 41.333, 41.58, 42.303, 42.963, 41.885, 42.869, 43.503, 42.825, 41.538]
},{
		name: 'YADIF',
		data: [53.536, 50.48, 50.026, 49.443, 48.132, 47.472, 47.526, 47.408, 47.571, 47.007, 47.365, 47.683, 47.242, 47.468, 47.522, 43.661, 41.388, 40.338, 40.019, 39.46, 39.212, 39.501, 39.659, 40.439, 41.039, 41.358, 41.733, 41.665, 41.111, 39.478]
},{
		name: 'SonyVegas Interpolate Field',
		data: [53.503, 49.649, 48.767, 48.1, 47.36, 46.816, 46.969, 46.854, 47.151, 46.633, 46.931, 47.211, 46.906, 47.079, 47.185, 43.444, 41.539, 40.772, 40.572, 39.858, 39.661, 40.055, 40.36, 41.079, 41.681, 41.913, 42.249, 42.003, 41.369, 40.667]
},{
		name: 'EDVR',
		data: [53.603, 51.798, 50.028, 46.234, 45.595, 47.897, 47.921, 48.016, 47.557, 47.372, 47.376, 46.992, 46.995, 45.829, 45.94, 40.848, 39.361, 38.303, 38.478, 38.06, 38.122, 38.312, 37.697, 38.612, 39.616, 39.196, 40.843, 40.016, 39.034, 35.804]
},{
		name: 'MFDIN L',
		data: [56.708, 53.453, 51.635, 50.328, 49.647, 50.029, 50.599, 50.612, 50.6, 49.712, 50.696, 50.684, 49.683, 50.192, 50.878, 46.0, 44.227, 42.474, 43.052, 42.221, 42.491, 42.71, 42.88, 43.172, 43.878, 44.105, 44.597, 44.602, 43.873, 42.252]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [32.898, 44.907, 38.561, 33.983, 32.419, 32.365, 33.094, 32.562, 30.937, 30.821, 33.447, 33.508, 33.614, 36.251, 36.437, 29.523, 28.258, 25.259, 23.868, 23.097, 22.764, 22.37, 23.808, 24.36, 25.594, 26.079, 26.597, 26.844, 26.777, 25.829]
},{
		name: 'MSU Deinterlacer',
		data: [53.175, 50.653, 50.288, 49.324, 47.603, 47.001, 47.802, 47.475, 47.482, 47.149, 47.413, 47.519, 47.318, 47.697, 47.942, 43.679, 42.032, 40.351, 40.055, 39.499, 39.555, 39.989, 40.069, 40.513, 41.14, 41.329, 41.704, 41.778, 41.233, 40.116]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [44.375, 49.328, 47.456, 46.299, 45.515, 44.993, 44.703, 44.347, 44.396, 44.009, 43.984, 43.931, 43.561, 43.473, 43.361, 41.339, 39.178, 38.9, 38.679, 38.326, 38.225, 38.425, 38.685, 39.247, 39.729, 40.016, 40.256, 40.204, 39.893, 39.224]
},{
		name: 'Vapoursynth TDeintMod',
		data: [47.166, 49.272, 48.901, 48.105, 47.402, 46.761, 46.856, 46.817, 47.106, 46.621, 46.912, 47.128, 46.855, 47.034, 47.232, 43.528, 41.583, 40.833, 40.702, 40.11, 40.012, 40.387, 40.716, 41.402, 42.054, 42.253, 42.562, 42.381, 41.726, 40.993]
},{
		name: 'DfRes',
		data: [55.368, 52.518, 50.99, 49.576, 48.839, 48.677, 49.27, 48.898, 49.18, 48.391, 48.769, 48.55, 48.044, 48.339, 48.57, 44.197, 42.355, 41.274, 41.608, 41.21, 41.298, 41.618, 41.599, 42.123, 42.615, 42.845, 43.375, 43.35, 42.767, 41.599]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [53.477, 49.594, 48.575, 47.605, 46.786, 46.228, 46.301, 46.114, 46.276, 45.802, 45.967, 46.208, 45.977, 46.119, 46.18, 42.982, 41.086, 40.376, 40.147, 39.512, 39.288, 39.645, 39.949, 40.655, 41.2, 41.426, 41.754, 41.55, 40.95, 40.31]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [52.896, 50.33, 48.741, 47.881, 47.122, 46.753, 46.84, 46.704, 46.814, 46.344, 46.506, 46.76, 46.447, 46.692, 46.723, 43.335, 41.505, 40.605, 40.374, 39.608, 39.496, 39.851, 40.098, 40.67, 41.258, 41.578, 41.888, 41.752, 41.152, 40.439]
},{
		name: 'FLAD',
		data: [56.787, 54.131, 52.298, 50.588, 50.088, 50.113, 50.724, 50.453, 50.51, 49.813, 50.372, 50.202, 49.398, 49.791, 50.101, 45.547, 43.693, 42.445, 42.777, 42.172, 42.354, 42.448, 42.654, 42.976, 43.63, 43.804, 44.384, 44.387, 43.632, 42.075]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [52.847, 50.775, 49.379, 48.483, 47.624, 47.266, 47.664, 47.533, 47.746, 47.053, 47.437, 47.565, 47.188, 47.385, 47.596, 43.588, 41.81, 40.847, 40.767, 40.029, 39.963, 40.411, 40.745, 41.39, 42.058, 42.228, 42.546, 42.263, 41.565, 40.818]
},{
		name: 'DUF',
		data: [53.838, 51.99, 49.799, 47.484, 47.002, 47.16, 48.032, 47.138, 46.927, 47.127, 47.048, 46.964, 47.286, 47.462, 47.512, 41.454, 39.392, 38.377, 38.768, 38.102, 37.839, 38.041, 37.922, 38.51, 39.245, 39.294, 40.035, 39.624, 38.775, 35.871]
},{
		name: 'EDVR_woTSA',
		data: [52.217, 52.845, 50.637, 46.103, 46.421, 46.305, 45.699, 45.973, 45.321, 44.661, 45.226, 44.849, 44.835, 44.445, 44.694, 41.47, 38.943, 38.142, 38.074, 37.816, 36.88, 38.041, 37.357, 37.932, 39.456, 38.605, 39.295, 39.248, 37.818, 35.854]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [32.962, 40.362, 45.358, 30.85, 44.063, 29.376, 43.441, 29.61, 42.912, 27.933, 42.115, 30.794, 41.642, 33.793, 40.996, 26.602, 38.132, 22.502, 37.424, 20.321, 37.028, 19.558, 37.164, 21.617, 38.032, 23.39, 38.3, 24.154, 37.612, 23.131]
},{
		name: 'MFDIN',
		data: [50.009, 51.938, 49.896, 48.592, 47.82, 47.701, 47.885, 47.657, 47.621, 46.952, 47.259, 47.123, 46.744, 47.014, 47.057, 43.34, 41.57, 40.748, 40.812, 40.056, 40.309, 40.576, 40.771, 41.021, 41.592, 42.028, 42.433, 42.387, 41.618, 40.406]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [51.766, 49.89, 48.973, 48.362, 47.775, 47.445, 47.44, 47.659, 47.917, 47.194, 47.586, 47.65, 47.349, 47.595, 47.774, 43.98, 41.741, 40.972, 41.05, 40.377, 40.48, 40.747, 41.023, 41.564, 42.276, 42.403, 42.795, 42.671, 41.989, 41.11]
},{
		name: 'Muksun Deinterlacer',
		data: [44.375, 49.328, 47.456, 46.299, 45.515, 44.993, 44.703, 44.347, 44.396, 44.009, 43.984, 43.931, 43.561, 43.473, 43.361, 41.339, 39.178, 38.9, 38.679, 38.326, 38.225, 38.425, 38.685, 39.247, 39.729, 40.016, 40.256, 40.204, 39.893, 39.224]
},{
		name: 'Kernel Deinterlacer',
		data: [53.477, 49.624, 47.71, 46.516, 45.699, 45.143, 45.016, 44.652, 44.705, 44.268, 44.299, 44.432, 44.245, 44.321, 44.362, 41.81, 40.116, 39.589, 39.437, 38.928, 38.757, 39.068, 39.386, 40.089, 40.577, 40.757, 41.023, 40.835, 40.296, 39.759]
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