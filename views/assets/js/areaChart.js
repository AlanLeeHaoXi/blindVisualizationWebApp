var areaChart = c3.generate({
    bindto: '#areaChart',
    data: {
        url: 'assets/data/chart/2012_to_2018_all_states.csv',
        type: 'area-spline',
        //keys: {
        //    // x: 'name', // it's possible to specify 'x' when category axis
        //    value: ['Pendengaran', 'Penglihatan', 'Pertuturan', 'Fizikal', 'Masalah Pembelajaran', 'Mental', 'Pelbagai', 'Tidak Diketahui']
        //}
    },
    
    //set chart title
    title: {
        text: 'No. of Blind Handicaps Registered by States'
    },

    //set legend position
      legend: {
        position: 'right'
    },

    axis: {
        // x-axis
        x: {
            label: { 
                text: 'Year',
                position: 'outer-center'
            },  
            type: 'category',
            categories: ['2012','2013','2014','2015','2016','2017','2018']
        },
        // y-axis
        y: {
            label: { 
                text: 'No. of Handicaps',
                position: 'outer-middle'
            }, 
        }
    },
    zoom: {
        enabled: true
    }
});

//change to areaChart
//2010
function show2010BS() {
    try {
        areaChart.load({
            url: 'assets/data/chart/2010.csv'
        });
    } catch (error) {
        console.log("csv 2010 data not load")
    }
}

function hide2010BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2010.csv' });
    } catch (error) {
        console.log("csv 2010 data not load")
    }
}

//2012
function show2012BS() {
    try {
        areaChart.load({
            url: 'assets/data/chart/2012.csv'
        });
    } catch (error) {
        console.log("csv 2012 data not load")
    }

}

function hide2012BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2012.csv' });
    } catch (error) {
        console.log("csv 2012 data not load")
    }
}

//2013
function show2013BS() {
    try {
        areaChart.load({
            url: 'assets/data/chart/2013.csv'
        });
    } catch (error) {
        console.log("csv 2013 data not load")
    }

}

function hide2013BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2013.csv' });
    } catch (error) {
        console.log("csv 2013 data not load")
    }
}

//2014
function show2014BS() {
    try {
        areaChart.load({

            url: 'assets/data/chart/2014.csv'
        });
    } catch (error) {
        console.log("csv 2014 data not load")

    }

}

function hide2014BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2014.csv' });

    } catch (error) {
        console.log("csv 2014 data not load")

    }
}

//2015
function show2015BS() {
    try {
        areaChart.load({

            url: 'assets/data/chart/2015.csv'
        });
    } catch (error) {
        console.log("csv 2015 data not load")

    }
}

function hide2015BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2015.csv' });
    } catch (error) {
        console.log("csv 2015 data not load")
    }
}

//2016
function show2016BS() {
    try {
        areaChart.load({

            url: 'assets/data/chart/2016.csv'
        });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

function hide2016BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2016.csv' });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

//2017
function show2017BS() {
    try {
        areaChart.load({

            url: 'assets/data/chart/2017.csv'
        });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

function hide2017BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2017.csv' });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

//2018
function show2018BS() {
    try {
        areaChart.load({

            url: 'assets/data/chart/2018.csv'
        });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}

function hide2018BS() {
    try {
        areaChart.unload({ url: 'assets/data/chart/2018.csv' });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}


//display all 
function showAllBS() {
    areaChart.load({
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
function hideAllBS() {
    areaChart.unload({
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
function showPendengaranBS() {
    areaChart.show('Pendengaran');
}

function hidePendengaranBS() {
    areaChart.hide('Pendengaran');
}

//Penglihatan
function showPenglihatanBS() {
    areaChart.show('Penglihatan');
}

function hidePenglihatanBS() {
    areaChart.hide('Penglihatan');
}

//Pertuturan
function showPertuturanBS() {
    areaChart.show('Pertuturan');
}

function hidePertuturanBS() {
    areaChart.hide('Pertuturan');
}

//Fizikal
function showFizikalBS() {
    areaChart.show('Fizikal');
}

function hideFizikalBS() {
    areaChart.hide('Fizikal');
}

//Masalah Pembelajaran
function showMasalahPembelajaranBS() {
    areaChart.show('Masalah Pembelajaran');
    console.log('working1');
}

function hideMasalahPembelajaranBS() {
    areaChart.hide('Masalah Pembelajaran');
    console.log('working2');
}

//Mental
function showMentalBS() {
    areaChart.show('Mental');
}

function hideMentalBS() {
    areaChart.hide('Mental');
}

//Pelbagai
function showPelbagaiBS() {
    areaChart.show('Pelbagai');
}

function hidPelbagaiBS() {
    areaChart.hide('Pelbagai');
}

//Tidak Diketahui
function showTidakDiketahuiBS() {
    areaChart.show('Tidak Diketahui');
}

function hideTidakDiketahuiBS() {
    areaChart.hide('Tidak Diketahui');
}