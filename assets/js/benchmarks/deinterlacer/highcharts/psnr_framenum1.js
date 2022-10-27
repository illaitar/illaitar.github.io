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
                text: 'PSNR to Frame Number: Sequence # 1'
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
		data: [50.308, 46.962, 44.851, 42.988, 41.207, 39.677, 38.32, 37.175, 36.23, 35.793, 35.715, 35.762, 35.727, 35.758, 35.819, 35.777, 35.752, 35.776, 35.702, 35.735, 35.756, 35.77, 35.641, 35.642, 35.53, 35.472, 35.764, 35.868, 35.896, 35.93]
},{
		name: 'ST-Deint',
		data: [54.651, 48.625, 47.451, 44.686, 43.722, 41.337, 40.696, 38.813, 38.41, 37.359, 37.525, 37.388, 37.391, 37.393, 37.547, 37.456, 37.488, 37.474, 37.39, 37.442, 37.446, 37.528, 37.445, 37.425, 37.373, 37.169, 37.235, 37.55, 37.58, 37.6]
},{
		name: 'PAL Interpolation',
		data: [40.066, 39.203, 38.423, 37.493, 36.536, 35.464, 34.38, 33.464, 32.613, 32.311, 32.016, 32.077, 32.065, 32.024, 32.013, 31.985, 31.957, 32.077, 32.0, 32.026, 31.97, 31.966, 31.8, 31.855, 31.688, 31.753, 31.981, 32.171, 32.162, 32.285]
},{
		name: 'SonyVegas Blend Field',
		data: [41.662, 39.046, 37.148, 35.761, 33.966, 32.481, 31.359, 30.367, 29.513, 28.877, 29.506, 29.505, 28.971, 29.532, 29.683, 29.724, 29.107, 29.784, 29.653, 29.665, 29.927, 29.903, 30.098, 30.03, 29.785, 29.305, 29.005, 28.656, 29.266, 29.376]
},{
		name: 'Vapoursynth EEDI3',
		data: [50.595, 47.076, 44.911, 43.03, 41.208, 39.627, 38.213, 37.03, 36.067, 35.62, 35.497, 35.487, 35.457, 35.476, 35.541, 35.496, 35.481, 35.499, 35.424, 35.446, 35.429, 35.482, 35.298, 35.312, 35.205, 35.162, 35.473, 35.583, 35.619, 35.706]
},{
		name: 'TDAN',
		data: [47.067, 46.243, 44.371, 42.214, 40.928, 39.387, 38.018, 36.785, 36.205, 35.641, 35.713, 35.733, 35.694, 35.879, 36.056, 35.973, 35.808, 36.072, 35.894, 36.051, 36.151, 35.958, 36.177, 36.154, 35.621, 35.304, 35.095, 35.009, 35.405, 34.16]
},{
		name: 'Bob',
		data: [50.267, 46.762, 44.554, 42.633, 40.807, 39.239, 37.84, 36.675, 35.662, 35.238, 35.088, 35.071, 35.022, 35.037, 35.11, 35.049, 35.047, 35.052, 34.976, 34.972, 34.973, 35.018, 34.825, 34.813, 34.743, 34.673, 35.008, 35.152, 35.193, 35.315]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [45.293, 43.079, 41.575, 40.115, 38.759, 37.362, 36.127, 35.066, 34.082, 33.63, 33.572, 33.569, 33.469, 33.515, 33.452, 33.528, 33.397, 33.593, 33.441, 33.522, 33.517, 33.516, 33.347, 33.324, 33.079, 33.128, 33.366, 33.58, 33.579, 33.8]
},{
		name: 'DfRes SA',
		data: [50.97, 47.712, 45.661, 43.737, 42.049, 40.575, 39.207, 38.049, 37.11, 36.639, 36.654, 36.647, 36.493, 36.851, 36.911, 36.924, 36.804, 37.085, 36.997, 37.038, 37.058, 36.899, 36.998, 36.989, 36.551, 36.529, 36.712, 36.629, 36.816, 34.165]
},{
		name: 'DfRes 122000 G2e 3',
		data: [50.811, 47.643, 45.588, 43.617, 41.997, 40.5, 39.113, 38.004, 37.045, 36.52, 36.601, 36.559, 36.385, 36.714, 36.877, 36.827, 36.656, 36.984, 36.869, 36.964, 37.019, 36.764, 36.92, 36.899, 36.45, 36.435, 36.623, 36.535, 36.7, 33.275]
},{
		name: 'SwinDI',
		data: [51.118, 47.863, 45.928, 44.042, 42.264, 40.665, 39.124, 38.035, 37.141, 36.562, 36.373, 36.662, 36.619, 36.824, 36.775, 36.667, 36.51, 36.847, 36.655, 36.686, 36.658, 36.789, 36.536, 36.259, 36.677, 36.631, 36.833, 36.874, 36.934, 37.084]
},{
		name: 'YADIF',
		data: [49.303, 45.953, 43.729, 41.776, 40.083, 38.516, 37.073, 35.903, 34.95, 34.528, 34.389, 34.443, 34.427, 34.471, 34.611, 34.513, 34.496, 34.6, 34.548, 34.693, 34.608, 34.606, 34.545, 34.538, 34.289, 34.372, 34.622, 34.706, 34.842, 34.568]
},{
		name: 'SonyVegas Interpolate Field',
		data: [50.261, 46.758, 44.551, 42.634, 40.806, 39.24, 37.841, 36.675, 35.663, 35.237, 35.088, 35.072, 35.022, 35.036, 35.11, 35.048, 35.048, 35.052, 34.976, 34.972, 34.973, 35.017, 34.826, 34.813, 34.743, 34.673, 35.007, 35.152, 35.194, 35.316]
},{
		name: 'EDVR',
		data: [48.849, 46.966, 44.705, 42.464, 41.411, 39.962, 38.656, 37.588, 36.608, 36.094, 35.798, 36.196, 35.962, 36.276, 36.397, 36.366, 36.253, 36.507, 36.291, 36.263, 36.492, 36.257, 36.386, 36.446, 35.979, 35.913, 35.955, 36.031, 35.646, 31.104]
},{
		name: 'MFDIN L',
		data: [51.782, 48.692, 46.601, 44.649, 42.983, 41.54, 40.242, 39.11, 38.092, 37.511, 37.543, 37.528, 37.418, 37.81, 37.896, 37.946, 37.743, 38.033, 37.899, 38.009, 37.969, 37.746, 37.913, 37.896, 37.411, 37.407, 37.54, 37.448, 37.614, 37.356]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [39.231, 36.655, 34.747, 33.471, 31.63, 30.158, 29.051, 28.108, 27.266, 26.546, 27.315, 27.299, 26.677, 27.338, 27.515, 27.606, 26.793, 27.63, 27.508, 27.506, 27.863, 27.79, 28.107, 28.028, 27.75, 27.112, 26.662, 26.267, 26.971, 27.064]
},{
		name: 'MSU Deinterlacer',
		data: [49.183, 46.319, 44.328, 42.398, 40.807, 39.413, 38.141, 37.029, 36.051, 35.445, 35.483, 35.377, 35.179, 35.544, 35.628, 35.633, 35.37, 35.773, 35.704, 35.757, 35.816, 35.521, 35.633, 35.696, 35.225, 35.226, 35.406, 35.378, 35.68, 35.233]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [45.258, 43.622, 42.296, 40.919, 39.548, 38.164, 36.842, 35.759, 34.798, 34.374, 34.243, 34.304, 34.298, 34.284, 34.328, 34.301, 34.323, 34.341, 34.289, 34.39, 34.304, 34.363, 34.225, 34.214, 34.081, 34.15, 34.456, 34.532, 34.665, 34.806]
},{
		name: 'Vapoursynth TDeintMod',
		data: [49.61, 46.543, 44.438, 42.519, 40.706, 39.151, 37.784, 36.604, 35.654, 35.236, 35.104, 35.106, 35.072, 35.08, 35.153, 35.101, 35.078, 35.122, 35.016, 35.026, 35.014, 35.071, 34.87, 34.873, 34.797, 34.724, 35.024, 35.152, 35.173, 35.236]
},{
		name: 'DfRes',
		data: [51.151, 47.851, 45.488, 43.626, 41.927, 40.475, 39.028, 37.938, 36.971, 36.408, 36.398, 36.308, 36.268, 36.462, 36.51, 36.562, 36.484, 36.662, 36.52, 36.535, 36.584, 36.457, 36.461, 36.425, 36.165, 36.14, 36.315, 36.346, 36.425, 36.29]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [50.261, 46.531, 44.355, 42.471, 40.679, 39.117, 37.712, 36.54, 35.54, 35.107, 34.938, 34.906, 34.836, 34.847, 34.937, 34.89, 34.87, 34.877, 34.82, 34.855, 34.847, 34.863, 34.68, 34.689, 34.599, 34.496, 34.818, 34.912, 35.003, 35.068]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [49.432, 46.376, 44.105, 42.191, 40.415, 38.823, 37.384, 36.204, 35.195, 34.754, 34.644, 34.588, 34.533, 34.565, 34.638, 34.618, 34.502, 34.622, 34.538, 34.568, 34.546, 34.576, 34.51, 34.465, 34.284, 34.2, 34.416, 34.591, 34.663, 34.772]
},{
		name: 'FLAD',
		data: [51.889, 48.726, 46.605, 44.601, 42.836, 41.377, 40.043, 38.924, 37.981, 37.345, 37.434, 37.42, 37.281, 37.632, 37.732, 37.774, 37.528, 37.869, 37.773, 37.814, 37.857, 37.63, 37.752, 37.779, 37.316, 37.317, 37.471, 37.319, 37.53, 37.311]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [49.445, 46.222, 44.048, 42.088, 40.403, 38.886, 37.49, 36.309, 35.372, 34.977, 34.986, 34.976, 34.891, 35.013, 35.114, 35.04, 34.946, 35.112, 35.032, 35.064, 35.066, 34.985, 35.067, 34.985, 34.649, 34.617, 34.841, 34.996, 35.098, 35.132]
},{
		name: 'DUF',
		data: [48.303, 46.451, 44.56, 42.276, 40.803, 39.585, 38.148, 36.933, 36.071, 35.456, 35.664, 35.722, 35.346, 35.931, 36.206, 36.014, 35.734, 36.262, 35.965, 36.032, 36.164, 35.955, 36.277, 36.223, 35.462, 35.02, 34.916, 35.003, 35.328, 31.965]
},{
		name: 'EDVR_woTSA',
		data: [49.594, 46.65, 44.595, 43.044, 41.449, 39.72, 38.194, 37.217, 36.519, 36.143, 36.256, 36.209, 35.67, 36.255, 36.489, 36.302, 35.81, 36.375, 36.31, 36.608, 36.543, 36.431, 36.546, 36.592, 36.09, 35.913, 36.132, 36.111, 36.312, 32.034]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [38.693, 33.995, 41.866, 30.534, 39.023, 27.339, 36.148, 25.361, 33.974, 23.9, 33.393, 24.661, 33.397, 24.693, 33.41, 24.983, 33.154, 25.038, 33.14, 24.937, 33.113, 25.246, 33.119, 25.427, 33.026, 24.577, 33.184, 23.651, 33.47, 24.507]
},{
		name: 'MFDIN',
		data: [48.89, 46.352, 44.469, 42.725, 41.213, 39.814, 38.551, 37.437, 36.531, 35.965, 36.029, 36.049, 35.909, 36.119, 36.183, 36.222, 36.077, 36.302, 36.219, 36.253, 36.3, 36.065, 36.229, 36.207, 35.763, 35.81, 36.014, 35.898, 36.074, 35.863]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [50.373, 46.908, 44.841, 42.997, 41.209, 39.661, 38.3, 37.176, 36.206, 35.757, 35.705, 35.744, 35.742, 35.797, 35.835, 35.801, 35.774, 35.845, 35.757, 35.828, 35.786, 35.865, 35.7, 35.736, 35.595, 35.53, 35.765, 35.879, 35.909, 35.986]
},{
		name: 'Muksun Deinterlacer',
		data: [45.258, 43.622, 42.296, 40.919, 39.548, 38.164, 36.842, 35.759, 34.798, 34.374, 34.243, 34.304, 34.298, 34.284, 34.328, 34.301, 34.323, 34.341, 34.289, 34.39, 34.304, 34.363, 34.225, 34.214, 34.081, 34.15, 34.456, 34.532, 34.665, 34.806]
},{
		name: 'Kernel Deinterlacer',
		data: [50.261, 45.169, 43.491, 41.923, 40.274, 38.85, 37.51, 36.384, 35.412, 34.957, 34.8, 34.777, 34.695, 34.702, 34.797, 34.756, 34.719, 34.728, 34.676, 34.714, 34.702, 34.711, 34.533, 34.539, 34.455, 34.338, 34.663, 34.669, 34.81, 34.89]
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