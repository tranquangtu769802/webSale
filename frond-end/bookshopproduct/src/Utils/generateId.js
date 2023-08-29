// Hàm generarreID
export function generateId() {
    let idStart = 0;
    //   Kiểm tra xem đã có dữ liệu trong LocalStorage chưa, nếu có thì lấy giá trị id lớn nhất của
    // listAccount để làm id bắt đầu
    if (localStorage && localStorage.getItem("listProduct")) {
        let listProduct = JSON.parse(localStorage.getItem("listProduct"));

        listProduct.forEach((product) => {
            if (product.id > idStart) {
                idStart = product.id;
            }
        });
    }


    let id = idStart + 1;


    return id;
}