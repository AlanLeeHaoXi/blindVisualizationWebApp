//Declare chart
var pieChart = c3.generate({
    bindto: '#PieChart',
    data: {
        url: 'assets/data/chart/2018_all_disables.csv',
        type: 'pie',

        groups: [
                ['Pendengaran', 'Penglihatan', 'Pertuturan', 'Fizikal', 'Masalah Pembelajaran', 'Mental', 'Pelbagai', 'Tidak Diketahui']
            ]
            //keys: {
            //    // x: 'name', // it's possible to specify 'x' when category axis
            //    value: ['Pendengaran', 'Penglihatan', 'Pertuturan', 'Fizikal', 'Masalah Pembelajaran', 'Mental', 'Pelbagai', 'Tidak Diketahui']
            //}
    },

    //set chart title
    title: {
        text: 'Percentage of Handicaps Registered by Type up to 2018'
    },
    //set legend position
    legend: {
        position: 'bottom'
    },
    axis: {
        x: {
            
        }
    },

    tooltip: {
        format: {
          value: function (value, ratio, id, index) { return value; }
        }
    }
});
//change to pieChart

//2010
function show2010PC() {
    try {
        pieChart.load({
            url: 'assets/data/chart/2010.csv'
        });
    } catch (error) {
        console.log("csv 2010 data not load")
    }

}

function hide2010PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2010.csv' });
    } catch (error) {
        console.log("csv 2010 data not load")
    }

}

//2012
function show2012PC() {
    try {
        pieChart.load({
            url: 'assets/data/chart/2012.csv'
        });
    } catch (error) {
        console.log("csv 2012 data not load")
    }

}

function hide2012PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2012.csv' });

    } catch (error) {
        console.log("csv 2012 data not load")

    }
}

//2013
function show2013PC() {

    try {
        pieChart.load({
            url: 'assets/data/chart/2013.csv'
        });
    } catch (error) {
        console.log("csv 2013 data not load")
    }

}

function hide2013PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2013.csv' });

    } catch (error) {
        console.log("csv 2013 data not load")

    }

}

//2014
function show2014PC() {


    try {
        pieChart.load({

            url: 'assets/data/chart/2014.csv'
        });
    } catch (error) {
        console.log("csv 2014 data not load")

    }

}

function hide2014PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2014.csv' });

    } catch (error) {
        console.log("csv 2014 data not load")

    }
}

//2015
function show2015PC() {


    try {
        pieChart.load({

            url: 'assets/data/chart/2015.csv'
        });
    } catch (error) {
        console.log("csv 2015 data not load")

    }
}

function hide2015PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2015.csv' });
    } catch (error) {
        console.log("csv 2015 data not load")
    }
}

//2016
function show2016PC() {

    try {
        pieChart.load({

            url: 'assets/data/chart/2016.csv'
        });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

function hide2016PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2016.csv' });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

//2017
function show2017PC() {

    try {
        pieChart.load({

            url: 'assets/data/chart/2017.csv'
        });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

function hide2017PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2017.csv' });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

//2018
function show2018PC() {

    try {
        pieChart.load({

            url: 'assets/data/chart/2018.csv'
        });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}

function hide2018PC() {
    try {
        pieChart.unload({ url: 'assets/data/chart/2018.csv' });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}


//display all 
function showAllPC() {
    pieChart.load({
        url: 'assets/data/chart/2010.csv',
        url: 'assets/data/chart/2012.csv',
        url: 'assets/data/chart/2013.csv',
        url: 'assets/data/chart/2014.csv',
        url: 'assets/data/chart/2015.csv',
        url: 'assets/data/chart/2016.csv',
        url: 'assets/data/chart/2017.csv',
        url: 'assets/data/chart/2018.csv'
    });
}

//hide all
function hideAllPC() {
    pieChart.unload({
        url: 'assets/data/chart/2010.csv',
        url: 'assets/data/chart/2012.csv',
        url: 'assets/data/chart/2013.csv',
        url: 'assets/data/chart/2014.csv',
        url: 'assets/data/chart/2015.csv',
        url: 'assets/data/chart/2016.csv',
        url: 'assets/data/chart/2017.csv',
        url: 'assets/data/chart/2018.csv'
    });

}

//Pendengaran
function showPendengaranPC() {
    pieChart.show('Pendengaran');
}

function hidePendengaranPC() {
    pieChart.hide('Pendengaran');
}

//Penglihatan
function showPenglihatanPC() {
    pieChart.show('Penglihatan');
}

function hidePenglihatanPC() {
    pieChart.hide('Penglihatan');
}

//Pertuturan
function showPertuturanPC() {
    pieChart.show('Pertuturan');
}

function hidePertuturanPC() {
    pieChart.hide('Pertuturan');
}

//Fizikal
function showFizikalPC() {
    pieChart.show('Fizikal');
}

function hideFizikalPC() {
    pieChart.hide('Fizikal');
}

//Masalah Pembelajaran
function showMasalahPembelajaranPC() {
    pieChart.show('Masalah Pembelajaran');
    console.log('working1');
}

function hideMasalahPembelajaranPC() {
    pieChart.hide('Masalah Pembelajaran');
    console.log('working2');
}

//Mental
function showMentalPC() {
    pieChart.show('Mental');
}

function hideMentalPC() {
    pieChart.hide('Mental');
}

//Pelbagai
function showPelbagaiPC() {
    pieChart.show('Pelbagai');
}

function hidPelbagaiPC() {
    pieChart.hide('Pelbagai');
}

//Tidak Diketahui
function showTidakDiketahuiPC() {
    pieChart.show('Tidak Diketahui');
}

function hideTidakDiketahuiPC() {
    pieChart.hide('Tidak Diketahui');
}