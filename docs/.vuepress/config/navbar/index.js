//导航栏
module.exports = [
    { text: "主页", link: "/index.html", icon: "reco-home" },
    {
        text: "后端",
        icon: "reco-document",
        children: [
            {
                text: "Projects🎈",
                children: ["/views/backend/Java", "/views/backend/Java基础"],
            },
        ],
    },
    { text: "关于我", link: "/views/test/about", icon: "reco-message" },
];
