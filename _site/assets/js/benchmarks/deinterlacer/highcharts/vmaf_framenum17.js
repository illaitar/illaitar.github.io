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
                text: 'VMAF to Frame Number: Sequence # 17'
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
		data: [91.412, 98.01, 98.016, 97.324, 96.844, 94.938, 94.918, 94.356, 94.108, 96.346, 97.939, 97.661, 99.593, 97.654, 97.991, 99.342, 99.481, 99.224, 97.961, 98.787, 99.045, 97.669, 97.769, 98.872, 95.921, 96.033, 98.77, 99.467, 99.104, 99.42]
},{
		name: 'ST-Deint',
		data: [94.744, 98.038, 99.683, 97.357, 99.215, 96.028, 97.522, 95.415, 98.03, 97.487, 99.13, 98.371, 100.0, 96.975, 98.989, 98.94, 99.657, 98.445, 99.429, 97.853, 98.874, 97.253, 99.317, 98.741, 100.0, 97.313, 99.374, 99.048, 100.0, 100.0]
},{
		name: 'PAL Interpolation',
		data: [82.791, 82.608, 82.655, 81.767, 81.333, 78.935, 79.251, 80.836, 81.988, 82.698, 81.202, 81.304, 82.926, 81.234, 82.366, 82.867, 84.426, 84.567, 83.155, 83.306, 83.388, 81.919, 82.371, 82.831, 81.19, 85.163, 85.364, 85.265, 84.006, 86.06]
},{
		name: 'SonyVegas Blend Field',
		data: [34.983, 34.351, 29.566, 38.348, 43.316, 59.252, 72.88, 68.178, 76.548, 67.623, 58.404, 58.49, 53.898, 46.949, 44.945, 27.529, 23.986, 20.807, 24.817, 30.137, 36.583, 42.781, 45.041, 46.827, 59.829, 65.64, 51.397, 41.219, 40.438, 54.57]
},{
		name: 'Vapoursynth EEDI3',
		data: [94.859, 94.748, 94.867, 94.426, 94.197, 92.809, 92.326, 92.192, 92.086, 94.025, 94.301, 94.576, 95.596, 94.192, 94.363, 95.92, 95.733, 95.387, 94.453, 94.997, 95.147, 93.981, 94.076, 95.263, 93.156, 93.7, 95.558, 95.495, 95.404, 95.289]
},{
		name: 'TDAN',
		data: [92.761, 97.885, 98.083, 97.944, 98.044, 96.673, 96.182, 96.241, 96.722, 97.972, 98.057, 97.989, 98.84, 97.871, 97.962, 98.412, 96.589, 95.986, 96.171, 97.718, 98.74, 97.564, 97.798, 99.619, 98.11, 97.906, 98.715, 97.359, 97.096, 96.203]
},{
		name: 'Bob',
		data: [91.354, 91.403, 91.476, 91.051, 90.688, 89.372, 88.969, 88.833, 88.846, 90.53, 90.738, 91.31, 92.151, 90.842, 90.931, 92.327, 92.369, 92.13, 91.331, 91.672, 91.641, 90.641, 90.777, 91.686, 89.744, 90.218, 92.185, 92.189, 91.951, 91.982]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [86.864, 93.128, 92.601, 92.462, 91.913, 90.217, 89.784, 88.524, 91.819, 91.662, 91.895, 92.498, 93.829, 92.155, 93.363, 93.243, 93.591, 93.263, 92.633, 92.986, 93.952, 93.101, 92.911, 94.049, 92.974, 92.511, 92.813, 93.941, 93.424, 95.501]
},{
		name: 'DfRes SA',
		data: [99.524, 99.846, 100.0, 99.272, 99.002, 97.599, 97.235, 97.173, 96.974, 98.652, 98.973, 99.299, 100.0, 99.125, 99.201, 100.0, 100.0, 100.0, 99.238, 100.0, 100.0, 98.978, 99.203, 100.0, 98.868, 99.033, 100.0, 100.0, 100.0, 96.688]
},{
		name: 'DfRes 122000 G2e 3',
		data: [99.147, 99.576, 99.884, 98.952, 98.739, 97.359, 97.061, 96.966, 96.783, 98.595, 98.882, 99.044, 99.783, 98.734, 98.917, 100.0, 99.907, 99.988, 98.811, 99.633, 99.745, 98.545, 98.891, 100.0, 98.61, 98.866, 100.0, 100.0, 99.883, 96.132]
},{
		name: 'SwinDI',
		data: [94.183, 100.0, 100.0, 100.0, 99.398, 97.605, 97.754, 97.058, 96.611, 98.861, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.775, 99.154, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'YADIF',
		data: [93.497, 93.675, 93.877, 93.566, 93.599, 92.916, 92.512, 92.467, 92.592, 93.701, 93.889, 94.128, 94.889, 93.63, 93.53, 94.018, 93.977, 93.93, 92.764, 93.881, 94.33, 93.407, 93.578, 94.509, 93.517, 93.59, 95.255, 94.784, 94.844, 95.578]
},{
		name: 'SonyVegas Interpolate Field',
		data: [86.985, 93.711, 93.622, 93.1, 92.361, 90.458, 90.514, 90.031, 89.937, 91.903, 93.344, 93.389, 95.128, 93.264, 93.453, 94.604, 95.063, 94.87, 93.924, 94.411, 94.384, 93.408, 93.444, 94.213, 91.483, 91.651, 94.226, 94.927, 94.477, 94.936]
},{
		name: 'EDVR',
		data: [92.697, 99.65, 99.813, 99.002, 98.434, 93.523, 93.594, 95.737, 96.88, 98.032, 97.812, 96.805, 97.549, 95.017, 98.575, 99.878, 99.24, 98.703, 98.527, 99.169, 99.784, 98.137, 98.185, 99.626, 98.507, 98.176, 99.101, 98.296, 94.718, 88.515]
},{
		name: 'MFDIN L',
		data: [94.811, 100.0, 100.0, 100.0, 100.0, 98.097, 98.475, 98.095, 97.999, 99.812, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [40.006, 39.194, 34.34, 43.133, 48.566, 66.284, 82.388, 76.989, 87.22, 75.78, 65.42, 65.553, 60.17, 52.905, 50.496, 32.469, 28.635, 25.471, 29.849, 34.915, 41.736, 48.168, 50.7, 52.971, 67.967, 75.226, 58.535, 47.952, 46.446, 61.317]
},{
		name: 'MSU Deinterlacer',
		data: [92.92, 95.295, 95.602, 94.766, 93.995, 92.814, 92.704, 92.956, 93.325, 94.56, 94.254, 95.292, 95.428, 94.465, 94.734, 96.524, 95.383, 95.497, 94.408, 94.442, 95.231, 93.679, 94.314, 95.063, 94.27, 94.364, 95.827, 95.129, 95.247, 91.778]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [83.248, 89.589, 89.467, 89.338, 88.429, 86.938, 87.8, 86.955, 87.987, 88.913, 89.545, 89.965, 91.224, 89.201, 90.003, 90.58, 90.848, 90.94, 89.933, 90.6, 90.749, 89.824, 89.936, 90.442, 88.725, 89.068, 90.46, 90.364, 90.43, 91.149]
},{
		name: 'Vapoursynth TDeintMod',
		data: [97.683, 97.773, 98.075, 97.624, 97.587, 96.581, 96.277, 96.124, 96.091, 97.995, 97.994, 98.136, 98.713, 97.571, 97.476, 98.987, 98.802, 98.421, 97.463, 97.971, 98.262, 97.087, 97.222, 98.616, 96.563, 97.152, 99.153, 99.08, 98.385, 98.333]
},{
		name: 'DfRes',
		data: [94.295, 94.963, 94.936, 94.253, 93.76, 92.079, 92.022, 92.018, 92.133, 93.691, 93.943, 94.495, 94.796, 93.741, 94.365, 96.035, 95.381, 95.531, 94.185, 94.789, 95.23, 93.699, 94.294, 95.35, 93.425, 93.472, 95.299, 94.971, 94.26, 94.587]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [86.974, 94.589, 94.571, 93.841, 92.952, 91.19, 91.216, 90.669, 91.057, 93.743, 94.187, 94.404, 95.764, 93.874, 94.388, 95.262, 95.596, 95.353, 94.496, 94.707, 95.043, 94.296, 94.339, 94.998, 92.536, 93.611, 94.709, 95.623, 94.943, 95.519]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [93.186, 93.538, 93.736, 93.249, 92.74, 91.596, 91.234, 90.714, 91.463, 93.374, 92.754, 93.453, 94.047, 92.625, 93.309, 94.476, 94.521, 94.109, 93.433, 93.587, 93.915, 92.823, 92.851, 94.082, 92.652, 93.553, 93.303, 93.83, 93.517, 94.381]
},{
		name: 'FLAD',
		data: [98.81, 99.122, 99.436, 98.564, 98.22, 96.688, 96.468, 96.458, 96.446, 98.023, 98.27, 98.479, 99.326, 98.278, 98.615, 100.0, 99.731, 99.702, 98.59, 99.228, 99.498, 98.177, 98.482, 99.7, 98.046, 98.218, 99.752, 100.0, 99.296, 99.327]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [96.965, 97.888, 98.0, 97.64, 97.829, 96.672, 96.225, 96.035, 96.167, 97.818, 97.971, 97.933, 99.015, 97.672, 97.572, 98.322, 98.045, 97.781, 96.911, 97.818, 98.352, 97.336, 97.413, 98.878, 97.404, 97.712, 98.989, 98.565, 98.716, 97.405]
},{
		name: 'DUF',
		data: [96.349, 98.754, 98.656, 98.263, 98.182, 96.944, 96.377, 96.699, 96.829, 98.22, 98.387, 98.468, 99.592, 98.251, 98.091, 99.129, 98.102, 98.045, 97.465, 97.989, 99.337, 98.137, 98.099, 99.704, 98.377, 98.287, 99.613, 99.136, 98.62, 88.579]
},{
		name: 'EDVR_woTSA',
		data: [99.068, 99.782, 100.0, 99.2, 98.831, 97.188, 95.771, 96.788, 96.878, 98.467, 98.785, 98.66, 99.505, 98.69, 98.888, 100.0, 99.986, 100.0, 99.079, 99.855, 100.0, 98.761, 98.843, 99.969, 98.555, 98.757, 99.894, 99.126, 97.92, 88.539]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [39.665, 28.455, 51.935, 34.27, 60.574, 55.495, 89.69, 62.431, 93.583, 58.683, 94.273, 45.993, 93.73, 33.365, 88.057, 14.199, 81.305, 8.506, 75.507, 18.377, 77.812, 31.389, 79.782, 35.742, 88.503, 59.628, 92.823, 28.756, 88.142, 43.922]
},{
		name: 'MFDIN',
		data: [90.472, 97.738, 97.887, 96.208, 94.974, 93.963, 95.063, 94.65, 95.05, 96.029, 96.728, 97.328, 98.161, 96.495, 96.632, 98.378, 98.552, 99.117, 98.095, 98.29, 97.674, 96.876, 97.411, 97.827, 96.262, 96.958, 98.63, 98.687, 97.815, 97.28]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [95.621, 95.703, 95.975, 95.194, 94.983, 93.458, 92.988, 92.963, 92.815, 94.736, 94.889, 95.225, 96.284, 95.031, 95.578, 96.889, 96.785, 96.52, 95.55, 96.096, 96.317, 95.032, 95.106, 96.484, 94.254, 94.326, 96.521, 96.711, 96.626, 96.442]
},{
		name: 'Muksun Deinterlacer',
		data: [83.248, 89.589, 89.467, 89.338, 88.429, 86.938, 87.8, 86.955, 87.987, 88.913, 89.545, 89.965, 91.224, 89.201, 90.003, 90.58, 90.848, 90.94, 89.933, 90.6, 90.749, 89.824, 89.936, 90.442, 88.725, 89.068, 90.46, 90.364, 90.43, 91.149]
},{
		name: 'Kernel Deinterlacer',
		data: [86.974, 94.576, 94.423, 93.852, 93.093, 91.658, 91.955, 91.573, 92.186, 94.19, 94.277, 94.75, 95.754, 94.031, 94.4, 94.73, 94.982, 94.754, 94.07, 94.391, 94.776, 94.519, 94.776, 94.758, 93.014, 93.893, 94.473, 95.124, 94.535, 95.426]
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