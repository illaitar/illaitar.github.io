$(document).ready(function () {

    var line_options = {
        chart: {
            zoomType: 'xy',
            spacingBottom: 15,
            spacingTop: 10,
            spacingLeft: 10,
            spacingRight: 10,
            renderTo: 'container',
            width: null,
            type: 'scatter',
            height: null
        },
        credits: {enabled: true,href: "https://videoprocessing.ai/benchmarks/", text: "https://videoprocessing.ai/benchmarks/"},
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
                    },
                }
            }]
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            min: 0,
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0
            }
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        series: [],
    };

    var column_options = {
        chart: {
            type: 'column',
            renderTo: 'container',
        },
        annotation: {
            xAxis: {
                text: "Better"
            }
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        series: []
    };



    var scatter_options = {
        chart: {
            type: 'scatter',
            renderTo: 'container',
            zoomType: 'xy'
        },
        credits: {enabled: true,href: "https://videoprocessing.ai/benchmarks/", text: "https://videoprocessing.ai/benchmarks/"},
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'SI'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'TI'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
            borderWidth: 1
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
                    headerFormat: '<b>{point.key}</b><br>',
                    pointFormat: '{point.x} SI, {point.y} TI'
                }
            }
        },
        series: []
    };

    function drawFilters(method = null) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            var keys = ['Local_only_time', 'Global_only_time', 'Mixed_only_time'];
            var presets = ['Light', 'Medium geometric', 'Medium color', 'Hard'];
            for (let iter=0; iter<keys.length; ++iter) {
                var filter_data = [];
                for (const [key, value] of Object.entries(data[keys[iter]])) {
                    filter_data.push(key);
                }
                var select = document.getElementById('filter-chart-'+keys[iter].split('_')[0].toLowerCase());
                for (let i = 0; i < filter_data.length; ++i) {
                    var opt = document.createElement('option');
                    opt.value = filter_data[i];
                    opt.innerHTML = filter_data[i];
                    select.appendChild(opt);
                }
            }
        });
    }

    function drawLocal(method = 'TMK', preset = 'Light', redraw = true) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            let total = 0;
            let keys = {'Light': 'Local_only_time', 'Medium geometric':'Local_geom', 'Medium color':'Local_color', 'Hard':'Local_color_geom'};
            let table_data = [];
            let line1 = $.extend(true, {}, line_options);
            let line2 = $.extend(true, {}, line_options);
            line1.chart.renderTo = 'chart-local';
            line1.title.text = preset.concat(' ', 'preset');
            line1.subtitle.text = 'Accuracy';
            line1.xAxis.title.text = 'Maximum accepted error [frames]';
            line1.yAxis.title.text = 'Accuracy';

            line2.title.text = preset.concat(' ', 'preset');
            line2.subtitle.text = 'Error on test pairs';
            line2.chart.renderTo = 'chart-local-error';
            line2.xAxis.title.text = 'Number of test pair';
            line2.yAxis.title.text = 'Shift error [frames]';
            let target_key = 0;
            let key_flag = true;
            let err_series = [];
            let err_keys = [];
            for (const [key, value] of Object.entries(data[keys[preset]])) {
                line1.series.push({name: key, data: value["accuracy"]});
                err_keys.push(key);
                err_series.push(value["errors"]);
                table_data.push(['<a href="/benchmarks/aligners-participants.html#'+key+'">'+key+'</a>', value["accuracy"][0], value["accuracy"][3], value["accuracy"][10]]);
                if (key === method) {
                    key_flag = false;
                }
                if (key_flag) {
                    ++target_key;
                }
                total++;
            }
            let sort_arr = [];
            for (let i = 0; i < err_series[target_key].length; ++i) {
                sort_arr.push([i, err_series[target_key][i]]);
            }
            sort_arr.sort(function (a, b) {
                if (typeof (a[1]) != "number") {
                    return 1;
                }
                if (typeof (b[1]) != "number") {
                    return -1;
                }
                return a[1] - b[1];
            });
            for (let i = 0; i < err_series.length; ++i) {
                let new_err_series = [];
                for (let j = 0; j < sort_arr.length; ++j) {
                    let value = err_series[i][sort_arr[j][0]];
                    if (typeof (value) != 'number') {
                        value = null;
                    }
                    new_err_series.push(value);
                }
                line2.series.push({name: err_keys[i], data: new_err_series});
            }
            new Highcharts.Chart(line1);
            new Highcharts.Chart(line2);
            if (redraw) {
                if ($.fn.DataTable.isDataTable('#table-local')) {
                    table = $('#table-local').DataTable();
                    table.clear();
                    table.rows.add(table_data);
                    table.draw();
                }
                else {
                    $('#table-local').DataTable({
                        paging: false,
                        searching: false,
                        info: false,
                        data: table_data,
                        "order": [[ 2, 'desc' ]]
                    });
                }
            }
        });
    }

    function drawGlobal(method = 'VideoIndexer', preset = 'Light', redraw = true) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            var total = 0;
            let keys = {
                'Light': 'Global_only_time',
                'Medium geometric': 'Global_geom',
                'Medium color': 'Global_color',
                'Hard': 'Global_color_geom'
            };
            let table_data = [];
            var line = $.extend(true, {}, line_options);
            line.title.text = preset.concat(' ', 'preset');
            line.subtitle.text = 'F<sub>1</sub>-score';
            line.chart.renderTo = 'chart-global';
            line.xAxis.title.text = 'Number of test pair';
            line.yAxis.title.text = 'F1-score';
            let target_key = 0;
            let key_flag = true;
            let series = [];
            let series_keys = [];
            for (const [key, value] of Object.entries(data[keys[preset]])) {
                series_keys.push(key);
                series.push(value["points"]);
                table_data.push(['<a href="/benchmarks/aligners-participants.html#'+key+'">'+key+'</a>', data[keys[preset]][key]["f1"], data[keys[preset]][key]["precision"], data[keys[preset]][key]["recall"]]);
                if (key === method) {
                    key_flag = false;
                }
                if (key_flag) {
                    ++target_key;
                }
                total++;
            }
            let sort_arr = [];
            for (let i = 0; i < series[target_key].length; ++i) {
                sort_arr.push([i, series[target_key][i]]);
            }
            sort_arr.sort(function (a, b) {
                if (typeof (a[1]) != "number") {
                    return 1;
                }
                if (typeof (b[1]) != "number") {
                    return -1;
                }
                return a[1] - b[1];
            });
            for (let i = 0; i < series.length; ++i) {
                let new_series = [];
                for (let j = 0; j < sort_arr.length; ++j) {
                    let value = series[i][sort_arr[j][0]];
                    if (typeof (value) != 'number') {
                        value = null;
                    }
                    new_series.push(value);
                }
                line.series.push({name: series_keys[i], data: new_series});
            }
            new Highcharts.Chart(line);
            if (redraw) {
                if ($.fn.DataTable.isDataTable('#table-global')) {
                    table = $('#table-global').DataTable();
                    table.clear();
                    table.rows.add(table_data);
                    table.draw();
                }
                else {
                    $('#table-global').DataTable({
                        paging: false,
                        searching: false,
                        info: false,
                        data: table_data,
                        "order": [[ 1, 'desc' ]]
                    });
                }
            }
        });
    }

    function drawMixed(method = 'VideoIndexer', preset = 'Light', redraw = true) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            var total = 0;
            let keys = {
                'Light': 'Mixed_only_time',
                'Medium geometric': 'Mixed_geom',
                'Medium color': 'Mixed_color',
                'Hard': 'Mixed_color_geom'
            };
            let table_data = [];
            var line = $.extend(true, {}, line_options);
            line.title.text = preset.concat(' ', 'preset');
            line.subtitle.text = 'F1 score';
            line.chart.renderTo = 'chart-mixed';
            line.xAxis.title.text = 'Number of test pair';
            line.yAxis.title.text = 'F1-score';
            let target_key = 0;
            let key_flag = true;
            let series = [];
            let series_keys = [];
            for (const [key, value] of Object.entries(data[keys[preset]])) {
                series_keys.push(key);
                series.push(value["points"]);
                table_data.push(['<a href="/benchmarks/aligners-participants.html#'+key+'">'+key+'</a>', data[keys[preset]][key]["f1"], data[keys[preset]][key]["precision"], data[keys[preset]][key]["recall"]]);
                if (key === method) {
                    key_flag = false;
                }
                if (key_flag) {
                    ++target_key;
                }
                total++;
            }
            let sort_arr = [];
            for (let i = 0; i < series[target_key].length; ++i) {
                sort_arr.push([i, series[target_key][i]]);
            }
            sort_arr.sort(function (a, b) {
                if (typeof (a[1]) != "number") {
                    return 1;
                }
                if (typeof (b[1]) != "number") {
                    return -1;
                }
                return a[1] - b[1];
            });
            for (let i = 0; i < series.length; ++i) {
                let new_series = [];
                for (let j = 0; j < sort_arr.length; ++j) {
                    let value = series[i][sort_arr[j][0]];
                    if (typeof (value) != 'number') {
                        value = null;
                    }
                    new_series.push(value);
                }
                line.series.push({name: series_keys[i], data: new_series});
            }
            new Highcharts.Chart(line);
            if (redraw) {
                if ($.fn.DataTable.isDataTable('#table-mixed')) {
                    table = $('#table-mixed').DataTable();
                    table.clear();
                    table.rows.add(table_data);
                    table.draw();
                }
                else {
                    $('#table-mixed').DataTable({
                        paging: false,
                        searching: false,
                        info: false,
                        data: table_data,
                        "order": [[ 1, 'desc' ]]
                    });
                }
            }
        });
    }

    function drawDistortions(preset = "Light", div = null){
        if (div) {
            $.getJSON('../assets/json/benchmarks/aligners/dists_res.json', function (data) {
                let keys = {
                    'Local': {
                        'Light': 'Local_only_time',
                        'Medium geometric': 'Local_geom',
                        'Medium color': 'Local_color',
                        'Hard': 'Local_color_geom'
                    },
                    'Global': {
                        'Light': 'Global_only_time',
                        'Medium geometric': 'Global_geom',
                        'Medium color': 'Global_color',
                        'Hard': 'Global_color_geom'
                    },
                    'Mixed': {
                        'Light': 'Mixed_only_time',
                        'Medium geometric': 'Mixed_geom',
                        'Medium color': 'Mixed_color',
                        'Hard': 'Mixed_color_geom'
                    },
                };
                var column = $.extend(true, {}, column_options);
                column.subtitle.text = preset + ' distortions distribution';
                column.title.text = div + ' time distortions';
                column.chart.renderTo = 'distortions-distribution-' + div.toLowerCase();
                column.yAxis.title.text = 'Amount of videos with this distortion';
                var bars = [];
                var cats = [];
                for (const [key, value] of Object.entries(data[keys[div][preset]])) {
                    if (value > 0) {
                        cats.push(key);
                        bars.push(value);
                    }
                }
                column.xAxis.categories = cats;
                column.series.push({name: 'Amount', data: bars});
                var chart = new Highcharts.Chart(column);
            });
        }
    }

    function drawOther() {
        $.getJSON('../assets/json/benchmarks/aligners/categories_stat.json', function (data) {
            var column = $.extend(true, {}, column_options);
            column.title.text = 'Categories';
            column.subtitle.text = '';
            column.chart.renderTo = 'videos-selection';
            column.yAxis.title.text = 'Number of videos';
            var bars = [];
            var cats = [];
            for (const [key, value] of Object.entries(data)) {
                cats.push(key);
                bars.push(value);
            }
            column.xAxis.categories = cats;
            column.series.push({name: "Amount", data: bars});
            var chart = new Highcharts.Chart(column);
        });

        $.getJSON('../assets/json/benchmarks/aligners/siti_site.json', function (data) {
            var scatter = $.extend(true, {}, scatter_options);
            scatter.chart.renderTo = 'SITI';
            scatter.title.text = 'SI/TI';
            scatter.subtitle.text = 'of videos from Vimeo';
            scatter.chart.height = 80+'%';
            for (const [key, value] of Object.entries(data)) {
                var new_data = [];
                for (let i = 0; i < value.length; ++i) {
                    new_data.push({x: value[i][1], y: value[i][2], name: key})
                }
                scatter.series.push({name: key, data: new_data});
            }
            var chart = new Highcharts.Chart(scatter);
        });

        $.getJSON('../assets/json/benchmarks/aligners/filtered_siti_site.json', function (data) {
            var scatter = $.extend(true, {}, scatter_options);
            scatter.chart.renderTo = 'filtered-SITI';
            scatter.title.text = 'SI/TI';
            scatter.subtitle.text = 'of videos that were chosen for dataset';
            scatter.legend.enabled = false;
            scatter.chart.height = 65+'%';
            var new_data = [];
            for (const [key, value] of Object.entries(data)) {
                new_data.push({x: value[0], y: value[1], name: 'Chosen video'})
            }
            scatter.series.push({data: new_data});
            var chart = new Highcharts.Chart(scatter);
        });
    }
    $('#filter-chart-local').change(function() {
        drawLocal($(this).val(), 'Light', false);
    });
    $('#filter-chart-global').change(function() {
        drawGlobal($(this).val(), 'Light', false);
    });
    $('#filter-chart-mixed').change(function() {
        drawMixed($(this).val(), 'Light', false);
    });
    $('.local-table-tablinks').click(function(){
        let first_method = $("#filter-chart-local option:first").val();
        drawLocal(method= first_method,preset = $(this).context.innerHTML, true);
        $('#filter-chart-local').val(first_method);
        $('.local-table-tablinks').attr('class', 'local-table-tablinks');
        $(this).addClass('active-tablink');
    });
    $('.global-table-tablinks').click(function(){
        let first_method = $("#filter-chart-global option:first").val();
        drawGlobal(method= first_method,preset = $(this).context.innerHTML, true);
        $('#filter-chart-global').val(first_method);
        $('.global-table-tablinks').attr('class', 'global-table-tablinks');
        $(this).addClass('active-tablink');
    });
    $('.mixed-table-tablinks').click(function(){
        let first_method = $("#filter-chart-mixed option:first").val();
        drawMixed(method= first_method,preset = $(this).context.innerHTML, true);
        $('#filter-chart-mixed').val(first_method);
        $('.mixed-table-tablinks').attr('class', 'mixed-table-tablinks');
        $(this).addClass('active-tablink');
    });
    $('.local-distortion-tablinks').click(function(){
        drawDistortions(preset = $(this).context.innerHTML, div = $(this).val());
        $('.local-distortion-tablinks').attr('class', 'local-distortion-tablinks');
        $(this).addClass('active-tablink');
    });
    $('.global-distortion-tablinks').click(function(){
        drawDistortions(preset = $(this).context.innerHTML, div = $(this).val());
        $('.global-distortion-tablinks').attr('class', 'global-distortion-tablinks');
        $(this).addClass('active-tablink');
    });
    $('.mixed-distortion-tablinks').click(function(){
        drawDistortions(preset = $(this).context.innerHTML, div = $(this).val());
        $('.mixed-distortion-tablinks').attr('class', 'mixed-distortion-tablinks');
        $(this).addClass('active-tablink');
    });
    drawLocal();
    drawGlobal();
    drawMixed();
    drawDistortions(preset = 'Light',div='Local');
    drawDistortions(preset = 'Light',div='Global');
    drawDistortions(preset = 'Light',div='Mixed');
    drawOther();
    drawFilters();
});
