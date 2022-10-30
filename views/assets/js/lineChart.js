var DonutChart = c3.generate({
    bindto: '#lineChart',
    data: {
        url: 'assets/data/chart/2016_to_2018.csv',
    },

    //set chart title
    title: {
            text: 'No. of Blind Handicaps Registered by Age Group'
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
            categories: ['2012','2013', '2014', '2015','2016', '2017', '2018'],
        },
        // y-axis
        y: {
            label: { 
                text: 'No. of Handicaps',
                position: 'outer-middle'
            }
        }
    },
    //enables chart zooming and draging
    zoom: {
        enabled: true
    }
});




//2010
function show2010DC() {
    try {
        DonutChart.load({
            url: 'assets/data/chart/2010.csv'
        });
    } catch (error) {
        console.log("csv 2010 data not load")
    }

}

function hide2010DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2010.csv' });
    } catch (error) {
        console.log("csv 2010 data not load")
    }

}

//2012
function show2012DC() {
    try {
        DonutChart.load({
            url: 'assets/data/chart/2012.csv'
        });
    } catch (error) {
        console.log("csv 2012 data not load")
    }

}

function hide2012DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2012.csv' });

    } catch (error) {
        console.log("csv 2012 data not load")

    }
}

//2013
function show2013DC() {

    try {
        DonutChart.load({
            url: 'assets/data/chart/2013.csv'
        });
    } catch (error) {
        console.log("csv 2013 data not load")
    }

}

function hide2013DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2013.csv' });

    } catch (error) {
        console.log("csv 2013 data not load")

    }

}

//2014
function show2014DC() {


    try {
        DonutChart.load({

            url: 'assets/data/chart/2014.csv'
        });
    } catch (error) {
        console.log("csv 2014 data not load")

    }

}

function hide2014DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2014.csv' });

    } catch (error) {
        console.log("csv 2014 data not load")

    }
}

//2015
function show2015DC() {


    try {
        DonutChart.load({

            url: 'assets/data/chart/2015.csv'
        });
    } catch (error) {
        console.log("csv 2015 data not load")

    }
}

function hide2015DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2015.csv' });
    } catch (error) {
        console.log("csv 2015 data not load")
    }
}

//2016
function show2016DC() {

    try {
        DonutChart.load({

            url: 'assets/data/chart/2016.csv'
        });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

function hide2016DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2016.csv' });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

//2017
function show2017DC() {

    try {
        DonutChart.load({

            url: 'assets/data/chart/2017.csv'
        });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

function hide2017DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2017.csv' });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

//2018
function show2018DC() {

    try {
        DonutChart.load({

            url: 'assets/data/chart/2018.csv'
        });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}

function hide2018DC() {
    try {
        DonutChart.unload({ url: 'assets/data/chart/2018.csv' });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}

//display all 
function showAllDC() {
    DonutChart.load({
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
function hideAllDC() {
    DonutChart.unload({
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
function showPendengaranDC() {
    DonutChart.show('Pendengaran');
}

function hidePendengaranDC() {
    DonutChart.hide('Pendengaran');
}

//Penglihatan
function showPenglihatanDC() {
    DonutChart.show('Penglihatan');
}

function hidePenglihatanDC() {
    DonutChart.hide('Penglihatan');
}

//Pertuturan
function showPertuturanDC() {
    DonutChart.show('Pertuturan');
}

function hidePertuturanDC() {
    DonutChart.hide('Pertuturan');
}

//Fizikal
function showFizikalDC() {
    DonutChart.show('Fizikal');
}

function hideFizikalDC() {
    DonutChart.hide('Fizikal');
}

//Masalah Pembelajaran
function showMasalahPembelajaranDC() {
    DonutChart.show('Masalah Pembelajaran');
    console.log('working1');
}

function hideMasalahPembelajaranDC() {
    DonutChart.hide('Masalah Pembelajaran');
    console.log('working2');
}

//Mental
function showMentalDC() {
    DonutChart.show('Mental');
}

function hideMentalDC() {
    DonutChart.hide('Mental');
}

//Pelbagai
function showPelbagaiDC() {
    DonutChart.show('Pelbagai');
}

function hidPelbagaiDC() {
    DonutChart.hide('Pelbagai');
}

//Tidak Diketahui
function showTidakDiketahuiDC() {
    DonutChart.show('Tidak Diketahui');
}

function hideTidakDiketahuiDC() {
    DonutChart.hide('Tidak Diketahui');
}