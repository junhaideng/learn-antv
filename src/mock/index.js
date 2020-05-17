const Mock = require('mockjs')

// 柱形图需要的数据
Mock.mock("/api/get_interval_data", "get", function() {
    return Mock.mock({
        data:[
            { type: '未知', value: 654, percent: 0.02 },
            { type: '17 岁以下', value: 654, percent: 0.02 },
            { type: '18-24 岁', value: 4400, percent: 0.2 },
            { type: '25-29 岁', value: 5300, percent: 0.24 },
            { type: '30-39 岁', value: 6200, percent: 0.28 },
            { type: '40-49 岁', value: 3300, percent: 0.14 },
            { type: '50 岁以上', value: 1500, percent: 0.06 },
          ]
    })
})



// 散点图需要的数据
Mock.mock("/api/get_point_data", "get", function () {
    return Mock.mock({
        data: [{
                feature: 'Battery',
                value: 0.22,
                phone: 'iPhone'
            },
            {
                feature: 'Brand',
                value: 0.28,
                phone: 'iPhone'
            },
            {
                feature: 'Contract',
                value: 0.29,
                phone: 'iPhone'
            },
            {
                feature: 'Design',
                value: 0.17,
                phone: 'iPhone'
            },
            {
                feature: 'Internet',
                value: 0.22,
                phone: 'iPhone'
            },
            {
                feature: 'Large',
                value: 0.02,
                phone: 'iPhone'
            },
            {
                feature: 'Price',
                value: 0.21,
                phone: 'iPhone'
            },
            {
                feature: 'Smartphone',
                value: 0.5,
                phone: 'iPhone'
            },
            {
                feature: 'Battery',
                value: 0.27,
                phone: 'Samsung'
            },
            {
                feature: 'Brand',
                value: 0.16,
                phone: 'Samsung'
            },
            {
                feature: 'Contract',
                value: 0.35,
                phone: 'Samsung'
            },
            {
                feature: 'Design',
                value: 0.13,
                phone: 'Samsung'
            },
            {
                feature: 'Internet',
                value: 0.2,
                phone: 'Samsung'
            },
            {
                feature: 'Large',
                value: 0.13,
                phone: 'Samsung'
            },
            {
                feature: 'Price',
                value: 0.35,
                phone: 'Samsung'
            },
            {
                feature: 'Smartphone',
                value: 0.38,
                phone: 'Samsung'
            },
            {
                feature: 'Battery',
                value: 0.26,
                phone: 'Nokia Smartphone'
            },
            {
                feature: 'Brand',
                value: 0.1,
                phone: 'Nokia Smartphone'
            },
            {
                feature: 'Contract',
                value: 0.3,
                phone: 'Nokia Smartphone'
            },
            {
                feature: 'Design',
                value: 0.14,
                phone: 'Nokia Smartphone'
            },
            {
                feature: 'Internet',
                value: 0.22,
                phone: 'Nokia Smartphone'
            },
            {
                feature: 'Large',
                value: 0.04,
                phone: 'Nokia Smartphone'
            },
            {
                feature: 'Price',
                value: 0.41,
                phone: 'Nokia Smartphone'
            },
            {
                feature: 'Smartphone',
                value: 0.3,
                phone: 'Nokia Smartphone'
            },
        ]
    })
})