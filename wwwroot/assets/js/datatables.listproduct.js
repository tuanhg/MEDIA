/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: datatables init js
*/

var tableColor;
var tableCatagory;
var url = getBaseURL();

$.fn.dataTable.ext.pager.numbers_length = 8;
$.extend($.fn.dataTable.defaults, {
    // Design Assets
    scrollX: true,
    // ServerSide Setups
    processing: true,
    serverSide: true,
    // Paging Setups
    paging: true,
    //order: [[2, "desc"]],
    // Searching Setups
    searching: { regex: true },
    // Change text showing
    language: {
        info: "Liệt kê từ _START_ đến _END_ tổng số _TOTAL_ ",
        infoEmpty: "Hiển thị từ 0 đến 0 tổng số 0 ",
        infoFiltered: "(lọc trong tổng số _MAX_)",
        loadingRecords: "Đang tải...",
        processing: "Đang xử lý...",
        search: "Tìm kiếm:",
        zeroRecords: "Không tìm thấy kết quả",
        decimal: ",",
        infoThousands: ".",
        thousands: ".",
        paginate: {
            "first": "Đầu",
            "last": "Cuối",
            "next": "<i class='mdi mdi-chevron-right'></i>",
            "previous": "<i class='mdi mdi-chevron-left'></i>"
        },
        datetime: {
            hours: "Giờ",
            minutes: "Phút",
            next: "Sau",
            previous: "Trước",
            seconds: "Giây",
            amPm: [
                "am",
                "pm"
            ],
            nknown: "-",
            weekdays: [
                "Chủ nhật"
            ],
            months: [
                "Tháng Một",
                "Tháng Hai",
                "Tháng Ba",
                "Tháng Tư",
                "Tháng Năm",
                "Tháng Sáu",
                "Tháng Bảy",
                "Tháng Tám",
                "Tháng Chín",
                "Tháng Mười",
                "Tháng Mười Một",
                "Tháng Mười Hai"
            ]
        },
    }
});


