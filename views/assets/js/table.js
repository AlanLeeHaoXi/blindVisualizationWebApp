//var Aus19 = tableAus19();
//var Can19 = tableCan19();
//var My19 = tableMy19();
//var Phil17 = tablePhil17();
//var Sg19 = tableSg19();
//
//function tableAus19() {
//    d3.text('assets/data/table/Aus19.csv', function(data) {
//        var parsedCSV = d3.csv.parseRows(data);
//
//        var container = d3.select("#DisplayAus19")
//            .append("table")
//
//        .selectAll("tr")
//            .data(parsedCSV).enter()
//            .append("tr")
//
//        .selectAll("td")
//            .data(function(d) {
//                return d;
//            }).enter()
//            .append("td")
//            .text(function(d) {
//                return d;
//            });
//        return this;
//    });
//}
//
//function Aus19btn() {
//    var y = document.getElementById("AusTable19");
//    if (y.style.display == "none") {
//        y.style.display = "block";
//    } else {
//        y.style.display = "none";
//    }
//}
//Aus19 = document.getElementById("DisplayAus19").innerHTML;
function format_link(link) {
    if (link)
        return "<a href='" + link + "' target='_blank'>" + link + "</a>";
    else
        return "";
}

CsvToHtmlTable.init({
    csv_path: 'assets/data/table/Aus19.csv',
    element: 'table-containerAus19',
    allow_download: false,
    csv_options: {
        separator: ',',
        delimiter: '"'
    },
    datatables_options: {
        "paging": false
    },
    custom_formatting: [
        [4, format_link]
    ]
});
CsvToHtmlTable.init({
    csv_path: 'assets/data/table/Sg19.csv',
    element: 'table-containerSg19',
    allow_download: false,
    csv_options: {
        separator: ',',
        delimiter: '"'
    },
    datatables_options: {
        "paging": false
    },
    custom_formatting: [
        [4, format_link]
    ]
});
CsvToHtmlTable.init({
    csv_path: 'assets/data/table/Phil17.csv',
    element: 'table-containerPhil17',
    allow_download: false,
    csv_options: {
        separator: ',',
        delimiter: '"'
    },
    datatables_options: {
        "paging": false
    },
    custom_formatting: [
        [4, format_link]
    ]
});
CsvToHtmlTable.init({
    csv_path: 'assets/data/table/Comparison.csv',
    element: 'table-containerCom',
    allow_download: false,
    csv_options: {
        separator: ',',
        delimiter: '"'
    },
    datatables_options: {
        "paging": false
    },
    custom_formatting: [
        [4, format_link]
    ]
});
CsvToHtmlTable.init({
    csv_path: 'assets/data/table/Can19.csv',
    element: 'table-containerCan19',
    allow_download: false,
    csv_options: {
        separator: ',',
        delimiter: '"'
    },
    datatables_options: {
        "paging": false
    },
    custom_formatting: [
        [4, format_link]
    ]
});

CsvToHtmlTable.init({
    csv_path: 'assets/data/table/My19.csv',
    element: 'table-containerMy19',
    allow_download: false,
    csv_options: {
        separator: ',',
        delimiter: '"'
    },
    datatables_options: {
        "paging": false
    },
    custom_formatting: [
        [4, format_link]
    ]
});