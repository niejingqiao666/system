
<template>
  <div class="card_container">
    <p class="card_title">
      1.水务工程建设
      <input type="checkbox" class="card_checkBox" />
    </p>
    <div class="card_authors">
      <span>期刊论文</span>
      <span>许兴武 高圆 诸卫卫 王科威 张陈俊 -</span>
      <span>环境保护前沿 -</span>
      <span>2019年 3期</span>
    </div>
    <p class="card_abstract">
      <span>摘要：</span>
      标准化和信息化融合发展是水务工程建设管理的必然趋势
    </p>
    <p class="card_keywords">
      <a href>水务工程建设管理</a>
      <a href>标准化</a>
      <a href>信息化</a>
      <a href>融合发展</a>
    </p>
    <div class="card_bottom">
      <div class="card_buttonGroup">
        <div class="card_button1">
          <i class="iconfont icon-internet"></i>
          网络来源
        </div>
        <div class="card_button1">
          <i class="iconfont icon-daochu"></i>
          导出
        </div>
        <button class="card_button2">收藏</button>
        <button class="card_button2">编辑</button>
      </div>
      <span class="card_citation">被引：0</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card_container {
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 20px;
}
.card_checkBox {
  position: absolute;
  top: 3px;
  left: -15px;
}

.card_title {
  font-size: 16px;
  color: blue;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
}

.card_authors {
  padding: 10px 0;
}

.card_bottom {
  display: flex;
  justify-content: space-between;
}

.card_keywords {
  padding: 10px 0;
  text-decoration: underline;

  a:not(:nth-child(1)) {
    padding: 0 5px;
  }
}

.card_buttonGroup{
    display: flex;
    align-items: center;
}

.card_button1 {
  box-sizing: border-box;
  height: 30px;
  color: steelblue;
  border: 1px solid steelblue;
  background-color: white;
  line-height: 30px;    
  padding: 0 5px;
  margin-right: 5px;
  display: inline-block;
}

.card_button2 {
  height: 30px;
  padding: 0 20px;
  text-align: center;
  margin-right: 5px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.5);
}
</style>