$(document).ready(function () {
    $.fn.dataTable.moment("DD/MM/YYYY HH:mm:ss");
    $.fn.dataTable.moment("DD/MM/YYYY");

    //Table Product
    tableColor = new DataTable("#tableListProduct", {
        // Ajax Filter
        ajax: {
            url: "/api/p/gap",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: function (d) {
                var jsonfeed = JSON.stringify(d);
                return jsonfeed;
            }
        },
        // Columns Setups
        columns: [
            { data: "id", name: "id" }, //0
            { data: "hProductCode", name: "hProductCode" }, //1
            { data: "productName", name: "productName" }, //2
            { data: "productCategoryName", name: "productCategoryName" },//3
            { data: "description", name: "description" }, //4
            { data: "width", name: "width" }, //5
            { data: "height", name: "height" }, //6
            { data: "depth", name: "depth" }, //7
            { data: "vol", name: "vol" }, //8
            {
                data: "img",
                render: function (data, type, row) {
                    return "<img src='" + url + "/" + data + "' class='avatar-lg rounded' alt=''>";
                }
            }, //9
            { data: "status", name: "status" }, //10
            { data: "datedAdd", name: "datedAdd" }, //11
            {
                data: "userOwner",
                render: function (data, type, row) {
                    return "<span class='badge bg-info'>" + data + "</span>";
                }
            }, //12
            { data: "datedModified", name: "datedModified" }, //13
            {
                data: "lastModified",
                render: function (data, type, row) {
                    return "<span class='badge bg-danger-subtle text-danger'>" + data + "</span>";
                }
            } //14
        ],

        // Column Definitions 
        columnDefs: [
            { targets: 0, visible: false },
            {
                targets: 1, visible: true
            },
            {
                targets: 2,
                render: function (data) {
                    data = strtrunc(data, 15);
                    return data;
                },
                visible: true
            },
            {
                targets: 3, visible: true
            },
            {
                targets: 4, visible: false
            },
            {
                targets: 5, visible: true
            },
            {
                targets: 6, visible: true
            },
            {
                targets: 7, visible: true
            },
            {
                targets: 8, visible: false
            },
            {
                targets: 10,
                render: function (data, type, row) {                  

                    //Product Status
                    if (data === "Thiết kế") {
                        data = "<span class='badge badge-label bg-primary'><i class='mdi mdi-circle-medium'></i> Thiết kế</span>"
                    }
                    else if (data === "Làm mẫu") {
                        data = "<span class='badge badge-label bg-info'><i class='mdi mdi-circle-medium'></i> Làm mẫu</span>"
                    }
                    else if (data === "Sản xuất") {
                        data = "<span class='badge badge-label bg-secondary'><i class='mdi mdi-circle-medium'></i> Sản xuất</span>"
                    }
                    else if (data === "Tạm dừng") {
                        data = "<span class='badge badge-label bg-warning'><i class='mdi mdi-circle-medium'></i> Tạm dừng</span>"
                    }
                    else if (data === "Thương mại") {
                        data = "<span class='badge badge-label bg-success'><i class='mdi mdi-circle-medium'></i> Thương mại</span>"
                    }
                    else if (data === "Sửa lỗi") {
                        data = "<span class='badge badge-label bg-danger'><i class='mdi mdi-circle-medium'></i> Sửa lỗi</span>"
                    }
                    else {
                        data = "<span class='badge badge-label bg-dark'><i class='mdi mdi-circle-medium'></i> Loại bỏ</span>"
                    }                   
                    
                    return data;
                }
            },
            {
                targets: 11,
                render: function (data, type, row) {

                    data = moment(row.datedAdd).format("DD/MM/YYYY");
                    return data;
                }
                
            },
            {
                targets: 12, visible: true
            },
            {
                targets: 13,
                render: function (data, type, row) {

                    data = moment(row.datedModified).format("DD/MM/YYYY");
                    return data;
                },
                visible: false
            },
            {
                targets: 14, visible: false
            },
            {
                targets: 15,
                render: function (data, type, row) {
                    if (type === 'display') {
                        data = '<div class="d-inline-block"><a class="dropdown-item edit-item-btn" href="' + url + '/products/modifyproduct/' + row.id + '"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i></a></div>';
                    }
                    return data;
                },
                defaultContent: "<a class='btn btn-link' role='button' href='#' onclick='edit(this)'>Sửa</a>",
                orderable: false,
                searchable: false
            }
        ],
    });

    //Table Category Product
    tableColor = new DataTable("#tableListProductCat", {
        // Ajax Filter
        ajax: {
            url: "/api/p/gapc",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: function (d) {
                var jsonfeed = JSON.stringify(d);
                return jsonfeed;
            }
        },
        // Columns Setups
        columns: [
            { data: "id", name: "id" }, //0                        
            { data: "categoryCode", name: "categoryCode" },//1
            { data: "productCategoryName", name: "productCategoryName" }, //2                      
            { data: "datedAdd", name: "datedAdd" }, //3
            {
                data: "userOwner",
                render: function (data, type, row) {
                    return "<span class='badge bg-info'>" + data + "</span>";
                }
            }, //4
            { data: "datedModified", name: "datedModified" }, //5
            {
                data: "lastModified",
                render: function (data, type, row) {
                    return "<span class='badge bg-danger-subtle text-danger'>" + data + "</span>";
                }
            } //6
        ],

        // Column Definitions 
        columnDefs: [
            { targets: 0, visible: false },                  
            {
                targets: 3,
                render: function (data, type, row) {

                    data = moment(row.datedAdd).format("DD/MM/YYYY");
                    return data;
                }
            },            
            {
                targets: 5,
                render: function (data, type, row) {

                    data = moment(row.datedModified).format("DD/MM/YYYY");
                    return data;
                }
            },            
            {
                targets: 7,
                render: function (data, type, row) {
                    if (type === 'display') {
                        data = '<div class="d-inline-block"><a class="dropdown-item edit-item-btn" href="' + url + '/products/modifyproductcat/' + row.id + '"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i></a></div>';
                    }
                    return data;
                },
                defaultContent: "<a class='btn btn-link' role='button' href='#' onclick='edit(this)'>Sửa</a>",
                orderable: false,
                searchable: false
            }
        ],
    });
});



function strtrunc(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
}

function getBaseURL() {
    if ($("base").length) {
        return $("base").attr("href");
    }
    return window.location.origin;
}