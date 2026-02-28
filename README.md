# 技术博客

使用 Docusaurus + GitHub Pages 搭建的技术博客。

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm start
```

访问 http://localhost:3000

## 写作指南

### 创建新文章

在 `blog/` 目录下创建新的 Markdown 文件，命名格式：

```
YYYY-MM-DD-文章 slug.md
```

例如：`2026-02-28-new-post.md`

### 文章格式

```markdown
---
title: 文章标题
description: 文章描述
slug: url-slug
tags: [tag1, tag2]
---

文章内容...
```

### 添加分隔线

在文章中使用 `<!-- truncate -->` 来控制在博客列表页显示的摘要长度。

## 部署

### 方式一：GitHub Actions（推荐）

1. 将代码推送到 GitHub 仓库
2. 修改 `docusaurus.config.ts` 中的以下配置：
   - `organizationName`: 你的 GitHub 用户名
   - `projectName`: 仓库名
3. 仓库设置中启用 GitHub Pages：
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
4. 推送代码到 main 分支，自动部署

### 方式二：手动部署

```bash
pnpm run build
pnpm run deploy
```

## 配置 Giscus 评论

1. 访问 https://giscus.app
2. 按照指引获取配置信息
3. 修改 `src/theme/BlogPostPage/index.tsx` 中的配置

## 自定义域名（可选）

1. 在 GitHub 仓库设置中添加自定义域名
2. 在域名提供商处添加 DNS 记录

## 更多资源

- [Docusaurus 文档](https://docusaurus.io/docs)
- [Docusaurus 博客教程](https://docusaurus.io/docs/blog)
