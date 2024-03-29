import { ApplicationCommandOptionType } from "discord.js"

export const commands = [
    {
        name: `ben`,
        description: `You asked Ben a question`,
        options: [
            {
                name: 'reason',
                description: `You asked Ben a question`,
                required: true,
                type: ApplicationCommandOptionType.String,
            }
        ]
    }, {
        name: `catsay`,
        description: `catsay`,
        options: [
            {
                name: `reason`,
                description: `catsay`,
                required: true,
                type: ApplicationCommandOptionType.String,
            }
        ]

    }, {
        name: `duma`,
        description: `You asked duma.`
    }, {
        name: `help`,
        description: `help from bot.`
    }, {
        name: `pedofil`,
        description: `pedofil from bot.`,
        options: [
            {
                name: `mention`,
                description: `mention from pedofil`,
                type: 6,
                required: true
            }
        ]

    }, {
        name: `slap`,
        description: `slap mention`,
        options: [
            {
                name: `mention`,
                description: `mention form slap`,
                type: 6,
                required: true
            }
        ]
    }, {
        name: 'love',
        description: 'mention',
        options: [
            {
                name: `user`,
                description: ` mention`,
                type: 6,
                required: true
            }
        ]
    }, {
        name: 'beer',
        description: 'mention',
        options: [
            {
                name: `user`,
                description: ` mention`,
                type: 6,
                required: true
            }
        ]
    }, {
        name: `tedi`,
        description: `tedi`,
        options: [
            {
                name: `user`,
                description: ` tedi`,
                type: 6,
                required: true
            }
        ]

    }, {
        name: 'cm',
        description: 'mention',
        options: [
            {
                name: `mention`,
                description: ` mention`,
                type: 6,
                required: true
            }
        ]
    }, {
        name: `botinfo`,
        description: `check from informations bot.`
    }, {
        name: `serverinfo`,
        description: `check from informations server.`
    }, {
        name: `userinfo`,
        description: `check from informations user.`,
        options: [
            {
                name: `mention`,
                description: `mention from user`,
                type: 6,
                required: true
            }
        ]
    }, {
        name: 'removedume',
        description: 'deleted from dume',
        options: [
            {
                name: `reason`,
                description: `reason from dume`,
                type: 3,
                required: true
            }
        ]
    }, {
        name: `addduma`,
        description: `add from duma`,
        options: [
            {
                name: `reason`,
                description: `reason from duma`,
                type: 3,
                required: true
            }
        ]
    }
]