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
    filter: true,
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

    //Table Color Category
    tableColor = new DataTable("#tableCatColor", {
        // Ajax Filter
        ajax: {
            url: "/api/c/gacat",
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
            { data: "id", name: "id" },
            { data: "colorCatName", name: "colorCatName" },
            { data: "datedAdd", name: "datedAdd" },
            {
                data: "userOwner",
                render: function (data, type, row) {
                    return "<span class='badge bg-info'>" + data + "</span>";
                }
            },
            { data: "datedModified", name: "datedModified" },
            {
                data: "lastModified",
                render: function (data, type, row) {
                    return "<span class='badge bg-danger-subtle text-danger'>" + data + "</span>";
                }
            }
        ],

        // Column Definitions 
        columnDefs: [
            { targets: 0, visible: false },
            {
                targets: 1, visible: true
            },
            {
                targets: 2,
                render: function (data, type, row) {

                    data = moment(row.datedAdd).format("DD/MM/YYYY");
                    return data;
                }
            },            
            {
                targets: 3, visible: true
            },
            {
                targets: 4,
                render: function (data, type, row) {

                    data = moment(row.datedModified).format("DD/MM/YYYY");
                    return data;
                }
            },
            {
                targets: 5, visible: true
            },            
            {
                targets: 6,
                render: function (data, type, row) {
                    if (type === 'display') {
                        data = '<div class="d-inline-block"><a class="dropdown-item edit-item-btn" href="' + url + '/colors/modifycolorcat/' + row.id + '"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i></a></div>';
                    }
                    return data;
                },
                defaultContent: "<a class='btn btn-link' role='button' href='#' onclick='edit(this)'>Sửa</a>",
                orderable: false,
                searchable: false
            }
        ],
    });
    //Table Color
    tableColor = new DataTable("#tableColor", {
        // Ajax Filter
        ajax: {
            url: "/api/c/gac",
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
            { data: "id", name: "id" },
            { data: "hFurniColor", name: "hFurniColor" },
            { data: "colorCatName", name: "colorCatName" },
            { data: "description", name: "description" },
            {
                data: "hexColor",
                render: function (data, type, row) {
                    _data = '<svg class="rounded avatar-lg" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="' + data + '"></rect></svg>';
                    return _data;
                }
            },
            {
                data: "img",
                render: function (data, type, row) {
                    return "<img src='" + url + "/" + data + "' class='avatar-lg rounded' alt=''>";
                }
            },
            { data: "datedAdd", name: "datedAdd" },
            {
                data: "userOwner",
                render: function (data, type, row) {
                    return "<span class='badge bg-info'>" + data + "</span>";
                }
            },
            { data: "datedModified", name: "datedModified" },
            {
                data: "lastModified",
                render: function (data, type, row) {
                    return "<span class='badge bg-danger-subtle text-danger'>" + data + "</span>";
                }
            }
        ],
        // Column Definitions 
        columnDefs: [
            { targets: 0, visible: false },
            {
                targets: 1, visible: true
            },
            { targets: 2, orderable: false, searchable: false },
            {
                targets: 3, visible: true
            },
            {
                targets: 4, visible: true
            },
            {
                targets: 5, visible: true
            },
            {
                targets: 6,
                render: function (data, type, row) {

                    data = moment(row.datedAdd).format("DD/MM/YYYY");
                    return data;
                }
            },
            { targets: 7, visible: true },
            {
                targets: 8,
                render: function (data, type, row) {

                    data = moment(row.datedModified).format("DD/MM/YYYY");
                    return data;
                }
            },
            { targets: 9, visible: true },
            {
                targets: 10,
                render: function (data, type, row) {
                    if (type === 'display') {
                        data = '<div class="d-inline-block"><a class="dropdown-item edit-item-btn" href="' + url + '/colors/modifycolor/' + row.id + '"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i></a></div>';
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