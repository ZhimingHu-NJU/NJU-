# 南京大学先进制造学院官网原型

这是一个面向“南京大学先进制造学院”的现代化、国际化、响应式官方网站原型。项目参考高水平理工科学院官网的信息架构、首页节奏、研究导向和卡片式内容组织方式，使用南京大学紫色、深蓝、科技蓝、浅灰与渐变纹理形成独立视觉风格；未使用 MIT 或南京大学官网的图片、文字、代码、Logo 等视觉资产。

> 说明：当前执行环境无法从 npm registry 获取框架依赖，因此本原型采用零依赖静态前端实现，保留模块化数据、组件化渲染思路与响应式样式，确保 `npm install`、`npm run dev`、`npm run build` 可以直接运行。后续接入网络依赖后，可平滑迁移到 Vite/React 或 Next.js。

## 技术栈

- 原生 ES Modules
- TypeScript 风格数据文件（`src/data/site.ts`）
- 零依赖 Node.js 静态开发服务器
- Tailwind-inspired 响应式 CSS 工具样式与组件样式

## 如何安装

```bash
npm install
```

## 如何运行

```bash
npm run dev
```

默认访问地址：<http://localhost:3000>

## 如何构建

```bash
npm run build
npm run start
```

构建产物输出到 `dist/`。

## 如何修改网站内容

网站主要内容集中在 `src/data/site.ts` 与运行时镜像 `src/data/site.js`，包括：

- 学院名称、英文名、联系方式
- 导航结构
- 学院重点文案
- 研究方向
- 科研平台
- 师资占位信息
- 人才培养信息
- 新闻动态
- 学术活动
- 招聘与招生岗位
- 产研合作行业方向

页面渲染逻辑位于 `src/app.js`，统一视觉样式位于 `src/styles.css`。后续如果迁移到 Vite/React，可将 `src/data/site.ts` 作为内容源，把 `src/app.js` 中的页面片段拆分为 React 组件。

## 已实现页面

- 首页 Home
- About 学院概况
- Research 研究方向
- Platforms 科研平台
- People 师资队伍（含静态前端筛选）
- Education 人才培养
- News 新闻动态
- Events 学术活动
- Join Us 加入我们（含原型表单提示）
- Collaboration 产研合作
- Contact 联系我们（含地图占位区域）

## 后续可扩展方向

- 替换真实学院 Logo、院徽与视觉识别系统
- 接入真实教师照片、个人主页、科研成果和团队介绍
- 接入正式新闻详情页、新闻链接与 CMS
- 接入正式招生政策、招聘公告与在线投递系统
- 替换科研平台图片、实验室场景图与设备图片
- 增加完整英文站点内容与国际化路由
- 接入合规地图服务与访客交通指南
- 迁移到 Vite/React 或 Next.js，并接入 Tailwind CSS 构建链
- 增加可访问性审计、SEO 结构化数据和部署流水线
