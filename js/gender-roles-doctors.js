var defchart = function(url, bindto) {
    return {
        bindto: bindto,
        padding: {
            top: 10,
            right: 10,
        },
        data: {
            type: 'line',
            x: 'Year',
            url: url,
            order: function(a, b) {
                if (a['id'] == 'Men')
                    return -1;
                return 1;
            },
        },
        point : {
            show : false
        },
        bar : {
            width : {
                ratio :0.6
            }
        },
        axis: {
            x : {
                label : {
                    text : 'Year of qualification',
                    position: 'outer-center'
                }
            },
            y : {label : 'Number of qualifications'}
        },
        tooltip: {
            format: {
                title: function (d) { return 'Qualification Year: ' + d; }
            }
        }
    }
};


    var alldef = defchart('/data/doctors/data.csv', '#chart1')
    alldef['data']['order'] = function(a, b) {
        if (a['id'] == 'Men')
            return 1;
        return -1;
    }
    var chart1 = c3.generate(alldef);
    var chart2 = c3.generate(defchart('/data/doctors/psychiatrists.csv', '#chart2'));
    var chart3 = c3.generate(defchart('/data/doctors/surgeons.csv', '#chart3'));
    var chart4 = c3.generate(defchart('/data/doctors/paediatricians.csv', '#chart4'));
    var chart5 = c3.generate(defchart('/data/doctors/gynaecologists.csv', '#chart5'));
