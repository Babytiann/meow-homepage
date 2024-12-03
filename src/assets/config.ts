interface Config {
    name:{
        first: string,
        last?: string,
    }
    slogan: {
        value: string,
    }
    Avatar: {
        url: string,
    },
    button?: Array<{
        id: number,
        title: string,
        url: string,
    }>,

}

export const config: Config = {
    name: {
        first: "Meow"
    },
    slogan: {
        value: "欢迎来到我的个人主页，一只菜菜的半栈工程师"
    },
    Avatar: {
        url: 'src/assets/img/头像.png',
    },
    button: [
        {
            id: 1,
            title: "Blog",
            url: "https://sang.babytiann.cn",
        },
        {
            id: 2,
            title: "Resume",
            url: 'https://meow.babytiann.cn',
        },
        {
            id: 3,
            title: "Email",
            url: 'mailto:meow@gemdzqq.com',
        },
        {
            id: 4,
            title: "GitHub",
            url: 'https://github.com/Babytiann',
        }
    ]
}