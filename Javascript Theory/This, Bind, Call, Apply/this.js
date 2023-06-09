// This trả về đối tượng mà nó thuộc về
// Đặc tính 1: Trong 1 phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
// Đặc tính 2: Đứng ngoài phương thức, this tham chiếu tới đối tượng global

// VD1:
const iPhone7 = {
    // Thuộc tính - Property
    name: 'Iphone 7',
    color: 'Pink',
    weight: 300,

    // Phương thức - Method
    takePhoto() {
        console.log(this)
    },
    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this)
        }
    }
}

console.log(iPhone7.takePhoto()) // this là iPhone7

iPhone7.objChild.methodChild() // this là objChild

// VD2:
console.log(this) // Đối tượng global (windows)

// Lưu ý:
// this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
// this trong một hàm là undefined khi ở strict mode
// Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác 
// Arrow function không có context
