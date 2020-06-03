<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo" />

            <a-menu
              theme="dark"
              mode="horizontal"
              :default-selected-keys="['2']"
              :style="{ lineHeight: '64px' }" >
                <a-menu-item key="1">
                    nav 1
                </a-menu-item>
                <a-menu-item key="2">
                    nav 2
                </a-menu-item>
                <a-menu-item key="3">
                    nav 3
                </a-menu-item>
                <a-menu-item key="4">
                    nav 4
                </a-menu-item>
            </a-menu>
        </a-layout-header>

        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu v-if="abc"
                  mode="inline"
                  :default-selected-keys="['1']"
                  :default-open-keys="['sub1']"
                  :style="{ height: '100%', borderRight: 0 }" >
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="user" />subnav 1</span>
                        <a-menu-item key="1">
                          option1
                        </a-menu-item>
                        <a-menu-item key="2">
                          option2
                        </a-menu-item>
                        <a-menu-item key="3">
                          option3
                        </a-menu-item>
                        <a-menu-item key="4">
                          option4
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="laptop" />subnav 2</span>
                        <a-menu-item key="5">
                          option5
                        </a-menu-item>
                        <a-menu-item key="6">
                          option6
                        </a-menu-item>
                        <a-menu-item key="7">
                          option7
                        </a-menu-item>
                        <a-menu-item key="8">
                          option8
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <span slot="title"><a-icon type="notification" />subnav 3</span>
                        <a-menu-item key="9">
                          option9
                        </a-menu-item>
                        <a-menu-item key="10">
                          option10
                        </a-menu-item>
                        <a-menu-item key="11">
                          option11
                        </a-menu-item>
                        <a-menu-item key="12">
                          option12
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
                <div key="sub4">
                    <span slot="title"><a-icon type="notification" />timeline</span>
                    <a-timeline>
                        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                        <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                        <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                    </a-timeline>
                </div>
            </a-layout-sider>

            <a-layout style="padding: 0 24px 24px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>

                <a-layout-content
                  :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }" >
                    <div :style="{height: 'auto'}">
                        <div>
                            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </div>

                        <a-card title="Default size card" hoverable style="width: 100%;margin: 20px 0">
                            <img
                              slot="cover"
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            <a-card-meta title="Europe Street beat">
                                <template slot="description">
                                    www.instagram.com
                                </template>
                            </a-card-meta>
                        </a-card>

                        <a-card title="Default size card" hoverable style="width: 100%;margin: 5px 0">
                            <img
                              slot="cover"
                              alt="example"
                              src="../assets/lims.jpg" />
                            <a-card-meta title="Europe Street beat">
                                <template slot="description">
                                    www.instagram.com
                                </template>
                            </a-card-meta>
                        </a-card>
                    </div>

                    <a-upload-dragger
                      name="file"
                      :multiple="true"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      @change="handleChange">
                        <p class="ant-upload-drag-icon">
                            <a-icon type="inbox" />
                        </p>
                        <p class="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                        <p class="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </a-upload-dragger>
                </a-layout-content>

                <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        data() {
            return {
                collapsed: false,
                abc: false,
            };
        },
          methods: {
            handleChange(info) {
                debugger
                console.log(info)
              const status = info.file.status;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                this.$message.success(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
              }
            },
          },
    };
</script>

<style>
    #components-layout-demo-top-side-2 .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>