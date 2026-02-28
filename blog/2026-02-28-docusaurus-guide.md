---
title: Docusaurus 博客搭建指南
description: 使用 Docusaurus + GitHub Pages 搭建免费技术博客
slug: docusaurus-guide
tags: [docusaurus, tutorial, github-pages]
---

本文介绍如何使用 Docusaurus 和 GitHub Pages 搭建一个免费的技术博客。

## 准备工作

- GitHub 账号
- Node.js 18+
- 一个代码编辑器

## 快速开始

### 1. 创建项目

```bash
npx create-docusaurus@latest my-blog classic
cd my-blog
```

### 2. 本地预览

```bash
npm start
```

访问 http://localhost:3000 查看效果。

### 3. 配置博客信息

编辑 `docusaurus.config.ts` 文件：

```typescript
const config = {
  title: '你的博客名',
  tagline: '博客副标题',
  // ...
};
```

### 4. 部署到 GitHub Pages

```bash
npm run deploy
```

或者使用 GitHub Actions 自动部署。

## 添加评论功能

推荐使用 Giscus，它使用 GitHub Discussions 作为评论系统。

1. 在 GitHub 上安装 [Giscus App](https://github.com/apps/giscus)
2. 启用 Discussions 功能
3. 获取配置信息并填入

## 总结

使用 Docusaurus + GitHub Pages 搭建博客是完全免费的，而且维护成本很低。只需专注于写文章即可。
