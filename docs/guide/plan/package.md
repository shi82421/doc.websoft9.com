---
sidebar_position: 1.3
slug: /plan-package
---

# 准备安装所需的软件包

在 DevOps 流程中，被安装的软件包名为软件制品（Artifacts）。它是软件交付过程中生成的任何文件和结果物，这些可以是编译后的代码（二进制文件）、库文件、容器镜像、配置文件或数据库脚本等。简而言之，制品是软件构建过程的输出，它们是可以部署到服务器上以运行应用程序或服务的实体。

![](./assets/websoft9-artifactorys.png)

当然，准备制品不是必须的。如果 [Websoft9 模板化应用库](appstore) 中包含您所需的应用程序，那么您不需要关注制品的问题。     

否则，请根据下面的原则和教程，做好安装之前的准备。  

## 选用制品的原则

在软件部署过程中选择和使用制品时，你可以遵循一些基本原则来确保流程的顺畅和产品的质量：

- 镜像优先：优先使用 Docker 镜像作为安装制品，可以大大持续部署的效率
- 官方优先：优先使用软件原作者（官方）提供的制品
- 可获取性：制品应该可以从一个稳定且可靠的来源轻松获取，并提供不错的下载速度
- 许可合规：确认制品的许可证是否符合你的项目需求，以及是否符合任何法律或行业标准的合规要求
- 维护和支持：选择那些有良好维护记录的制品，它们背后应有一个积极的开发团队和社区，以便在出现问题时可以获得支持
- 文档和资源：优选那些有详细文档、教程和其他学习资源的制品，这样可以帮助团队更快地上手和解决问题
- 依赖管理：选择的制品应该能够轻松地与项目中已有的依赖管理工具集成，无需再编译
- 版本控制：选择的制品应该有清晰的版本控制策略，这样你可以轻松地跟踪和管理不同版本的制品
- 兼容性：选择与你的开发环境、部署平台和其他系统组件兼容的制品
- 可靠性：优先选用经过广泛测试并被证明是稳定可靠的制品

选择制品是一个需要考虑多个因素的决策过程，它涉及评估、测试和与团队决策。  


## 构建企业制品库

当部署应用缺乏所需的制品时，传统的做法是 “手工编译构建，然后再部署”。这种做法缺乏体系，质量和兼容性得不到保障，当前已经被 **制品库（Artifact Repository）** 替代。  

制品库是存储、管理和分发软件制品的系统。它类似于一个版本控制库，可以帮助开发者存储不同版本的软件制品，并且能够支持在线检索和部署。  

常见的制品库包括：

- JFrog Artifactory
- Sonatype Nexus
- Apache Archiva。

## 制品库 VS Git 仓库

制品库与 Git 仓库本质上都是具有版本控制的文件存储系统。 Git 仓库通常引用制品库的内容，从流程上看 Git 仓库是制品库的下游。  

所以 Git 仓库可以当做制品库使用，反之则不行。     

主流的 Git 仓库软件平台，例如：GitLab, Gitea都提供了制品库的功能。  

使用 Websoft9 托管平台过程中，可能会需要将 Git 仓库当做制品库：[手动创建 Git 仓库以存储软件包](./plan-git#create)
