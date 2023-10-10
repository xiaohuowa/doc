const navbar = require("./config/navbar");

import { defaultTheme } from "vuepress";

export default {
    base: "/doc/",
    theme: defaultTheme({
        // 导航
        navbar,
        // 默认主题配置
        /* navbar: [
            {
                text: "首页lala",
                link: "/",
            },
            {
                text: "about",
                link: "/views/test/about",
            },
            {
                text: "测试组",
                children: [
                    {
                        text: "后端",
                        link: "/backend/",
                    },
                    {
                        text: "测试组内层2",
                        children: [
                            {
                                text: "about",
                                link: "/views/test/about",
                            },
                            {
                                text: "首页lala",
                                link: "/",
                            },
                        ],
                    },
                ],
            },
        ], */
        // Public 文件路径
        logo: "/images/hero.png",
        lastUpdatedText: "最近更新时间",
        contributorsText: "提交人",
    }),
};
