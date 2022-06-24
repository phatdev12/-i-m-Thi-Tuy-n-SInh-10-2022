const datas = require("../data/DIEMTHI.json");
const fs = require("fs");
const xlsx = require("xlsx")


var newData = datas.map(data => {
    const arrInfo = `${data.DIEM_THI}`.split(';')
    // remove some key
    delete data.CMND
    delete data.GIOI_TINH
    delete data.NGAY_SINH
    // format data
    data.SOBAODANH = `Đã bị che`
    data.HO_TEN = arrInfo[0]
    data.DIEM_NGU_VAN = Number(`${arrInfo[1]}`.replace('Ngữ văn:', ''))
    data.DIEM_NGOAI_NGU = Number(`${arrInfo[2]}`.replace('Ngoại ngữ:', ''))
    data.DIEM_TOAN = Number(`${arrInfo[3]}`.replace('Toán:', ''))
    return data
});

var newWB = xlsx.utils.book_new()
var newWS = xlsx.utils.json_to_sheet(newData)

xlsx.utils.book_append_sheet(newWB, newWS, "diemthi")
xlsx.writeFile(newWB, "./data/DIEMTHI.xlsx")

fs.writeFileSync('./data/DIEMTHI.json', JSON.stringify(newData, null, 4))