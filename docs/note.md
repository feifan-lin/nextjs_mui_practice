#nextjs\_mui_practice 创建笔记

[项目展示](https://mui.com/zh/material-ui/discover-more/showcase/)

[项目展示2](https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=sidenav)

[官方例子](https://github.com/mui/material-ui/blob/next/examples/nextjs-with-typescript/README.md)


[Material icons集合](https://mui.com/zh/material-ui/material-icons/)

[css样式各种实现方法](https://mui.com/zh/material-ui/guides/interoperability/#emotion)

[本地化（也称为“i10n”）](https://mui.com/zh/material-ui/guides/localization/)

[待实现的组建列表，比如 Carousel](https://mui.com/zh/material-ui/discover-more/roadmap/)

##社区工具

* [mui-theme-creator](https://bareynol.github.io/mui-theme-creator/) - 一个帮助设计和定制 Material-UI 组件库主题的工具。 包括基本的网站模板，并且展示各种组件及其受主题影响的方式。

##安装

[MUI X 扩展包](https://mui.com/zh/x/introduction/installation/)

```
cd /xx
yarn create next-app --typescript
.

yarn add @mui/material @emotion/react @emotion/styled
# styled component 在SSR使用有问题，https://mui.com/zh/material-ui/guides/styled-engine/
# yarn add @mui/material @mui/styled-engine-sc styled-components
yarn add @mui/icons-material
yarn add @emotion/cache
yarn add chart.js react-chartjs-2
yarn add @emotion/server
yarn add date-fns
yarn add uuid
yarn add react-perfect-scrollbar
```

##疑问解答

* VSCode无法识别 tsconfig.json 的baseUrl 和 paths
	* ```cmd + shift + p``` 输入 typescript: 选择typescript版本，选择当前工作区的