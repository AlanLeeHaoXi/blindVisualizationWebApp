//Declare barchart
var StackedBarChart = c3.generate({
    bindto: '#StackedbarChart',
    data: {
        url: 'assets/data/chart/2012_to_2018_gender.csv',      //data source
        type: 'bar',
            // groups: [
            //         ['Pendengaran', 'Penglihatan', 'Pertuturan', 'Fizikal', 'Masalah Pembelajaran', 'Mental', 'Pelbagai', 'Tidak Diketahui']
            //]
            //keys: {
            //    // x: 'name', // it's possible to specify 'x' when category axis
            //    value: ['Pendengaran', 'Penglihatan', 'Pertuturan', 'Fizikal', 'Masalah Pembelajaran', 'Mental', 'Pelbagai', 'Tidak Diketahui']
            //}
    },

    //set chart title
    title: {
        text: 'No. of Blind Handicaps Registered by Gender'
    },

    //set legend position
      legend: {
        position: 'right'
    },

    color: {
        pattern: ['#334FFF', '#FF33D7'] //set color pattern for chart
    },

    //adjust chart padding 
    margin: {
        //top: 100,
        //right: 100,
        //bottom: 100,
        //left: 100,    
    },
    axis: {
        // x-axis
        x: {
            label: { 
                text: 'Year',
                position: 'outer-center',
            },  

            //set categories on x-axis
            type: 'category',
            categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
            
            tick: {
                centered: true,              //centers all ticks on x-axis
                //count: 7                   //set no of ticks on x-axis
                //format: d3.format('$,')    //set x-axis values in format '$1234' 
            }
        },

        // y-axis
        y: {
            label: { 
                text: 'No. of Handicaps',
                position: 'outer-middle'
            },  

            tick: {
                //set y-axis tick values manually.
                values: [0, 1000, 2000, 3000, 4000, 5000, 6000]
            },
            //min:  0,  //set max value of y-axis
            max: 5450  //set min value of y-axis
        }
    }
});


//StackedBarChart
//2010
function show2010SB() {
    try {
        StackedBarChart.load({
            url: 'assets/data/chart/2010.csv'
        });
    } catch (error) {
        console.log("csv 2010 data not load")
    }

}

function hide2010SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2010.csv' });
    } catch (error) {
        console.log("csv 2010 data not load")
    }

}

//2012
function show2012SB() {
    try {
        StackedBarChart.load({
            url: 'assets/data/chart/2012.csv'
        });
    } catch (error) {
        console.log("csv 2012 data not load")
    }

}

function hide2012SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2012.csv' });

    } catch (error) {
        console.log("csv 2012 data not load")

    }
}

//2013
function show2013SB() {

    try {
        StackedBarChart.load({
            url: 'assets/data/chart/2013.csv'
        });
    } catch (error) {
        console.log("csv 2013 data not load")
    }

}

function hide2013SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2013.csv' });

    } catch (error) {
        console.log("csv 2013 data not load")

    }

}

//2014
function show2014SB() {


    try {
        StackedBarChart.load({

            url: 'assets/data/chart/2014.csv'
        });
    } catch (error) {
        console.log("csv 2014 data not load")

    }

}

function hide2014SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2014.csv' });

    } catch (error) {
        console.log("csv 2014 data not load")

    }
}

//2015
function show2015SB() {


    try {
        StackedBarChart.load({

            url: 'assets/data/chart/2015.csv'
        });
    } catch (error) {
        console.log("csv 2015 data not load")

    }
}

function hide2015SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2015.csv' });
    } catch (error) {
        console.log("csv 2015 data not load")
    }
}

//2016
function show2016SB() {

    try {
        StackedBarChart.load({

            url: 'assets/data/chart/2016.csv'
        });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

function hide2016SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2016.csv' });
    } catch (error) {
        console.log("csv 2016 not loaded")
    }
}

//2017
function show2017SB() {

    try {
        StackedBarChart.load({

            url: 'assets/data/chart/2017.csv'
        });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

function hide2017SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2017.csv' });
    } catch (error) {
        console.log("csv 2017 not loaded")
    }
}

//2018
function show2018SB() {

    try {
        StackedBarChart.load({

            url: 'assets/data/chart/2018.csv'
        });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}

function hide2018SB() {
    try {
        StackedBarChart.unload({ url: 'assets/data/chart/2018.csv' });
    } catch (error) {
        console.log("csv 2018 not loaded")
    }
}


//display all 
function showAllSB() {
    StackedBarChart.load({
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
function hideAllSB() {
    StackedBarChart.unload({
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
function showPendengaranSB() {
    StackedBarChart.show('Pendengaran');
}

function hidePendengaranSB() {
    StackedBarChart.hide('Pendengaran');
}

//Penglihatan
function showPenglihatanSB() {
    StackedBarChart.show('Penglihatan');
}

function hidePenglihatanSB() {
    StackedBarChart.hide('Penglihatan');
}

//Pertuturan
function showPertuturanSB() {
    StackedBarChart.show('Pertuturan');
}

function hidePertuturanSB() {
    StackedBarChart.hide('Pertuturan');
}

//Fizikal
function showFizikalSB() {
    StackedBarChart.show('Fizikal');
}

function hideFizikalSB() {
    StackedBarChart.hide('Fizikal');
}

//Masalah Pembelajaran
function showMasalahPembelajaranSB() {
    StackedBarChart.show('Masalah Pembelajaran');
    console.log('working1');
}

function hideMasalahPembelajaranSB() {
    StackedBarChart.hide('Masalah Pembelajaran');
    console.log('working2');
}

//Mental
function showMentalSB() {
    StackedBarChart.show('Mental');
}

function hideMentalSB() {
    StackedBarChart.hide('Mental');
}

//Pelbagai
function showPelbagaiSB() {
    StackedBarChart.show('Pelbagai');
}

function hidPelbagaiSB() {
    StackedBarChart.hide('Pelbagai');
}

//Tidak Diketahui
function showTidakDiketahuiSB() {
    StackedBarChart.show('Tidak Diketahui');
}

function hideTidakDiketahuiSB() {
    StackedBarChart.hide('Tidak Diketahui');
}