import {sidebar} from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
    "/zh/": [
        "",
        {
            text: "前端系列",
            icon: "creative",
            prefix: 'Webs/',
            children: [
                "html/",
                "Js/"
            ]
        },
        {
            text:"后端系列",
            icon:"creative",
            prefix:"Servers/",
            children:[
                "Java/",
                "Go/",
                "Spring/",
                "Netty/"
            ]
        },
        {
            text:"杂牌技术",
            icon:"creative",
            link:"/zh/Others/"
        },
        {
            text:"杂谈",
            icon:"creative",
            link:"/zh/Takings/"
        },
    ],
    "/zh/Takings/": "structure",
    "/zh/Webs/":"structure",
    "/zh/Servers/":"structure",
    "/zh/Others/":"structure",
});
