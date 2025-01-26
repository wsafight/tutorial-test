标头配置
TutorialKit 中的预览和终端功能依赖于 WebContainers 技术。为了确保该技术正常工作，您需要配置 Web 服务器的标头以确保站点是跨源隔离的（您可以在 [webcontainers.io](https://webcontainers.io/guides/configuring-headers) 上阅读更多相关信息）。

为此，要求教程页面服务器具有以下标头：

```bash
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```