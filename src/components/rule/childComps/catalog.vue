<template>
  <div class="catalogTools">
    <el-card class="border-card">
        <div slot="header" class="clearfix">
            <span style="float: left;">分类设置</span>
            <el-button style="float: right;padding: 5px 10px" type="primary" @click="dialogFormVisible = true">新增</el-button>
            <div style="clear: both"></div>
        </div>
        <div class="text item">
             <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部" name="all">
                     <el-table
                        :data="catalogs"
                        style="width: 100%">
                        <el-table-column
                        label="序号"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.id }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="排序"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.noSort }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="分类名称"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="状态"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.sta }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleForbidden(scope.$index, scope.row)">禁用</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="启用" name="start">
                     <el-table
                        :data="starts"
                        style="width: 100%">
                        <el-table-column
                        label="序号"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.order }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="排序"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.sort }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="分类名称"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.catalog }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="状态"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.status }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleForbidden(scope.$index, scope.row)">禁用</el-button>
                            <!-- <el-button
                            size="mini"
                            type="danger"
                            @click="startUsing(scope.$index, scope.row)" v-else>启用</el-button> -->
                        </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="禁用" name="forbidden">
                     <el-table
                        :data="forbiddens"
                        style="width: 100%">
                        <el-table-column
                        label="序号"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.order }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="排序"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.sort }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="分类名称"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.catalog }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="状态"
                        width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.status }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleForbidden(scope.$index, scope.row)">禁用</el-button>
                            <!-- <el-button
                            size="mini"
                            type="danger"
                            @click="startUsing(scope.$index, scope.row)" v-else>启用</el-button> -->
                        </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>

    <!-- 新增窗口 -->
    <!-- <div class="addNew" v-if="addNew">
        <div class="title">
            <span class="cata">新增分类</span>
            <span class="cancel" @click="cancel">X</span>
        </div>
        <div class="form">
            <el-form ref="form" label-width="80px">
                <el-form-item label="排序">
                    <el-input v-model="noSort" placeholder="请输入排序"></el-input>
                </el-form-item>
                <el-form-item label="分类名称">
                    <el-input v-model="name" placeholder="请输入分类名称"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-input v-model="sta" placeholder="请输入当前状态"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="dialogFormVisible = true" v-if="show">新增</el-button>
                    <el-button type="primary" @click="dialogFormVisible = true" v-else>保存</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div> -->

    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

    <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
        <el-form ref="form" label-width="80px">
                    <el-form-item label="排序">
                        <el-input v-model="noSort" placeholder="请输入排序"></el-input>
                    </el-form-item>
                    <el-form-item label="分类名称">
                        <el-input v-model="name" placeholder="请输入分类名称"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-input v-model="sta" placeholder="请输入当前状态"></el-input>
                    </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addCatalog" v-if="show">新增</el-button>
            <el-button type="primary" @click="keep" v-else>保存</el-button>
            <el-button @click="cancel">取消</el-button>
        </div>
    </el-dialog>


  </div>
</template>

