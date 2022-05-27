import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/home",
    {
        text: "前端", icon: "creative", link: "/zh/Webs/",prefix: "/zh/Webs/",
        children:[
            "Vue/","Js/","React/","VuePress/"
        ]
    },
    {
        text: "后端", icon: "creative", link: "/zh/Servers/",prefix: "/zh/Servers/",
        children:[
            "Java/","Go/","Spring/","Netty/"
        ]
    },
    {text: "其他文章", icon: "creative", link: "/zh/Others/"},
    {
        text: "杂谈",
        icon: "note",
        link: "/zh/Takings",
    },
]);
