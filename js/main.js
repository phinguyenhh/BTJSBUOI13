// Exercise 1 
// Khối 1: input: salaryPerDay, days
// Khối 2: 
// B1: tạo hàm và gắn hàm vào button
// B2: trong hàm, lấy giá trị nhập từ bàn phím(salaryPerday và days)
// B3: tạo công thức tính salaryPerDay * day
// Khối 3 output: result(tiền lương)

function click1() {
    var salaryPerDay = document.getElementById("salaryPerDay").value
    var day = document.getElementById("days").value
    if (salaryPerDay>0 && day >0) {
        document.getElementById("result1").innerHTML = "Lương:" + ' ' + (salaryPerDay * day).toLocaleString()

    } else {
        document.getElementById("result1").innerHTML = "Vui lòng nhập đúng cú pháp"
    }
}
// Exercise 2
// Khối 1: input:số lượng con số , giá trị các con số
// Khối 2:
//B1: tạo hàm và gắn hàm vào button
//B2: lấy giá trị từ bàn phím (number,numbers)  
//B3: trong hàm click2_1 tạo thẻ input nhâp giá trị và button tính trung bình
//trong hàm click2 tạo công thức tính
//tính tổng :total = total + numbers
// tính giá trị trung bình: total = total / number
//Khối 3 output: result(giá trị trung bình) 
function click2_1() {
    document.getElementById("form-group").innerHTML = ''

    var number = document.getElementById("input2").value
    if (number > 0) {
        for (i = 1; i <= Number(number); ++i) {
            document.getElementById("form-group").insertAdjacentHTML("beforeend", `<label for=''>Nhập số thứ ${i} </label> <input type='number' class='form-control my-2 col-xl-3' id='number${i}' placeholder='Nhập số thứ ${i}'>`

            );
        }
        document.getElementById("form-group").insertAdjacentHTML("beforeend", `<button type="button" class="btn btn-primary" onclick="click2()">Tính trung bình</button>`
        )
    } else {
        document.getElementById("result2").innerHTML = "Vui lòng nhập đúng cú pháp"
    }
}

function click2() {
    var number = document.getElementById("input2").value

    var numbers, total = 0;
    for (i = 1; i <= Number(number); ++i) {
        var numbers = document.getElementById(`number${i}`).value
        var total = total + Number(numbers)
        var avg = total / Number(number)
     
    }
    if (avg | avg) {
        document.getElementById("result2").innerHTML = avg
        
    } else {
        document.getElementById("result2").innerHTML = "Vui lòng nhập đúng cú pháp"
    }
}

// EXERCISE 3
// Khối 1: input: money
// Khối 2: tạo hàm và gắn hàm vào button
//          trong hàm tạo công thức tính money * 23500
// Khối 3: output: result(giá tiền đã dổi)
function click3() {
    var money = document.getElementById("money").value
    if (money > 0 ) {
        document.getElementById("result3").innerHTML = (money * 23500).toLocaleString() + "VND";
    } else {
        document.getElementById("result3").innerHTML = "Vui lòng nhập đúng cú pháp"
    }
}

// EXERCISE 4
// Khối 1: input: width,length
// Khối 2: tạo hàm và gắn hàm vào button
//          trong hàm tạo công thức tính
//          chu vi : (width + length) * 2
//          diện tích : width * length
// Khối 3: output: result(chu vi diên tích)
function click4() {
    var length = document.getElementById("length").value
    var width = document.getElementById("width").value

    var area = length * width
    var perimeter = (Number(length) + Number(width)) * 2
    if (length > 0 && width > 0) {
        document.getElementById("result4").innerHTML = "Diện tích:" + area + "</br>" + "Chu vi:" + perimeter
    } else {
        document.getElementById("result4").innerHTML = "Vui lòng nhập đúng cú pháp"    
    }
}

// EXERCISE 5
// Khối 1: input: number(số 2 chữ số)
// Khối 2: tạo hàm và gắn hàm vào button
//          trong hàm tạo công thức tính
//          ones = number % 10
//          tens = number / 10
//          total = ones + tens
// Khối 3: output: result(sum)
function click5() {
    var number = document.getElementById("number").value
    var ones = number % 10
    var tens = Math.floor(number / 10)
    var sum = Number(ones) + Number(tens)
    if ( number >= 10 && number < 100 ) {
        document.getElementById("result5").innerHTML = "Tổng 2 chữ số là:" + sum
    } else {
        document.getElementById("result5").innerHTML = "Vui lòng nhập đúng cú pháp"   
    }
}

