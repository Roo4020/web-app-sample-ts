interface IasideMenuList {
    label: string
    path: string
    icon: string
}

export const ASIDE_MENU_LIST: IasideMenuList[] = [
    {
        label: "ホーム",
        path: "/home",
        icon: "home"
    },
    {
        label: "当サイトについて",
        path: "/about",
        icon: "help"
    },
    {
        label: "利用規約",
        path: "/tos",
        icon: "description"
    },
]