//*cài đơn vị tiền tệ
function fomater(number) {
    return new Intl.NumberFormat("vi-VN",{
        style: "currency",
        currency: "VND"
    }).format(number);
}

export default fomater;