import {request} from './request.js'

// 获取常规设置的商城分类数据
export function getRuleGoodsCityCateData() {
	return request({
		url: '/goodsCityCate/getGoodsCityCate'
	})
}

export function addGoodsCityCateData(noSort, categoryName, sta) {
	return request({
		url: `/goodsCityCate/insertGoodsCityCate?noSort=${noSort}&categoryName=${categoryName}&sta=${sta}&hotelId=HD000001`,
		method: 'post',
		noSort: noSort,
		categoryName: categoryName,
		sta: sta
	})
}

export function getGoodsCityCate(id) {
	return request({
		url: '/goodsCityCate/getGoodsCityCate' + id,
		method: 'get'
	})
}

export function updateGoodsCityCate(id, data) {
	return request({
		url: '/goodsCityCate/updateGoodsCityCate' + id,
		method: 'post',
		data: data
	})
}




