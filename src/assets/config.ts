interface Config {
    //You can add any other name of button here
    buttonTitle?: {
        A?: {
            title: string,
            url: string,
            key: number
        },
        B?: {
            title: string,
            url: string,
            key: number
        },
        C?: {
            title: string,
            url: string,
            key: number
        }
    }
}

export const config: Config = {
    buttonTitle: {
        A: {
            title: "Blog",
            url: "https://babytiann.cn",
            key: 1,
        },
        B: {
            title: "GitHub",
            url: 'https://github.com/Babytiann',
            key: 2,
        },
        C: {
            title: "电子邮件",
            url: 'mailto: meow@gemdzqq.com',
            key: 3,
        }
    }
}