<script>

    const axios = require('axios')

    const url = 'http://hzy.hotelhi.cn:8067/hz_zz/pc/activeGoodCate'

    export default {
      name: '',
      components:{

      },

      data() {
        return {
            activeName: 'all',
            catalogData: [],
            noSort: '',
            name: '',
            starts: [],
            forbiddens: [],
            show: true,
            id1: 0,
            sta:'',
            catalogs: [],
            dialogTableVisible: false,
            dialogFormVisible: false,

        }
      },
      methods: {
          handleClick(tab, event) {
            console.log(tab, event);
          },
        //   新增 按钮
          addCatalog(){
              this.show = true
              this.dialogFormVisible = false
                this.insertCatalog(this.name, this.noSort, this.sta)
                this.starts = []
                this.forbiddens = []
                this.start()
                this.noSort = ''
                this.name = ''
          },
          start(){
            //   this.catalogData.forEach((item, index, cartalogData) => {
            //       if(item.status === '禁用'){
            //           this.forbiddens.push(item)
            //       }else{
            //           this.starts.push(item)
            //       }
            //   });
          },

          cancel(){
            this.dialogFormVisible = false
          },
        //    删除 按钮
          handleDelete(index, row){
              console.log(row)
              this.deleteCatalog(row.id)
          },
        //   禁用启用
          handleForbidden(index, row) {
                console.log('index:'+index);
                console.log('show:'+row);
                console.log(row.status);
                // this.catalogData.forEach((citem, index, tableData) => {
                //     if(row.order === citem.order && row.status === '启用'){
                //         citem.status = '禁用'
                //     }
                // });
                // this.catalogData.forEach((citem, index, tableData) => {
                //     if(row.order === citem.order && row.status === '禁用'){
                //         citem.status = '启用'
                //     }
                // });
            },
            // 修改 按钮
            handleEdit(index, row){
                this.show = false
                this.dialogFormVisible = true
                console.log(row)
                this.catalogs.forEach((item,index,catalogs)=>{
                    if(row.id === item.id){
                        this.noSort = item.noSort
                        this.name = item.name
                        this.sta = item.sta
                    }
                })
                this.id1 = row.id
            },
            // 保存 按钮
            keep(){
                this.dialogFormVisible = false
                console.log('保存')
                console.log('保存')
                this.catalogs.forEach((item,index,catalogs)=>{
                    if(this.id1 === item.id){
                        // item.noSort  = this.noSort
                        // item.name  = this.name
                        this.updateCatalog(this.name, this.noSort, this.sta, item.id)
                    }
                })
                this.starts = []
                this.forbiddens = []
                this.start()
                this.noSort = ''
                this.name = ''
                this.show = true
            },
          // 获取分类数据 接口
          getActiveGoodCate(){
              axios.get(`${url}/getActiveGoodCate?hotelId=HD000001`)
                  .then((res)=>{
                      this.catalogData = res.data
                      this.catalogs = this.catalogData.data
                      console.log(this.catalogs)
                  })
          },
        //   修改 分类 API接口
          updateCatalog(name, noSort, sta, id){
              axios.post(`${url}/updateActiveGoodCate?name=${name}&noSort=${noSort}&sta=${sta}&hotelId=HD000001&id=${id}`)
                  .then((res)=>{
                      this.$message({
                        message: res.data.message,
                        type: 'success'
                      });
                      this.getActiveGoodCate()
                  })
          },
          // 新增 分类
          insertCatalog(name, noSort, sta){
              axios.post(`${url}/insertActiveGoodCate?name=${name}&noSort=${noSort}&sta=${sta}&hotelId=HD000001`)
                  .then((res)=>{
                      this.$message({
                        message: res.data.message,
                        type: 'success'
                      });
                      this.getActiveGoodCate()
                })
          },
            //   删除 分类
            deleteCatalog(id){
                axios.post(`${url}/deleteActiveGoodCate?id=${id}`)
                  .then((res)=>{
                      this.$message({
                        message: res.data.message,
                        type: 'success'
                      });
                      this.getActiveGoodCate()
                })
            }
        },
        mounted() {
            this.start()
            this.getActiveGoodCate()
        },
        watch: {
            
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .catalogTools{
     width: 90%;
     margin: 0 auto;
     position: relative;
 }
 .catalogTools /deep/ .el-table th{
    /* text-align: center; */
    background-color: #E6E6E6;
    color: black;
  }

   .catalogTools /deep/ .el-table td, .el-table th{
    text-align: center;
  }
  .catalogTools .el-row{
    margin-right: 5%;
    text-align: right;
  }
  .catalogTools /deep/ .el-table th{
    text-align: center;
    background-color: #F7F7F7;
    color: black;
  }

  .addNew{
      width: 35%;
      height: auto;
      background-color: white;
      border-radius: 5px;
      padding: 20px 20px 0 20px;
      box-shadow: 0 1px 2px 3px #F7F7F7;
      z-index: 999;
      position: absolute;
      top: 63px;
      left: 32%;
  }
  .title{
      height: 50px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
  }
  .title .cata{
      text-align: left;
      font-weight: bolder
  }
   .title .cancel{
      cursor:pointer;
      text-align: right;
  }

  .form{
      background-color: white;
  }

</style>
