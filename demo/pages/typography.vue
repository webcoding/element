<template>
  <div class="page">
    <div class="page-content">
      <h1>网页排版布局 typo.css</h1>
      <p class="small">此排版设计，基于 normalize 对默认属性实现无差异化，再用 reboot 做样式微调，之后用 typography 样式对显示效果做优化处理。</p>
      <p>阅读模式，使用line-height: 1.8？排版样式 typography 默认引用不？待定。</p>

      <h2>标题 <small>Header</small></h2>

      <div class="example">
        <h1>h1. 一级标题 <small>副标题</small></h1>
        <h2>h2. 二级标题 <small>副标题或说明</small></h2>
        <h3>h3. 三级标题 <small>一些说明</small></h3>
        <h4>h4. 四级标题 <small>一些说明</small></h4>
        <h5>h5. 五级标题 <small>一些说明</small></h5>
        <h6>h6. 六级标题 <small>一些说明</small></h6>
      </div>
      <div class="desc">本项目默认采用了 14px 的字体，1.5 的行高，并且兼容 Mac 和 Window 的字体配置，非常适合国内的网站样式。</div>

      <h2>段落 <small>Paragraph</small></h2>
      <p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>

      <h2>段落强调</h2>
      <p class="lead">写在规则前面的话——项目的可维护性第一。</p>

      <h2>hr</h2>
      <hr>

      <h2>强调标签</h2>
      <div class="example">
        <p>
          <code>&lt;small&gt;</code> 针对不需要强调的 <small>inline或block类型的文本</small> 使用。<br>
          <code>&lt;strong&gt;</code> 用 <strong>加粗强调</strong> 一段重要文本。<br>
          <code>&lt;em&gt;</code> 用 <em>斜体字</em> 强调一段文本。<br>
          <code>&lt;b&gt;</code> 是为了 <b>高亮词</b> 或 <b>短语</b> 而不会赋予重要含义。<br>
          <code>&lt;i&gt;</code> 主要被用来表示 <i>语音、技术术语</i> 等。
        </p>
      </div>

      <h2>缩写形式</h2>
      <p>HTML的 <code>&lt;abbr&gt;</code> 标签是为缩写语或缩写词在hover状态时能显示扩展的文本。使用 <code>title</code> 属性的 <code>&lt;abbr&gt;</code> 会带有点状(dotted)底边线，鼠标经过时会显示带问号的箭头，并提示完整的字词信息。</p>
      <div class="example">
        <p>要在缩写词上实现hover时的扩展文本，应该包含 <code>title</code> 属性.</p>
        <p>单词 attribute 的缩写是 <abbr title="attribute">attr</abbr>。</p><br>

        <p>对缩写词元素应用 <code>.initialism</code> 会减小一号字体大小，以协调排版效果。</p>
        <p><abbr title="HyperText Markup Language 超文本标记语言" class="initialism">HTML</abbr> 是自切片面包问世以来最棒的发明。</p>
      </div>

      <h2>地址 <small>定义文档作者或拥有者的联系信息。</small></h2>
      <p>地址标签 <code>&lt;address&gt;</code> 通过行尾的 <code>&lt;br&gt;</code> 标签保持格式。</p>
      <div class="docs-example">
        <address>
          <strong>tCreator文化有限公司</strong><br>
          某省某市某大道404号<br>
          佚名大厦, A座49楼<br>
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
        <address>
          <strong>有关负责人</strong><br>
          <a href="mailto:###">first.last@gmail.com</a>
        </address>
      </div>

      <h2>引用 <small>Blockquote 定义摘自另一个源的块引用</small></h2>
      <blockquote>
        <p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
        <small>马尔克斯 ——《百年孤独》</small>
      </blockquote>

      <h2>Lists</h2>
      <h3>ul</h3>
      <ul>
        <li>条目 #1</li>
        <li>条目 #2
          <ul>
            <li>条目 #1</li>
            <li>条目 #2
              <ul>
                <li>条目 #1</li>
                <li>条目 #2</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>条目 #3</li>
        <li>条目 #4</li>
      </ul>

      <h3>ol</h3>
      <ol>
        <li>条目 #1</li><li>条目 #2
          <ol>
            <li>条目 #1</li>
            <li>条目 #2
              <ol>
                <li>条目 #1</li>
                <li>条目 #2</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>条目 #3</li>
        <li>条目 #4</li>
      </ol>

      <h3>dl</h3>
      <dl>
        <dt>响应式网页设计</dt>
        <dd>自适应网页设计（英语：Responsive web design，通常缩写为RWD）是一种网页设计的技术做法，该设计可使网站在多种浏览设备（从桌面电脑显示器到移动电话或其他移动产品设备）上阅读和导航，同时减少缩放、平移和滚动。</dd>
        <dt>响应式网页设计（RWD）的元素</dt>
        <dd>采用 RWD 设计的网站 使用 CSS3 Media queries，即一种对 @media 规则的扩展，以及流式的基于比例的网格和自适应大小的图像以适应不同大小的设备。</dd>
      </dl>


      <h2>排版应用 <small>充足的弹性，才能满足多变的排版需求。</small></h2>
      <div class="example">
        <p>此示例摘自 <abbr title="花名小鱼">sofish</abbr> 的 <a href="http://typo.sofish.de/">typo.css</a></p>
        <blockquote>
          <h4><cite>《论语学而篇》</cite></h4>
          <p><small><b>作者：</b><abbr title="名丘，字仲尼">孔子</abbr>（<time>前551年9月28日－前479年4月11日</time>）</small></p>
          <p>《学而》是《论语》第一篇的篇名。《论语》中各篇一般都是以第一章的前二三个字作为该篇的篇名。《学而》一篇包括16章，内容涉及诸多方面。其中重点是“吾日三省吾身”；“节用而爱人，使民以时”；“礼之用，和为贵”以及仁、孝、信等道德范畴。 </p>
          <blockquote>
            <p>子曰<sup><a href="#note1">[1]</a></sup>：“学<sup><a href="#note2">[2]</a></sup>而时习<sup><a href="#note3">[3]</a></sup>之，不亦说<sup><a href="#note4">[4]</a></sup>乎？有朋<sup><a href="#note5">[5]</a></sup>自远方来，不亦乐<sup><a href="#note6">[6]</a></sup>乎？人不知<sup><a href="#note7">[7]</a></sup>，而不愠<sup><a href="#note8">[8]</a></sup>，不亦君子<sup><a href="#note9">[9]</a></sup>乎？” </p>
          </blockquote>
          <h4>注释</h4>
          <p class="small">
            <span id="note1">[1]</span> 子：中国古代对于有地位、有学问的男子的尊称，有时也泛称男子。《论语》书中“子曰”的子，都是指孔子而言。<br>
            <span id="note2">[2]</span> 学：孔子在这里所讲的“学”，主要是指学习西周的礼、乐、诗、书等传统文化典籍。 <br>
            <span id="note3">[3]</span> 时习：在周秦时代，“时”字用作副词，意为“在一定的时候”或者“在适当的时候”。但朱熹在《论语集注》一书中把“时”解释为“时常”。“习”，指演习礼、乐；复习诗、书。也含有温习、实习、练习的意思。 <br>
            <span id="note4">[4]</span> 说：音ｙｕè，同悦，愉快、高兴的意思。 <br>
            <span id="note5">[5]</span> 有朋：一本作“友朋”。旧注说，“同门曰朋”，即同在一位老师门下学习的叫朋，也就是志同道合的人。 <br>
            <span id="note6">[6]</span> 乐：与说有所区别。旧注说，悦在内心，乐则见于外。 <br>
            <span id="note7">[7]</span> 人不知：此句不完整，没有说出人不知道什么。缺少宾语。一般而言，知，是了解的意思。人不知，是说别人不了解自己。 <br>
            <span id="note8">[8]</span> 愠：音ｙùｎ，恼怒，怨恨。 <br>
            <span id="note9">[9]</span> 君子：《论语》书中的君子，有时指有德者，有时指有位者。此处指孔子理想中具有高尚人格的人。
          </p>
          <h4>译文</h4>
          <p>孔子说：“学了又时常温习和练习，不是很愉快吗？有志同道合的人从远方来，不是很令人高兴的吗？人家不了解我，我也不怨恨、恼怒，不也是一个有德的君子吗？” </p>
          <h4>评析</h4>
          <p>宋代著名学者<u class="typo-u">朱熹</u>对此章评价极高，说它是“入道之门，积德之基”。本章这三句话是人们非常熟悉的。历来的解释都是：学了以后，又时常温习和练习，不也高兴吗等等。三句话，一句一个意思，前后句子也没有什么连贯性。但也有人认为这样解释不符合原义，指出这里的“学”不是指学习，而是指学说或主张；“时”不能解为时常，而是时代或社会的意思，“习”不是温习，而是使用，引申为采用。而且，这三句话不是孤立的，而是前后相互连贯的。这三句的意思是：自己的学说，要是被社会采用了，那就太高兴了；退一步说，要是没有被社会所采用，可是很多朋友赞同<abbr title="张燕婴">我</abbr>的学说，纷纷到我这里来讨论问题，我也感到快乐；再退一步说，即使社会不采用，人们也不理解我，我也不怨恨，这样做，不也就是君子吗？（见《齐鲁学刊》1986年第6期文）这种解释可以自圆其说，而且也有一定的道理，供读者在理解本章内容时参考。</p>
          <p>此外，在对“人不知，而不愠”一句的解释中，也有人认为，“人不知”的后面没有宾语，人家不知道什么呢？当时因为孔子有说话的特定环境，他不需要说出知道什么，别人就可以理解了，却给后人留下一个谜。有人说，这一句是接上一句说的，从远方来的朋友向我求教，我告诉他，他还不懂，我却不怨恨。这样，“人不知”就是“人家不知道我所讲述的”了。这样的解释似乎有些牵强。</p>
          <p>总之，本章提出以学习为乐事，做到人不知而不愠，反映出孔子学而不厌、诲人不倦、注重修养、严格要求自己的主张。这些思想主张在《论语》书中多处可见，有助于对第一章内容的深入了解。</p>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
