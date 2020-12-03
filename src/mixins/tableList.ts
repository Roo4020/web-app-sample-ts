interface Ihometable {
    label: string
    key: string
    width: number
    visible: boolean
}

export const HOME_LIST: Ihometable[] = [
    {
        label: "名前",
        key: "name",
        width: 40,
        visible: true,
    },
    {
        label: "背景色",
        key: "backgroundColor",
        width: 40,
        visible: true,
    },
    {
        label: "文字色",
        key: "color",
        width: 20,
        visible: true,
    },
]