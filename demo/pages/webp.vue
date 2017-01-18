<template>
  <page class="page-abc">
    <div class="page-header">
      <h3>WebP使用方案 <small></small></h3>
      <p>source: http://zhitu.isux.us/index.php/preview/webp</p>
    </div>
    <group title="PC端，触屏版：" padded>
      <p>前端JS方案——利用img标签加载一张base64的WebP图片，在img标签的onload事件中判断该图片是否具有宽高的属性，若有表示支持webP，若没有表示不支持webP。</p>
      <p>后台判断方案——判断浏览器请求头Accept是否支持WebP，返回是否支持的标示给前台。</p>
      <p>以上两种方案中，前端方案为佳，当JS被禁止的时候，可以使用后台判断方式执行判断。</p>
      <h4>附上JS代码</h4>
<pre>/**
 * [checkWebpFeature 检测浏览器是否支持WebP（异步方式）]
 * @param  {String}   feature  [特征]
 * @param  {Function} callback [回调函数]
 */
// check_webp_feature:
// 'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
// 'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
function checkWebpFeature(feature, callback) {
  var kTestImages = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="
    animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
  };
  var img = new Image();
  img.onload = function () {
    var result = (img.width > 0) && (img.height > 0);
    callback(feature, result);
  };
  img.onerror = function () {
    callback(feature, false);
  };
  img.src = "data:image/webp;base64," + kTestImages[feature];
}
</pre>
    </group>
    <group title="iOS独立版：" padded>
      <p>用户直接拉取WebP格式的图片（如果CDN有存储），下载完成后在前端实时转码（前端开发的WebP sdk），将WebP图片转换为jpg或png图片。展示给用户的是普通图片。</p>
      <p>这样做的好处在于下载WebP的时候节省了带宽，虽然在转码的时候会耗时，但是由于下载时间缩短中和了转码的时间，所以用户基本感觉不出来差别。我们在不延长用户等待时间的同时缩小图片体积，节省了带宽。</p>
    </group>
    <group title="安卓独立版：" padded>
      <p>后台判断用户机器系统，当系统版本大于4.0的时候返回支持WebP标示（因为其原生支持），前端拉取图片时后台会根据这个标示决定使用原格式图片还是WebP格式的图片。</p>
    </group>
    <group title="兼容方案" padded>
      <p>对于不支持WebP的浏览器，可根据是否支持WebP的判断来拉取jpg或者png图片，也可以使用flash作为载体来加载WebP图片（空间相册兼容低端浏览器方案）。</p>
      <p></p>
    </group>
    <group title="关于用户下载图片" padded>
      <p>PC和webview方案中，用户若想将图片另存为本地（可能本地不支持WebP预览展示），可在用户右击“另存为”的时候，绑定右击事件，加载当前WebP图片对应的jpg图片，然后直接下载jpg图片（空间相册方案）。</p>
      <p>虽然这样的做法会导致多加载一张图片，但是由于只在右击时候触发加载，而且用户右击“另存为”的行为较少，消耗可不计。</p>
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
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
