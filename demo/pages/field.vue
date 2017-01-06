<template>
  <page class="page-field">
    <div class="page-header">
      <h3>表单面板 <small>field</small></h3>
      <p>用于输入及展示表单类型数据</p>
    </div>
    <group padded>
      <p>目前还需要处理的问题，1、布局问题，要更良好一些 2、增加必填项标记 3、验证输入信息及提升错误及警告等</p>
    </group>
    <group title="各种 Input 输入框，以及验证等">
      <field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></field>
      <field label="用户名" value="显示表单信息" readonly></field>
      <field label="邮箱" placeholder="请输入邮箱" type="email"></field>
      <field label="密码" placeholder="请输入密码" type="password"></field>
      <field label="手机号" placeholder="请输入手机号" type="tel"></field>
      <field label="网站" placeholder="请输入网址" type="url"></field>
      <field label="数字" placeholder="请输入数字" type="number"></field>
      <field label="生日" placeholder="请输入生日" type="date"></field>
      <field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></field>
    </group>
    <group title="">
      <field placeholder="登录邮箱" type="email"></field>
      <field placeholder="密码" type="password"></field>
    </group>
    <group title="">
      <field label="邮箱" placeholder="成功状态" state="success"></field>
      <field label="邮箱" placeholder="失败状态" state="error"></field>
      <field label="邮箱" placeholder="警告状态" state="warning"></field>
    </group>
    <group title="">
      <field label="验证码" placeholder="输入验证码">
        <!-- <img src="../assets/100x100.png" height="48px" width="100px"> -->
      </field>
    </group>
  </page>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(111);
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style>
.field-demo .field{
  margin-right: 0.5rem;
}
</style>
