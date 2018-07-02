function postdata() {
    var param = {
        city:city,
        startTime:startTime,
        endTime:endTime,
        data:{
            dataPM25Index:dataPM25Index,
            dataPM10Index:dataPM10Index,
            dataSO2Index:dataSO2Index,
            dataNO2Index:dataNO2Index,
            dataCOIndex:dataCOIndex,
            dataO3Index:dataO3Index,
            dataAQI:dataAQI,
            dataIndex:dataIndex
        }
    }

    $.ajax({
        type: "post",
        dataType:'json',

        url: "https://192.168.4.178:8001/post",
        data: {
            param: param
        },
        success: function(datas) {

        }})
}