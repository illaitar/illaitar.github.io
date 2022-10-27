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
                text: 'VMAF to Frame Number: Sequence # 26'
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
		data: [69.796, 76.353, 76.046, 76.126, 75.46, 75.414, 75.092, 75.709, 75.175, 75.208, 73.851, 73.546, 74.975, 74.535, 74.918, 74.63, 78.283, 77.157, 77.141, 76.906, 77.097, 77.463, 77.265, 77.129, 77.34, 77.418, 77.159, 77.051, 77.371, 77.232]
},{
		name: 'ST-Deint',
		data: [74.561, 100.0, 81.528, 100.0, 80.042, 100.0, 81.916, 100.0, 82.462, 100.0, 81.097, 100.0, 81.281, 100.0, 82.529, 100.0, 81.189, 87.117, 83.749, 86.978, 82.709, 85.49, 83.856, 85.816, 83.987, 87.656, 81.919, 87.673, 81.256, 88.288]
},{
		name: 'PAL Interpolation',
		data: [62.276, 66.64, 59.887, 66.349, 60.153, 65.591, 61.584, 65.847, 60.907, 66.443, 59.835, 66.306, 59.833, 66.185, 61.584, 66.08, 64.631, 63.309, 65.704, 63.777, 65.327, 63.24, 65.206, 65.143, 64.477, 66.088, 64.581, 66.072, 64.78, 65.355]
},{
		name: 'SonyVegas Blend Field',
		data: [43.504, 72.909, 51.194, 72.925, 50.833, 72.588, 53.559, 72.574, 54.615, 72.517, 53.287, 71.475, 52.716, 72.168, 55.589, 72.111, 56.79, 58.052, 59.18, 57.424, 58.341, 56.098, 60.437, 57.868, 60.215, 60.026, 57.823, 60.935, 57.276, 61.242]
},{
		name: 'Vapoursynth EEDI3',
		data: [75.054, 70.218, 75.524, 69.914, 74.917, 69.334, 74.294, 69.485, 74.338, 69.212, 73.322, 68.438, 74.46, 69.039, 73.726, 69.177, 74.117, 73.13, 73.195, 72.926, 73.47, 73.911, 73.094, 73.527, 73.294, 73.568, 73.274, 73.153, 73.691, 73.256]
},{
		name: 'TDAN',
		data: [85.91, 87.464, 88.438, 87.687, 87.228, 87.874, 87.997, 87.586, 88.392, 87.356, 88.99, 87.313, 89.051, 87.881, 88.769, 88.357, 88.203, 89.996, 88.829, 89.676, 89.416, 88.683, 91.225, 88.486, 90.848, 90.1, 90.563, 91.147, 89.626, 79.882]
},{
		name: 'Bob',
		data: [71.187, 66.431, 71.743, 66.099, 71.073, 65.484, 70.487, 65.736, 70.534, 65.638, 69.657, 64.811, 70.611, 65.38, 69.866, 65.398, 70.376, 69.393, 69.468, 69.276, 69.82, 70.166, 69.327, 69.738, 69.499, 69.755, 69.497, 69.493, 70.072, 69.601]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [63.017, 81.86, 69.956, 81.535, 68.762, 80.892, 70.347, 81.082, 70.445, 80.948, 69.723, 82.253, 69.4, 80.232, 70.633, 81.208, 72.844, 73.187, 76.394, 72.558, 75.381, 71.953, 74.842, 73.611, 74.475, 75.777, 73.469, 76.609, 73.082, 75.743]
},{
		name: 'DfRes SA',
		data: [94.798, 97.217, 97.14, 97.177, 96.596, 97.166, 96.567, 97.144, 96.508, 97.166, 96.49, 97.214, 96.265, 97.405, 96.462, 97.287, 94.874, 95.719, 95.478, 95.54, 95.515, 95.599, 95.991, 95.288, 95.719, 96.094, 96.277, 96.193, 96.027, 86.367]
},{
		name: 'DfRes 122000 G2e 3',
		data: [93.434, 97.162, 94.992, 97.136, 94.377, 97.083, 94.384, 97.077, 94.43, 97.121, 94.532, 97.195, 94.188, 97.358, 94.522, 97.227, 92.395, 93.702, 93.383, 93.505, 93.429, 93.1, 94.223, 93.005, 93.848, 94.085, 94.359, 94.42, 93.84, 86.138]
},{
		name: 'SwinDI',
		data: [85.864, 100.0, 93.339, 100.0, 91.675, 100.0, 93.044, 100.0, 93.489, 100.0, 92.112, 100.0, 93.221, 100.0, 93.489, 100.0, 96.061, 96.467, 97.143, 95.8, 96.193, 94.704, 98.145, 95.955, 97.872, 98.0, 96.513, 97.877, 95.443, 97.988]
},{
		name: 'YADIF',
		data: [73.684, 64.8, 70.371, 65.469, 70.127, 66.275, 70.804, 65.45, 70.642, 65.067, 70.507, 63.819, 70.338, 65.833, 70.837, 66.267, 70.077, 71.791, 70.727, 71.068, 70.815, 70.423, 72.188, 71.188, 71.833, 71.602, 71.653, 72.076, 71.919, 75.748]
},{
		name: 'SonyVegas Interpolate Field',
		data: [65.625, 71.985, 71.736, 71.69, 71.065, 71.039, 70.738, 71.268, 70.817, 71.018, 69.675, 69.374, 70.549, 70.15, 70.417, 70.164, 73.948, 72.703, 72.705, 72.696, 72.941, 73.201, 72.946, 72.876, 73.049, 72.995, 72.759, 72.804, 73.201, 73.086]
},{
		name: 'EDVR',
		data: [82.726, 96.779, 92.57, 96.69, 91.6, 96.653, 92.378, 96.702, 92.621, 96.691, 93.424, 96.705, 92.839, 96.983, 92.815, 96.713, 91.843, 93.75, 93.26, 93.292, 93.481, 93.208, 94.583, 92.822, 94.014, 94.278, 94.428, 94.695, 93.624, 76.791]
},{
		name: 'MFDIN L',
		data: [93.87, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [56.848, 100.0, 65.897, 100.0, 65.238, 100.0, 69.764, 100.0, 71.306, 100.0, 69.799, 100.0, 68.393, 100.0, 73.032, 100.0, 72.992, 75.933, 77.92, 75.099, 76.079, 71.986, 79.894, 74.804, 79.343, 79.166, 75.519, 80.059, 73.845, 80.874]
},{
		name: 'MSU Deinterlacer',
		data: [78.981, 85.323, 87.936, 86.645, 86.945, 86.462, 86.694, 86.501, 86.796, 86.053, 86.436, 85.586, 87.092, 86.159, 86.877, 86.428, 86.789, 86.39, 85.866, 85.927, 85.718, 85.374, 86.485, 85.186, 86.22, 86.106, 86.234, 86.497, 86.184, 76.612]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [58.86, 65.917, 64.885, 65.921, 64.124, 65.275, 64.096, 65.273, 64.193, 65.374, 63.099, 63.56, 63.883, 64.497, 63.812, 64.618, 67.222, 66.288, 66.248, 65.877, 66.306, 66.359, 66.405, 66.33, 66.515, 66.505, 66.057, 66.414, 66.6, 66.562]
},{
		name: 'Vapoursynth TDeintMod',
		data: [75.981, 71.268, 76.736, 71.472, 76.601, 71.013, 76.123, 71.27, 75.917, 70.859, 74.733, 70.062, 75.82, 70.71, 75.556, 71.194, 76.466, 75.602, 76.182, 75.596, 76.347, 76.06, 75.55, 76.12, 76.009, 77.216, 76.58, 76.615, 76.73, 76.177]
},{
		name: 'DfRes',
		data: [91.432, 88.277, 93.139, 88.454, 92.3, 88.25, 92.053, 88.444, 91.996, 88.099, 91.388, 87.13, 92.004, 87.932, 91.451, 88.391, 91.062, 90.77, 90.395, 90.417, 90.475, 90.697, 90.775, 90.269, 90.846, 90.891, 90.977, 91.09, 90.79, 86.531]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [65.602, 73.441, 72.3, 73.268, 71.817, 72.363, 72.016, 72.722, 71.858, 72.507, 70.461, 72.621, 71.111, 72.119, 71.458, 72.456, 74.99, 73.642, 75.417, 73.794, 75.241, 74.221, 74.328, 74.728, 74.146, 75.005, 74.165, 75.403, 74.665, 74.797]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [75.802, 73.074, 75.441, 72.856, 74.731, 72.056, 75.007, 72.433, 75.024, 72.371, 74.04, 72.096, 74.487, 72.486, 74.521, 72.534, 74.725, 74.045, 74.881, 73.933, 74.881, 74.279, 74.669, 74.843, 74.48, 75.427, 74.446, 75.32, 74.68, 75.161]
},{
		name: 'FLAD',
		data: [97.492, 94.224, 98.963, 94.118, 98.641, 94.109, 98.405, 94.003, 98.108, 93.933, 97.967, 94.225, 98.066, 94.597, 97.957, 94.626, 98.203, 98.261, 97.924, 97.872, 98.26, 98.582, 98.25, 98.058, 97.846, 98.501, 98.487, 98.533, 98.828, 94.491]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [80.247, 74.421, 79.781, 74.895, 79.281, 75.082, 79.333, 74.649, 79.254, 73.945, 79.158, 72.725, 79.554, 74.373, 79.405, 74.787, 79.116, 79.904, 79.14, 79.478, 79.393, 79.481, 80.588, 79.211, 80.331, 80.17, 80.276, 80.494, 80.148, 74.85]
},{
		name: 'DUF',
		data: [87.321, 94.769, 90.514, 94.56, 89.362, 94.495, 90.351, 94.483, 90.502, 94.488, 91.464, 94.698, 90.776, 94.868, 90.757, 94.603, 89.694, 91.679, 91.23, 91.14, 91.593, 90.551, 92.86, 90.696, 92.274, 92.399, 92.268, 93.042, 91.442, 57.48]
},{
		name: 'EDVR_woTSA',
		data: [90.092, 96.709, 93.795, 96.547, 92.829, 96.413, 93.233, 96.295, 93.377, 96.3, 93.955, 96.802, 93.535, 96.851, 93.439, 96.513, 92.468, 93.956, 93.412, 93.559, 93.424, 93.198, 94.666, 92.556, 94.171, 94.328, 94.57, 94.757, 93.937, 75.929]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [56.779, 85.061, 78.703, 88.601, 79.974, 88.879, 81.599, 89.145, 82.254, 89.24, 80.629, 88.393, 81.126, 88.082, 82.484, 88.524, 85.836, 61.467, 85.159, 61.935, 83.436, 59.418, 83.515, 62.342, 82.904, 66.567, 82.837, 68.195, 82.958, 68.752]
},{
		name: 'MFDIN',
		data: [84.111, 94.869, 91.499, 95.421, 90.143, 95.914, 90.802, 95.399, 91.192, 94.454, 91.217, 92.839, 91.355, 94.581, 91.395, 94.98, 94.446, 95.171, 94.468, 94.877, 94.442, 93.525, 96.602, 93.446, 95.898, 95.216, 95.588, 96.282, 94.601, 91.346]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [75.945, 72.906, 76.698, 72.757, 75.805, 71.789, 75.718, 72.259, 75.695, 71.941, 74.718, 71.144, 75.662, 71.646, 75.002, 71.959, 75.421, 74.641, 74.798, 74.374, 74.949, 75.057, 74.664, 74.677, 74.94, 75.287, 74.824, 74.876, 74.942, 74.896]
},{
		name: 'Muksun Deinterlacer',
		data: [58.86, 65.917, 64.885, 65.921, 64.124, 65.275, 64.096, 65.273, 64.193, 65.374, 63.099, 63.56, 63.883, 64.497, 63.812, 64.618, 67.222, 66.288, 66.248, 65.877, 66.306, 66.359, 66.405, 66.33, 66.515, 66.505, 66.057, 66.414, 66.6, 66.562]
},{
		name: 'Kernel Deinterlacer',
		data: [65.602, 74.462, 72.325, 74.047, 71.975, 73.099, 72.671, 73.377, 72.203, 73.293, 70.643, 75.056, 71.21, 73.454, 71.858, 73.838, 75.254, 74.023, 77.441, 74.163, 76.954, 74.374, 75.229, 75.665, 74.703, 76.816, 74.851, 77.439, 75.326, 76.033]
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