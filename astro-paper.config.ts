import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  // ========== 1. 网站基础信息（标题、域名、语言、时区、SEO） ==========
  site: {
    url: "https://www.bijiaoboke.ccwu.cc", // 生产部署必填；本地开发可空
    title: "夜雨博客", // 网站标题（导航栏、浏览器标签、SEO）
    description: "小学生整的个人博客，by GayChou", // 网站描述，搜索引擎抓取
    author: "Gay Chou",

    // 适配中文核心配置
    lang: "zh-CN", // 网页语言，默认en，中文必须改为zh-CN
    timezone: "Asia/Shanghai", // 时区默认UTC，国内固定上海时区
    dir: "ltr", // 文字从左到右，中文不用改；阿拉伯语用rtl

    // 社交分享OG封面图
    ogImage: "default-og.jpg", // public目录下的分享图，不填则用default-og.jpg
    googleVerification: "", // 谷歌站长验证字符串，也可写在.env
  },

  // ========== 2. 文章分页、定时发布配置 ==========
  posts: {
    perPage: 8, // 文章列表页每页展示数量，默认4
    perIndex: 6, // 首页展示文章条数，默认4
    scheduledPostMargin: 15 * 60 * 1000, // 定时文章容错：15分钟(毫秒)，防止时区偏差漏发
  },

  // ========== 3. 全局功能开关（明暗、搜索、归档、按钮） ==========
  features: {
    lightAndDarkMode: true, // 开启深色/浅色切换，false则固定浅色
    dynamicOgImage: true, // 自动为每篇文章生成专属OG分享图（推荐开启）
    showArchives: true, // 顶部导航显示「归档」入口
    showBackButton: true, // 文章底部显示返回列表按钮
    // 一键在GitHub编辑文章
    editPost: {
      enabled: true,
      baseUrl: "https://github.com/bijiaoboke/astro-paper/blob/main/src/content/blog/"
    },
    search: "pagefind", // 搜索引擎，默认pagefind；可选algolia
  },

  // ========== 4. 页脚社交账号配置（图标名称必须匹配svg文件名） ==========
  socials: [
    { name: "github", url: "https://github.com/bijiaoboke" },
    { name: "mail", url: "mailto:1296001396@qq.com" },
    { name: "wechat", url: "#" } // 微信需要自行添加wechat.svg图标
  ],

  // ========== 5. 文章底部分享渠道 ==========
  shareLinks: ["weibo", "wechat", "qq", "x", "copy"],
});
