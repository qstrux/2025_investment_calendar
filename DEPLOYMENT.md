# 部署指南 - 2025 Investment Calendar

## ✅ 项目状态

- ✅ 项目已成功配置
- ✅ 构建测试通过
- ✅ 代码已推送到 GitHub: https://github.com/qstrux/2025_investment_calendar
- ✅ 现有 Cloudflare Pages 项目: `project-cd4688b0`
- ✅ 当前部署URL: https://project-cd4688b0.pages.dev/

## 🚀 部署选项

### 选项 1: 通过 Cloudflare Dashboard (推荐)

这是最简单的方法，适合首次部署或更新现有项目。

1. **登录 Cloudflare Dashboard**
   - 访问: https://dash.cloudflare.com/
   - 进入 Pages 部分

2. **更新现有项目**
   - 找到项目 `project-cd4688b0`
   - 点击 "Settings" → "Builds & deployments"
   - 确认构建配置:
     ```
     Build command: npm run build
     Build output directory: dist
     Root directory: /
     ```

3. **触发新部署**
   - GitHub 集成会自动检测到您的最新 push
   - 或者手动触发: "Deployments" → "Create deployment"

4. **环境变量 (可选)**
   - 在 "Settings" → "Environment variables" 添加:
     ```
     VITE_APP_TITLE=2025 Investment Calendar
     VITE_APP_LOGO=/logo.png
     VITE_ANALYTICS_ENDPOINT=
     VITE_ANALYTICS_WEBSITE_ID=
     ```

### 选项 2: 使用 Wrangler CLI

如果您需要通过命令行部署：

```bash
# 首先需要登录 Cloudflare
npx wrangler login

# 部署到生产环境
npx wrangler pages deploy dist --project-name=project-cd4688b0

# 或使用 npm script
npm run deploy
```

**注意**: 使用 CLI 部署时，您需要有 Cloudflare 账户的适当权限。

### 选项 3: 通过 GitHub Actions (推荐用于 CI/CD)

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    name: Deploy to Cloudflare Pages
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Publish to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: project-cd4688b0
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## 📋 构建信息

- **Node 版本**: 18+
- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **构建工具**: Vite
- **包管理器**: npm

## 🔧 本地预览

在部署前，您可以本地预览生产构建：

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

预览服务器将在 http://localhost:4173 启动

## 🌐 自定义域名

如果您想使用自定义域名：

1. 在 Cloudflare Pages 项目设置中
2. 进入 "Custom domains"
3. 添加您的域名
4. 按照说明配置 DNS 记录

## 📊 监控和分析

项目已配置 Umami 分析（如果设置了环境变量）：
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

## ⚠️ 故障排除

### 构建失败

如果构建失败，检查：
1. Node 版本是否为 18+
2. 所有依赖是否正确安装: `npm ci`
3. 构建命令是否正确: `npm run build`

### 部署失败

1. 确认您有正确的 Cloudflare 权限
2. 检查项目名称是否正确
3. 确认 dist 目录存在且包含文件

## 📝 下一步

1. ✅ 代码已推送到 GitHub
2. 🔄 Cloudflare Pages 应该会自动检测到更新并开始构建
3. ⏱️ 等待几分钟让构建完成
4. 🎉 访问 https://project-cd4688b0.pages.dev/ 查看您的应用

## 📱 功能清单

您的应用包含以下功能：

- ✅ 2025年投资日历
- ✅ FOMC 会议跟踪
- ✅ 经济数据发布（CPI、PPI、非农就业）
- ✅ 科技公司财报日期
- ✅ 日历导出功能（Google Calendar、Apple Calendar、Outlook）
- ✅ 事件搜索和筛选
- ✅ 响应式设计
- ✅ 详细事件解读
- ✅ 俱乐部会员功能展示

## 🎨 设计风格

- 黑金机构风格主题
- Playfair Display（标题）+ Inter（正文）字体
- 专业金融机构外观

---

**需要帮助？**
如果您在部署过程中遇到任何问题，请随时告诉我！
