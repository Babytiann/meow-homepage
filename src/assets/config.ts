declare interface Config {
    name:{
        first: string,
        last?: string,
    }
    slogan: {
        value: string,
    }
    button?: Array<{
        id: number,
        title: string,
        url: string,
    }>,

}

export const config: Config = {
    name: {
        first: "🧀Meow💕"
    },
    slogan: {
        value: "Hi ! I'm Meow. 一只菜菜的半栈工程师👻"
    },
    button: [
        {
            id: 1,
            title: "Blog",
            url: "https://sang.gemdzqq.com",
        },
        {
            id: 2,
            title: "Resume",
            url: 'https://meow.gemdzqq.com',
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