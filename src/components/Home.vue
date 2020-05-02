<template>
	<el-container class="home-container">
		<!-- 头部区域 -->
		<el-header>
			<div>
				<img src="../assets/logo.png" alt="">
				<span>电商后台管理系统</span>
			</div>
			<el-button type="info">退出</el-button>
		</el-header>
		<!-- 页面主体区域 -->
		<el-container>
			<!-- 侧边栏 -->
			<el-aside :width="isCollapse ? '64px' : '200px'">
				<div class="toggle-button" @click="toggleCollapse">|||</div>
				<!-- 侧边栏菜单区域 -->
				<el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="isCollapse"
				 :collapse-transition="false" router :default-active="activePath">
					<!-- 一级菜单 -->
					<el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
						<!-- 一级菜单的模板区域 -->
						<template slot="title">
							<!-- 图标 -->
							<i class="el-icon-s-shop"></i>
							<!-- 文本 -->
							<span>{{item.name}}</span>
						</template>

						<!-- 二级菜单 -->
						<el-menu-item :index="'/' + subItem.path" v-for="subItem in children" :key="subItem.id" @click="saveNavState('/' + subItem.path)">
							<template slot="title">
								<!-- 图标 -->
								<i class="el-icon-menu"></i>
								<!-- 文本 -->
								<span>{{subItem.name}}</span>
							</template>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<!-- 右侧内容主体 -->
			<el-main>
				<!-- 路由占位符 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				// 一级菜单数据
				menulist: [{
					id: 1001,
					name: '商城管理'
				}],
				// 二级菜单数据
				children: [{
						id: 111,
						name: '常规设置',
						path: 'rule'
					}
				],
				// 是否折叠
				isCollapse: false,
				// 被激活的链接地址
				activePath: ''
			}
		},
		created() {
			this.activePath = window.sessionStorage.getItem('activePath')
		},
		methods: {
			// 点击按钮，切换菜单的折叠与展开
			toggleCollapse() {
				this.isCollapse = !this.isCollapse
			},
			// 保存链接的激活状态
			saveNavState(activePath) {
				window.sessionStorage.setItem('activePath', activePath)
				this.activePath = activePath
			}
		}
	}
</script>

<style scoped>
	.home-container {
		height: 100%;
	}

	.el-header {
		background-color: #373d41;
		display: flex;
		justify-content: space-between;
		padding-left: 0;
		align-items: center;
		color: #fff;
		font-size: 20px;
	}

	.el-header>div {
		display: flex;
		align-items: center;
		border-radius: 50%;
	}

	.el-header>div>span {
		margin-left: 15px;
	}

	.el-aside {
		background-color: #333744;
	}

	.el-menu {
		border-right: none;
	}

	.el-main {
		background-color: #eaedf1;
	}

	.iconfont {
		margin-right: 10px;
	}

	.toggle-button {
		background-color: #4a5064;
		font-size: 10px;
		line-height: 24px;
		color: #fff;
		text-align: center;
		letter-spacing: 0.2em;
		cursor: pointer;
	}
</style>
