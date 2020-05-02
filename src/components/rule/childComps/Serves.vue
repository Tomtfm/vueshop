<template>
	<div class="serve">
		<el-row>
			<el-col :span="16">店铺服务</el-col>
			<el-col :span="8">
				<el-button size="small" type="primary" @click="dialogFormVisiblexgfwAdd = true">新增</el-button>
			</el-col>
		</el-row>
		<!-- 用户列表区域 -->
			<el-table :data="serveList" border stripe>
				<el-table-column label="序号" prop="id"></el-table-column>
				<el-table-column label="标题" prop="title"></el-table-column>
				<el-table-column label="名称" prop="name"></el-table-column>
				<el-table-column label="操作">
					 <el-button size="mini" type="primary" @click="dialogFormVisiblexgfwxg = true">修改</el-button>
					 <el-button size="mini" type="danger">删除</el-button>
				</el-table-column>
			</el-table>
			
			<!-- 服务设置弹窗 -->
			<!-- 1.新增 -->
			<el-dialog title="服务" :visible.sync="dialogFormVisiblexgfwAdd" class="formOuter">
				<!-- 定义分割线 -->
				 <el-divider></el-divider>
				<el-form :model="form" :rules="rules" ref="form">
				  <el-form-item label="服务标题" prop="servesTitle" :label-width="formLabelWidth">
				    <el-input v-model="form.servesTitle"></el-input>
				  </el-form-item>
				  <el-form-item label="服务内容" prop="servesContent" :label-width="formLabelWidth">
						<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.servesContent"/>
				  </el-form-item>
				</el-form>
				<!-- 定义分割线 -->
				<div slot="footer" class="dialog-footer">
				  <el-button type="primary" @click="dialogFormVisiblexgfwAdd = false" class="btnwith">确 定</el-button>
				</div>
				<el-divider></el-divider>
			</el-dialog>
			
			<!-- 2.修改 -->
			<el-dialog title="修改" :visible.sync="dialogFormVisiblexgfwxg" class="formOuter">
				<!-- 定义分割线 -->
				 <el-divider></el-divider>
				<el-form :model="form" :rules="rules" ref="form">
				  <el-form-item label="服务标题" prop="servesTitle" :label-width="formLabelWidth">
				    <el-input v-model="form.servesTitle"></el-input>
				  </el-form-item>
				  <el-form-item label="服务内容" prop="servesContent" :label-width="formLabelWidth">
						<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.servesContent"/>
				  </el-form-item>
				</el-form>
				<!-- 定义分割线 -->
				<div slot="footer" class="dialog-footer">
				  <el-button type="primary" @click="dialogFormVisiblexgfwxg = false" class="btnwith">确 定</el-button>
				</div>
				<el-divider></el-divider>
			</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'Serves',
		data() {
			return {
				formLabelWidth: '120px',
				// 服务设置弹窗
				dialogFormVisiblexgfwAdd: false,
				dialogFormVisiblexgfwxg: false,
				form: {
					servesTitle: '',
					servesContent: ''
				},
				// 服务信息
				serveList: [
					{id: 1, title: '正品保证', name: '支持正品保证'},
					{id: 2, title: '支持退货', name: '支持退货'},
					{id: 3, title: '极速发货', name: '支持极速发货'}
				],
				// 验证提示
				rules: {
					servesTitle: [
						{ required: true, message: '请输入服务标题', trigger: 'blur' },
						{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
					],
					servesContent: [
						{ required: true, message: '请输入服务内容', trigger: 'blur' },
						{ min: 5, max: 255, message: '长度在 5 到 255 个字符', trigger: 'blur' }
					]
				}
			}
		}
	}
</script>

<style scoped>
</style>
