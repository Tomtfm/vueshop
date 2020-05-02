<template>
	<div class="rule">
		<!-- 卡片视图区域 -->
		<el-card>
			<!-- tabs 标签切换 -->
			<el-tabs v-model="editableTabsValue" type="card">
				<!-- 基本信息区域 -->
				<el-tab-pane label="基本信息"><basic/></el-tab-pane>
				
				<!-- 服务设置区域 -->
				<el-tab-pane label="服务设置"><serves/></el-tab-pane>
				
				<!-- 商品分类区域 :categoryList="categoryList" -->
				<el-tab-pane label="商品分类"><category /></el-tab-pane>
			</el-tabs>
		</el-card>
	</div>
</template>

<script>
	import Basic from './childComps/Basic.vue'
	import Serves from './childComps/Serves.vue'
	import Category from './childComps/Category.vue'
	
	// import {getRuleGoodsCityCateData} from '../../network/rule.js'
	
	export default {
		name: 'Rule',
		components: {
			Basic,
			Serves,
			Category
		},
		data() {
			return {
				editableTabsValue: '0',
				// categoryList: []
			}
		},
		created() {
			// 1.请求商品分类的数据
			// this.getRuleGoodsCityCateData()
		},
		methods: {
			// 网络请求相关的方法
			// getRuleGoodsCityCateData() {
			// 	getRuleGoodsCityCateData().then(res => {
			// 		this.categoryList = res.data
			// 	})
			// }
		}
	}
</script>

<style scoped>
	
</style>
