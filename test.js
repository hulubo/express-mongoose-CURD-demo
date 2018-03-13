// const express = require('express')
//
// const all = require('./models/all')
// const Model = all
//
// // 使用 express.Router 可以创建模块化的路由
//
//
// var data_args = {
//     name : '大壮',
//     age : '12',
//     address:'山洞',
// }
//
//
// Model.create(data_args, err=>{
//   if(err) {
//     console.log('储存失败', err)
//   } else {
//     console.log('储存成功')
//   }
// })


// const ajax = require('./ajax.js')




const params = {
			pageNum: 1,
			pageSize: 10,
			keyword: '',
			orderby: 'id',
			order:'desc'
		};

const joinQuery = function(params) {

  var Querys = Object.keys(params).map( key => {
    return `${key}=${params[key]}`
  }).join('&')

  return `?${Querys}`
}

const data = joinQuery(params)
console.log('data',data)
// const url ='/all'
//
//
//
// let data = ajax.get(url, { params })
//       .then((response) => {
//         return response.data;
//       })
//
// console.log('data', data)

		// const {data, total, success, message} = await DataSourceService.getList(params);

    // getListAll: (params) => {
    // 		let data = ajax.get(`${config.interface.local}/datasource/listAll`, { params })
    // 			.then((response) => {
    // 				return response.data;
    // 			});
    // 		return data;
    // 	},
    //
    //   // 添加或修改数据源
    //   update: (params) => {
    //     let data = ajax.post(`${config.interface.local}/datasource/update`, params)
    //     .then((response) => {
    //       return response.data;
    //     });
    //     return data;
    //   },
