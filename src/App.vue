<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup>
import { reactive, toRefs } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const state = reactive({
  locale: zhCn,
});
const { locale } = toRefs(state);
</script>
<style>
:root {
  /* 颜色 */
  --theme: #242e42;

  /* 背景色 */
  --bg1: #eff4f9;

  /* 文字颜色 */
  --t1: #fff;
  --t2: #f4f4f4;
  --t3: #ededed;
  --t4: #d8d8d8;
  --t5: #b3b3b3;
  --t6: #999;
  --t7: #666;
  --t8: #3d3d3d;
  --t9: #181818;

  /* 操作颜色 */
  --delete: #f56c6c;
  --edit: #0084ff;
  --add: #63ba4d;
  --query: #909399;
  --down: #e6a23c;
  --upper: #67c23a;
  --role: #006000;
}

html,
body {
  width: 100%;
  height: 100100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
}
#app {
  height: 100vh;
}

#nprogress .bar {
  /*自定义进度条颜色*/
  background: var(--theme) !important;
}
</style>
