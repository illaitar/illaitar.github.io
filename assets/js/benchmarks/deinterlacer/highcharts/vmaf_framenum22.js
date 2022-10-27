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
                text: 'VMAF to Frame Number: Sequence # 22'
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
		data: [98.662, 99.679, 99.758, 100.0, 99.909, 99.954, 100.0, 99.891, 99.923, 99.98, 100.0, 100.0, 99.912, 99.816, 99.807, 99.903, 99.879, 99.848, 99.822, 99.666, 99.715, 99.736, 99.795, 99.589, 99.608, 99.683, 99.724, 99.858, 99.746, 99.793]
},{
		name: 'ST-Deint',
		data: [97.9, 96.368, 98.458, 95.914, 98.493, 96.073, 98.469, 95.904, 98.261, 95.434, 98.696, 96.293, 98.59, 96.244, 98.542, 95.505, 98.388, 96.142, 98.453, 96.322, 98.5, 95.961, 98.45, 96.228, 98.537, 96.296, 98.545, 95.965, 98.5, 96.378]
},{
		name: 'PAL Interpolation',
		data: [94.363, 95.929, 95.928, 96.506, 96.014, 95.79, 96.069, 96.179, 95.884, 96.186, 96.406, 96.2, 96.087, 95.82, 95.746, 95.239, 94.809, 94.737, 94.998, 95.183, 95.867, 95.858, 95.909, 95.745, 95.992, 96.047, 95.96, 96.061, 95.954, 95.96]
},{
		name: 'SonyVegas Blend Field',
		data: [81.459, 82.902, 82.361, 81.443, 81.339, 80.904, 80.194, 79.934, 80.789, 81.887, 79.952, 80.728, 81.082, 82.547, 81.525, 82.237, 81.841, 82.461, 82.489, 82.557, 82.754, 82.775, 82.639, 82.715, 82.752, 82.773, 82.834, 82.896, 82.631, 82.853]
},{
		name: 'Vapoursynth EEDI3',
		data: [99.514, 99.544, 99.607, 99.683, 99.705, 99.741, 99.72, 99.798, 99.616, 99.751, 99.798, 99.895, 99.725, 99.606, 99.714, 99.695, 99.661, 99.581, 99.641, 99.564, 99.512, 99.582, 99.561, 99.552, 99.51, 99.574, 99.611, 99.572, 99.578, 99.89]
},{
		name: 'TDAN',
		data: [98.039, 97.661, 97.705, 97.855, 97.742, 97.77, 97.438, 98.077, 97.852, 98.029, 97.679, 97.439, 97.634, 97.726, 97.877, 97.869, 97.775, 97.764, 97.757, 97.638, 97.669, 97.695, 97.633, 97.697, 97.658, 97.655, 97.689, 97.699, 97.591, 98.588]
},{
		name: 'Bob',
		data: [97.518, 97.532, 97.587, 97.667, 97.723, 97.731, 97.688, 97.799, 97.675, 97.746, 97.839, 97.868, 97.69, 97.623, 97.777, 97.647, 97.614, 97.588, 97.577, 97.499, 97.539, 97.501, 97.49, 97.503, 97.519, 97.512, 97.513, 97.483, 97.474, 97.802]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [96.017, 97.136, 97.032, 97.345, 97.087, 97.382, 97.103, 96.999, 96.887, 97.092, 97.304, 97.593, 97.144, 97.18, 96.923, 96.861, 96.625, 96.812, 96.837, 96.818, 97.084, 96.986, 97.016, 97.109, 97.097, 97.108, 97.115, 97.104, 97.022, 97.273]
},{
		name: 'DfRes SA',
		data: [98.041, 97.923, 97.986, 98.138, 98.124, 98.253, 98.204, 98.297, 98.126, 98.37, 98.324, 98.319, 98.098, 98.014, 98.167, 98.131, 98.062, 98.021, 98.024, 97.924, 97.938, 97.943, 97.894, 97.898, 97.899, 97.911, 97.92, 97.912, 97.882, 95.814]
},{
		name: 'DfRes 122000 G2e 3',
		data: [98.084, 97.873, 97.932, 98.072, 98.102, 98.205, 98.12, 98.249, 98.107, 98.292, 98.237, 98.266, 98.025, 97.966, 98.113, 98.072, 98.006, 97.977, 97.969, 97.858, 97.914, 97.901, 97.848, 97.853, 97.855, 97.859, 97.896, 97.877, 97.841, 95.845]
},{
		name: 'SwinDI',
		data: [98.679, 99.506, 99.571, 99.918, 99.998, 99.978, 100.0, 99.829, 99.927, 99.995, 100.0, 100.0, 99.753, 99.815, 99.91, 99.999, 99.896, 99.933, 99.751, 99.69, 99.646, 99.875, 99.877, 99.61, 99.645, 99.665, 99.565, 99.737, 99.705, 99.753]
},{
		name: 'YADIF',
		data: [97.613, 97.607, 97.63, 97.738, 97.78, 97.812, 97.8, 97.927, 97.744, 97.837, 97.818, 97.928, 97.725, 97.639, 97.731, 97.601, 97.555, 97.58, 97.657, 97.592, 97.575, 97.572, 97.565, 97.63, 97.648, 97.632, 97.618, 97.618, 97.59, 97.916]
},{
		name: 'SonyVegas Interpolate Field',
		data: [96.895, 97.872, 97.986, 98.177, 98.253, 98.224, 98.197, 98.208, 98.208, 98.205, 98.396, 98.406, 98.096, 98.083, 98.181, 98.245, 98.123, 98.049, 97.999, 97.897, 97.902, 97.956, 97.948, 97.892, 97.898, 97.894, 97.897, 97.939, 97.916, 97.88]
},{
		name: 'EDVR',
		data: [97.986, 97.98, 98.034, 98.25, 98.226, 98.337, 98.094, 98.373, 98.104, 98.3, 98.357, 98.34, 98.132, 98.028, 98.149, 98.186, 98.115, 98.074, 98.026, 97.955, 97.965, 98.043, 97.973, 97.99, 97.949, 97.977, 97.98, 98.015, 97.901, 84.154]
},{
		name: 'MFDIN L',
		data: [97.555, 98.509, 98.641, 98.97, 98.893, 98.979, 98.979, 98.934, 98.957, 99.132, 99.053, 99.097, 98.726, 98.736, 98.806, 98.977, 98.739, 98.694, 98.639, 98.555, 98.549, 98.704, 98.577, 98.536, 98.516, 98.513, 98.582, 98.707, 98.554, 98.588]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [95.446, 97.054, 96.387, 95.29, 95.312, 94.879, 94.029, 93.708, 94.619, 95.581, 93.84, 94.778, 95.055, 96.578, 95.348, 95.97, 95.707, 96.432, 96.461, 96.626, 96.912, 96.741, 96.826, 96.841, 96.929, 96.959, 97.004, 96.953, 96.858, 97.089]
},{
		name: 'MSU Deinterlacer',
		data: [95.346, 97.03, 97.175, 97.358, 97.292, 97.428, 97.277, 97.429, 97.287, 97.414, 97.453, 97.55, 97.383, 97.311, 97.389, 97.299, 97.147, 97.225, 97.296, 97.162, 97.244, 97.231, 97.14, 97.244, 97.231, 97.219, 97.258, 97.3, 97.193, 94.393]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [96.02, 97.109, 97.041, 97.251, 97.235, 97.45, 97.306, 97.408, 97.285, 97.435, 97.445, 97.616, 97.166, 97.191, 97.134, 97.166, 96.972, 97.101, 97.099, 96.922, 97.069, 96.993, 96.964, 97.09, 97.046, 97.037, 97.088, 97.096, 97.023, 97.226]
},{
		name: 'Vapoursynth TDeintMod',
		data: [97.92, 97.467, 97.432, 97.52, 97.381, 97.486, 97.571, 97.787, 97.679, 97.793, 97.787, 97.587, 97.426, 97.41, 97.436, 97.444, 97.433, 97.182, 97.25, 97.117, 97.206, 97.085, 97.092, 97.083, 97.11, 97.071, 97.129, 97.179, 97.257, 97.715]
},{
		name: 'DfRes',
		data: [97.66, 97.736, 97.829, 97.916, 97.907, 97.957, 97.926, 98.009, 97.817, 98.042, 98.042, 98.081, 97.855, 97.833, 97.882, 97.849, 97.839, 97.802, 97.792, 97.7, 97.751, 97.768, 97.749, 97.706, 97.753, 97.791, 97.764, 97.778, 97.791, 98.098]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [96.839, 98.005, 98.077, 98.401, 98.306, 98.4, 98.278, 98.274, 98.255, 98.513, 98.432, 98.477, 98.139, 98.21, 98.287, 98.463, 98.211, 98.157, 98.124, 98.016, 97.99, 98.229, 98.086, 98.125, 98.071, 98.062, 98.161, 98.257, 98.043, 98.056]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [98.883, 98.966, 98.981, 99.064, 99.121, 99.096, 99.063, 99.182, 99.084, 99.148, 99.159, 99.294, 99.113, 99.046, 99.216, 99.05, 99.019, 99.028, 99.007, 98.935, 99.011, 98.995, 98.977, 98.911, 98.952, 98.952, 98.926, 98.997, 98.946, 99.264]
},{
		name: 'FLAD',
		data: [98.603, 98.611, 98.679, 98.834, 98.791, 98.902, 98.847, 98.976, 98.808, 99.052, 98.945, 98.995, 98.779, 98.658, 98.825, 98.793, 98.694, 98.681, 98.679, 98.612, 98.669, 98.633, 98.572, 98.594, 98.587, 98.597, 98.631, 98.606, 98.544, 98.767]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [98.498, 98.705, 98.757, 98.881, 98.903, 98.988, 98.928, 99.147, 98.986, 99.014, 99.023, 98.996, 98.82, 98.785, 98.972, 98.894, 98.802, 98.77, 98.75, 98.663, 98.724, 98.702, 98.657, 98.682, 98.663, 98.67, 98.738, 98.692, 98.62, 100.0]
},{
		name: 'DUF',
		data: [97.839, 97.998, 98.042, 98.147, 98.14, 98.244, 98.019, 98.34, 98.121, 98.265, 98.174, 98.192, 98.065, 98.061, 98.21, 98.126, 98.086, 98.109, 98.057, 97.947, 98.002, 98.003, 97.948, 98.0, 97.993, 98.012, 98.038, 98.039, 97.96, 85.728]
},{
		name: 'EDVR_woTSA',
		data: [98.003, 97.563, 97.583, 97.774, 97.715, 97.889, 97.807, 97.939, 97.553, 97.958, 97.934, 97.91, 97.703, 97.594, 97.732, 97.753, 97.715, 97.728, 97.655, 97.531, 97.595, 97.631, 97.549, 97.518, 97.508, 97.534, 97.58, 97.59, 97.511, 88.785]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [95.19, 94.704, 97.189, 91.967, 97.438, 91.579, 97.248, 89.965, 97.314, 92.27, 97.537, 91.553, 97.372, 93.687, 97.384, 91.95, 97.409, 92.962, 97.444, 93.557, 97.341, 93.725, 97.357, 94.014, 97.358, 94.337, 97.371, 94.165, 97.357, 94.659]
},{
		name: 'MFDIN',
		data: [96.267, 97.236, 97.337, 97.529, 97.516, 97.694, 97.608, 97.698, 97.548, 97.681, 97.733, 97.78, 97.385, 97.421, 97.361, 97.444, 97.258, 97.307, 97.276, 97.176, 97.205, 97.281, 97.207, 97.259, 97.211, 97.217, 97.22, 97.292, 97.209, 96.989]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [98.462, 98.561, 98.426, 98.625, 98.615, 98.666, 98.695, 98.694, 98.596, 98.827, 98.831, 98.927, 98.609, 98.583, 98.737, 98.662, 98.713, 98.612, 98.612, 98.43, 98.546, 98.565, 98.572, 98.522, 98.393, 98.5, 98.614, 98.52, 98.511, 98.816]
},{
		name: 'Muksun Deinterlacer',
		data: [96.02, 97.109, 97.041, 97.251, 97.235, 97.45, 97.306, 97.408, 97.285, 97.435, 97.445, 97.616, 97.166, 97.191, 97.134, 97.166, 96.972, 97.101, 97.099, 96.922, 97.069, 96.993, 96.964, 97.09, 97.046, 97.037, 97.088, 97.096, 97.023, 97.226]
},{
		name: 'Kernel Deinterlacer',
		data: [96.839, 97.408, 97.46, 97.602, 97.604, 97.831, 97.678, 97.71, 97.653, 97.797, 97.771, 97.917, 97.544, 97.616, 97.641, 97.673, 97.525, 97.59, 97.518, 97.364, 97.346, 97.429, 97.338, 97.488, 97.384, 97.37, 97.417, 97.424, 97.348, 97.497]
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