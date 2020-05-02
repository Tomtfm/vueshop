<template>
	<div class="category">
		<el-row>
			<el-col :span="16">分类设置</el-col>
			<el-col :span="8">
				<el-button size="small" type="primary" @click="dialogFormVisibleflAdd = true">新增</el-button>
			</el-col>
		</el-row>
		<!-- 商品列表区域 -->
		  <el-table :data="categoryList" border stripe>
				<el-table-column label="序号" prop="no" align="center"></el-table-column>
				<el-table-column label="排序" prop="noSort" align="center"></el-table-column>
				<el-table-column label="分类名称" prop="categoryName" align="center"></el-table-column>
				<el-table-column label="状态" align="center">
					<template slot-scope="scope">
						<!-- {{scope.row}} -->
						<i v-if="scope.row.sta === 'IV'">无效</i>
						<i v-else>有效</i>			
					</template>
				</el-table-column>
				<el-table-column label="操作" align="center">
					 <template slot-scope="scope">
						 <el-button size="mini" type="primary" @click="dialogFormVisibleflxg = true">修改</el-button>
						 <el-popconfirm confirmButtonText='确定'
						 							  cancelButtonText='取消'
						 							  title="您确定要禁用吗？"
														placement="top">
								<el-button size="mini" type="warning" slot="reference">禁用</el-button>
						 </el-popconfirm>
					 </template>
				</el-table-column>
			</el-table>
			
			<!-- 商品分类弹窗 -->
			<!-- 1.新增弹窗 -->
			<el-dialog title="分类" :visible.sync="dialogFormVisibleflAdd" class="formOuter" @close="addDialogClose">
				 <!-- 定义分割线 -->
				 <el-divider></el-divider>
			  <el-form :model="form" :rules="rules" ref="form">
			    <el-form-item label="排序" prop="noSort" :label-width="formLabelWidth">
			      <el-input v-model="form.noSort"></el-input>
			    </el-form-item>
			    <el-form-item label="分类名称" prop="categoryName" :label-width="formLabelWidth">
			      <el-input v-model="form.categoryName"></el-input>
			    </el-form-item>
					<el-form-item label="状态" prop="sta" :label-width="formLabelWidth">
					    <el-radio-group v-model="form.radio1">
					    	<el-radio label="1">无效</el-radio>
					    	<el-radio label="2">有效</el-radio>
					    </el-radio-group>
					</el-form-item>
			  </el-form>
				<!-- 定义分割线 -->
				<el-divider></el-divider>
			  <div slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="addCategory" class="btnwith">确 定</el-button>
			  </div>
			</el-dialog>
			<!-- 2.修改弹窗 -->
			<el-dialog title="修改" :visible.sync="dialogFormVisibleflxg" class="formOuter">
				<!-- 定义分割线 -->
				 <el-divider></el-divider>
				<el-form :model="form" :rules="rules" ref="form">
				  <el-form-item label="排序" prop="noSort" :label-width="formLabelWidth">
				    <el-input v-model="form.noSort"></el-input>
				  </el-form-item>
				  <el-form-item label="分类名称" prop="categoryName" :label-width="formLabelWidth">
				    <el-input v-model="form.categoryName"></el-input>
				  </el-form-item>
					<el-form-item label="状态" prop="sta" :label-width="formLabelWidth">
					    <el-radio-group v-model="form.radio1">
					    	<el-radio label="1">无效</el-radio>
					    	<el-radio label="2">有效</el-radio>
					    </el-radio-group>
					</el-form-item>
				</el-form>
				<!-- 定义分割线 -->
				<el-divider></el-divider>
				<div slot="footer" class="dialog-footer">
				  <el-button type="primary" @click="updateCategory" class="btnwith">提 交</el-button>
				</div>
			</el-dialog>
	</div>
</template>

<script>
	import {getRuleGoodsCityCateData, addGoodsCityCateData, getGoodsCityCate} from '../../../network/rule.js'

	export default {
		name: 'Category',
		props: {
			// categoryList: {
			// 	type: Array,
			// 	default() {
			// 		return []
			// 	}
			// }
			isEdit: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				formLabelWidth: '120px',
				//商品分类弹窗
				dialogFormVisibleflAdd: false,
				dialogFormVisibleflxg: false,
				form: {
					noSort: '',
					categoryName: '',
					sta: '',
					radio1: '1'
				},
				// 验证提示
				rules: {
					noSort: [
						{ required: true, message: '请输入内容哈', trigger: 'blur' },
						{ min: 1, max: 4, message: '长度在 1 到 4 个字符', trigger: 'blur' }
					],
					categoryName: [
						{ required: true, message: '请输入内容呵', trigger: 'blur' },
						{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
					]
				},
				//total 为所有的商品数量
				total: 0,
				categoryList: []
			}
		},
		created() {
			if(this.isEdit) {
				getGoodsCityCate(this.$route.query.id).then(response => {
					console.log(response)
					this.form = response.data
				})
			}

			this.getRuleGoodsCityCateData()
		},
		methods: {
			// 监听添加用户对话框的关闭事件（重置内容）
			addDialogClose() {
				this.$refs.form.resetFields()
			},
			getRuleGoodsCityCateData() {
				getRuleGoodsCityCateData().then(res => {
					
					this.categoryList = res.data
				})
			},
			// 点击按钮新增商品分类
			addCategory() {
				// 1.在新增之前 进行预验证
				this.$refs.form.validate(valid => {
					// console.log(valid);
					
					// 2.判断 验证是否有值
					if(valid == true) {
						const res = addGoodsCityCateData(this.form.noSort, this.form.categoryName, this.form.sta)
						this.$message.success("添加分类成功！")
					}else {
						this.$message.error("添加分类失败！")
					}

					// 3.发起添加商品分类的网络请求
				  //  const {data: res} = await this.$http.post('getGoodsCityCate', this.form)
					// console.log(res);
						
				 	// 4.进行判断 是否 添加成功或失败
					// if(status == true) {
						
					// }else {
						
					// }

					// 5.成功之后 -- 隐藏添加分类的对话框
					this.dialogFormVisibleflAdd = false
					
					// 6.重新获取分类列表的数据
					this.getRuleGoodsCityCateData()
				})
			},
			// 点击修改商品
			// 1.预修改（获取商品信息）
			dialogFormVisibleflxg() {
				getGoodsCityCate()
			},
			// 2.修改
			updateCategory() {

			}
		}
	}
</script>

<style scoped>

</style>
