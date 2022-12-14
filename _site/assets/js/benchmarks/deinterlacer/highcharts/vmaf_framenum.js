$(function () {
    $(document).ready(function() {
            Highcharts.chart('framenum_plot', {
            
            chart: {
                zoomType: 'xy',
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            title: {
                text: 'Mean VMAF to Frame Number'
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
		data: [85.877, 94.209, 93.337, 93.279, 93.973, 93.914, 94.275, 93.182, 93.114, 93.856, 93.279, 93.405, 92.93, 92.831, 93.527, 93.112, 93.427, 92.611, 93.035, 93.673, 93.722, 93.891, 93.01, 92.87, 93.695, 93.587, 94.038, 93.367, 93.276, 95.087]
},{
		name: 'ST-Deint',
		data: [89.652, 94.298, 94.282, 94.911, 95.132, 95.053, 94.214, 94.501, 94.798, 94.522, 94.509, 93.749, 93.598, 94.579, 94.85, 94.51, 94.272, 94.117, 94.951, 94.407, 95.258, 93.881, 94.482, 94.473, 95.195, 94.678, 94.666, 94.422, 95.163, 96.231]
},{
		name: 'PAL Interpolation',
		data: [78.027, 81.566, 80.237, 81.382, 82.783, 82.673, 83.286, 82.639, 81.942, 82.898, 81.485, 81.775, 81.0, 81.956, 82.665, 82.422, 83.459, 82.667, 82.611, 83.706, 84.167, 84.589, 83.229, 83.586, 83.951, 83.337, 83.908, 82.952, 82.938, 86.022]
},{
		name: 'SonyVegas Blend Field',
		data: [40.9, 48.7, 48.196, 48.16, 46.551, 51.674, 48.477, 47.921, 48.767, 50.836, 49.439, 50.762, 48.232, 48.053, 50.817, 51.531, 53.281, 49.676, 45.983, 45.666, 49.257, 47.154, 47.133, 46.805, 48.485, 51.457, 52.543, 55.951, 51.554, 55.286]
},{
		name: 'Vapoursynth EEDI3',
		data: [91.328, 90.359, 90.398, 90.283, 90.509, 90.315, 90.706, 90.259, 90.278, 89.974, 89.753, 89.208, 89.95, 89.59, 89.954, 89.328, 89.033, 89.581, 90.223, 90.274, 90.478, 90.161, 90.241, 90.084, 90.147, 90.131, 90.062, 89.605, 90.188, 91.269]
},{
		name: 'TDAN',
		data: [88.303, 89.349, 88.773, 89.414, 90.008, 90.739, 90.228, 90.161, 89.646, 89.963, 89.782, 89.402, 90.091, 89.576, 90.406, 90.016, 88.954, 90.264, 89.938, 90.127, 90.75, 90.107, 89.908, 89.669, 90.416, 89.861, 90.742, 90.197, 90.73, 88.765]
},{
		name: 'Bob',
		data: [88.195, 87.251, 87.352, 87.357, 87.894, 87.537, 88.133, 87.545, 87.461, 87.141, 86.865, 86.27, 86.919, 86.622, 86.895, 86.405, 86.013, 86.827, 87.344, 87.48, 87.787, 87.38, 87.375, 87.325, 87.485, 87.265, 87.144, 86.741, 87.031, 88.207]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [79.498, 87.438, 86.62, 88.296, 89.048, 89.489, 89.22, 88.433, 88.024, 89.17, 88.593, 88.799, 87.747, 89.156, 89.235, 89.643, 89.613, 88.737, 89.273, 89.7, 90.446, 89.848, 89.134, 89.992, 90.364, 90.016, 89.843, 90.232, 89.235, 91.624]
},{
		name: 'DfRes SA',
		data: [95.351, 95.398, 95.357, 95.202, 95.355, 95.522, 95.601, 95.292, 95.001, 95.103, 94.868, 94.847, 94.961, 94.915, 95.194, 95.082, 94.927, 95.354, 95.517, 95.605, 95.647, 95.378, 95.525, 95.489, 95.543, 95.438, 95.584, 95.316, 95.648, 91.278]
},{
		name: 'DfRes 122000 G2e 3',
		data: [94.919, 95.108, 95.051, 94.918, 95.031, 95.299, 95.252, 95.058, 94.679, 94.819, 94.574, 94.642, 94.766, 94.866, 94.829, 94.836, 94.605, 95.024, 95.154, 95.224, 95.311, 94.964, 95.145, 95.123, 95.152, 95.072, 95.127, 94.903, 95.216, 90.781]
},{
		name: 'SwinDI',
		data: [89.287, 95.938, 94.854, 95.702, 95.469, 95.809, 95.806, 95.08, 95.409, 95.762, 94.988, 95.51, 94.394, 95.508, 95.244, 95.366, 95.325, 95.298, 95.535, 95.501, 95.47, 95.613, 94.849, 95.365, 95.762, 95.595, 95.797, 95.206, 95.692, 96.906]
},{
		name: 'YADIF',
		data: [87.041, 86.807, 86.863, 86.952, 87.397, 87.116, 87.684, 87.272, 87.119, 86.928, 86.77, 86.269, 86.939, 86.804, 86.926, 86.621, 86.713, 87.261, 87.548, 87.916, 88.273, 87.595, 88.085, 87.608, 87.728, 87.175, 87.139, 86.982, 87.285, 88.39]
},{
		name: 'SonyVegas Interpolate Field',
		data: [81.615, 90.979, 90.07, 90.169, 91.058, 90.956, 91.476, 90.26, 89.863, 90.708, 89.802, 89.833, 89.569, 89.372, 90.324, 89.669, 89.925, 89.483, 90.096, 90.838, 90.978, 91.357, 90.331, 90.152, 90.975, 90.747, 91.152, 90.466, 90.138, 92.167]
},{
		name: 'EDVR',
		data: [90.234, 92.461, 92.421, 92.404, 92.631, 93.753, 93.573, 93.18, 93.248, 93.379, 92.874, 92.361, 93.186, 93.496, 93.345, 93.82, 92.607, 93.774, 93.351, 93.12, 93.461, 93.762, 93.554, 93.492, 93.999, 93.509, 94.096, 93.817, 93.678, 81.571]
},{
		name: 'MFDIN L',
		data: [91.177, 97.552, 97.314, 97.412, 97.516, 97.564, 97.935, 97.755, 97.648, 97.804, 97.359, 97.638, 97.311, 97.504, 97.592, 97.517, 97.787, 97.684, 97.682, 97.711, 97.75, 97.883, 97.688, 97.625, 97.797, 97.654, 97.968, 97.709, 97.591, 97.734]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [49.184, 55.892, 54.872, 56.287, 53.721, 59.287, 55.36, 55.67, 57.498, 59.062, 57.513, 58.982, 56.12, 57.551, 59.572, 60.798, 61.884, 57.98, 54.898, 53.93, 57.762, 54.838, 55.075, 56.179, 56.895, 59.846, 60.673, 64.131, 60.937, 63.756]
},{
		name: 'MSU Deinterlacer',
		data: [90.591, 91.423, 91.579, 91.901, 92.161, 92.24, 92.851, 92.676, 92.361, 92.382, 92.135, 91.947, 91.882, 92.24, 91.82, 91.941, 91.903, 92.388, 92.733, 92.862, 92.988, 92.544, 92.688, 92.595, 92.792, 92.446, 92.19, 91.552, 92.176, 90.234]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [78.028, 87.071, 86.082, 86.589, 87.364, 87.369, 87.955, 86.775, 86.506, 87.39, 86.468, 86.65, 86.395, 86.276, 87.03, 86.5, 86.945, 86.317, 86.921, 87.795, 88.041, 88.18, 87.124, 87.07, 87.981, 87.593, 87.814, 87.702, 86.722, 89.527]
},{
		name: 'Vapoursynth TDeintMod',
		data: [91.453, 90.575, 90.846, 90.821, 91.217, 90.96, 91.351, 90.953, 91.012, 90.678, 90.473, 90.049, 90.726, 90.467, 90.811, 90.313, 90.256, 90.819, 91.393, 91.541, 91.638, 91.277, 91.391, 91.328, 91.385, 91.45, 91.436, 90.96, 91.417, 92.319]
},{
		name: 'DfRes',
		data: [94.003, 93.247, 93.378, 93.161, 93.453, 93.506, 93.94, 93.498, 93.567, 93.274, 93.174, 92.698, 93.048, 92.779, 92.659, 92.683, 92.626, 93.068, 93.367, 93.362, 93.602, 93.034, 93.289, 93.155, 93.173, 93.201, 93.098, 92.84, 93.209, 93.261]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [81.563, 91.251, 90.346, 90.502, 91.414, 91.469, 91.809, 90.239, 89.717, 90.739, 90.245, 90.141, 89.963, 89.904, 91.078, 90.414, 90.917, 90.563, 91.037, 91.682, 92.033, 92.251, 91.198, 91.1, 91.928, 91.729, 91.811, 91.343, 91.082, 93.239]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [90.463, 89.218, 89.498, 89.614, 90.035, 89.949, 89.977, 89.707, 89.814, 89.396, 89.167, 88.517, 89.227, 89.143, 89.438, 88.891, 88.564, 89.443, 89.906, 89.993, 90.384, 89.674, 89.806, 89.941, 90.012, 89.711, 89.461, 89.259, 89.714, 90.831]
},{
		name: 'FLAD',
		data: [96.131, 95.613, 95.84, 95.655, 95.772, 95.854, 95.995, 95.763, 95.947, 95.653, 95.768, 95.143, 95.542, 95.476, 95.629, 95.464, 95.3, 95.922, 96.085, 96.032, 96.29, 95.694, 96.033, 96.212, 96.111, 96.119, 96.012, 95.86, 96.298, 95.88]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [90.677, 90.767, 91.033, 91.034, 91.381, 91.429, 91.551, 91.111, 91.189, 91.036, 90.888, 90.371, 90.999, 90.807, 91.238, 90.763, 90.959, 91.157, 91.427, 91.725, 92.023, 91.477, 91.786, 91.581, 91.761, 91.739, 91.777, 91.471, 91.857, 92.262]
},{
		name: 'DUF',
		data: [90.665, 91.791, 91.238, 91.268, 91.637, 92.513, 92.202, 92.314, 91.74, 92.167, 91.444, 91.556, 91.763, 91.9, 92.049, 92.199, 91.181, 92.297, 91.999, 92.026, 92.508, 92.325, 92.428, 92.171, 92.481, 92.08, 92.703, 92.148, 92.342, 80.704]
},{
		name: 'EDVR_woTSA',
		data: [92.114, 93.106, 93.223, 93.616, 93.796, 94.038, 93.287, 93.598, 92.93, 93.644, 92.87, 92.688, 93.046, 93.079, 93.72, 93.869, 93.131, 94.098, 93.938, 94.101, 94.17, 94.18, 94.189, 93.878, 94.34, 93.999, 94.385, 94.148, 94.191, 84.45]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [48.86, 44.168, 78.656, 43.676, 84.624, 47.117, 85.999, 43.596, 85.301, 46.631, 84.701, 46.809, 84.002, 46.047, 85.434, 49.264, 84.981, 47.001, 84.631, 41.255, 85.361, 43.184, 83.677, 44.292, 85.697, 48.764, 86.06, 55.012, 86.095, 52.189]
},{
		name: 'MFDIN',
		data: [85.232, 94.647, 93.818, 94.282, 94.622, 95.175, 95.174, 94.596, 93.912, 94.871, 94.076, 94.496, 94.054, 94.1, 94.469, 94.356, 95.365, 94.856, 94.628, 95.071, 95.233, 95.225, 94.611, 94.768, 95.363, 95.12, 95.487, 95.465, 95.14, 95.435]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [91.572, 90.913, 91.001, 90.869, 91.173, 91.062, 91.288, 90.976, 90.98, 90.602, 90.593, 90.301, 90.676, 90.489, 90.616, 90.538, 90.41, 90.765, 91.085, 91.146, 91.338, 90.871, 91.056, 91.042, 91.049, 91.064, 91.072, 90.773, 91.267, 92.327]
},{
		name: 'Muksun Deinterlacer',
		data: [78.028, 87.071, 86.082, 86.589, 87.364, 87.369, 87.955, 86.775, 86.506, 87.39, 86.468, 86.65, 86.395, 86.276, 87.03, 86.5, 86.945, 86.317, 86.921, 87.795, 88.041, 88.18, 87.124, 87.07, 87.981, 87.593, 87.814, 87.702, 86.722, 89.527]
},{
		name: 'Kernel Deinterlacer',
		data: [81.563, 90.409, 89.768, 89.999, 90.823, 90.969, 91.292, 89.788, 89.164, 90.17, 89.726, 89.812, 89.547, 89.38, 90.543, 89.691, 90.698, 90.092, 90.386, 90.928, 91.48, 91.592, 90.681, 90.774, 91.5, 91.168, 91.187, 91.173, 90.363, 92.837]
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