<template>
	<div class="basic">
		<!-- 1.店铺名称 -->
		<el-form :model="shopForm"  :rules="rules" ref="shopForm" class="red">
			<el-form-item label="店铺名称" prop="shopName" class="formItemName">
				<el-input v-model="shopForm.shopName" class="input1-with"/>
			</el-form-item>
			<!-- 2.包邮及价格 -->
			<el-form-item label="包邮" prop="delivery">
			    <el-radio-group v-model="shopForm.radio1">
			    	<el-radio label="1">不包邮</el-radio>
			    	<el-radio label="2">包邮（所有商品均包邮）</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-input class="input-with">
			    <template slot="append">元</template>
			</el-input>
			<!-- 3.自理 -->
			<el-form-item label="自提" prop="delivery">
			    <el-radio-group v-model="shopForm.radio2" class="radioGroup">
			    	<el-radio label="1">不支持自提（所有商品均支持自提）</el-radio>
			    	<el-radio label="2">支持自提</el-radio>
			    </el-radio-group>
			</el-form-item>
			<!-- 4.确认按钮 -->
			<el-form-item>
			  <el-button type="primary" size="medium" class="btn">确认保存</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Basic',
		data() {
			return {
				shopForm: {
					shopName: '',
					radio1: '1',
					radio2: '1',
				},
				// 验证提示
				rules: {
					shopName: [
						{ required: true, message: '请输入店铺名称', trigger: 'blur' },
						{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
					]
				}
			}
		}
	}
</script>

<style scoped>
	.formItemName {
		display: flex;
	}
	
	.input1-with{
		width: 250px;
	}
	
	.input-with {
		width: 300px;
	}
	
	.radioGroup {
		width: 245px;
		line-height: 50px;
	}
	
	.btn {
		position:absolute;
		left: 10%;
		margin-top: -20px;
	}
</style>
