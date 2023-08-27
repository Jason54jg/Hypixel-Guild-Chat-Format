import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, Color} from 'Vigilance';
@Vigilant('French Legacy Bridge' {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Guild Chat', 'Officer Chat', 'Command Handler', 'Event Handler'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class Settings {
    // ! Guild Chat
    @SwitchProperty({
        name: "Guild Chat Format",
        description: "Basculer le format de discussion Bridge.",
        category: "Guild Chat",
        subcategory: "General"
    })
    guildChatFormat = true;
    
    @TextProperty({
        name: 'Bot name',
        description: 'Nom du bot',
        category: 'Guild Chat',
        subcategory: 'General',
        placeholder: 'Minecraft Username',
    })
    guildBotName = 'DesterBot';

    // ! Guild >
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §2Guild > §7Format",
        category: "Guild Chat",
        subcategory: "§2Guild >"
    })
    guildArrowFormat = true;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Sélectionnez un remplaçant',
        category: 'Guild Chat',
        subcategory: "§2Guild >",
        options: ['Guild >', 'Discord >', 'Bridge >', 'Bridge Bot >'],
    })
    guildArrowOption = 0;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Guild Chat',
        subcategory: "§2Guild >",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildArrowColor = 2;

    // ! [RANK]
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §3[RANK] §7Format",
        category: "Guild Chat",
        subcategory: "§3[RANK]"
    })
    guildRankFormat = true;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: 'Sélectionnez un remplaçant',
        category: 'Guild Chat',
        subcategory: "§3[RANK]",
        options: ['[DISCORD]', '[Discord]', '[GUILD]', '[Guild]'],
    })
    guildRankOption = 0;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Guild Chat',
        subcategory: "§3[RANK]",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildRankColor = 3;

    // ! discordUsername
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Basculer le format du nom d'utilisateur Discord",
        category: "Guild Chat",
        subcategory: "§fDiscord Username Format",
    })
    guildDiscordUsernameFormat = true;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Guild Chat',
        subcategory: "§fDiscord Username Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildDiscordUsernameColor = 9;

    // ! » 
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Sélectionnez un remplaçant',
        category: 'Guild Chat',
        subcategory: "§fDiscord message split",
        options: [': ', ' » ', ' > '],
    })
    guildDiscordMessageSplitOption = 1;

    // ! message
    // ? Dropdown
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Basculer le format du message Discord",
        category: "Guild Chat",
        subcategory: "§fDiscord message Format"
    })
    guildDiscordMessageFormat = true;

    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Guild Chat',
        subcategory: "§fDiscord message Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildDiscordMessageColor = 15;

    // ! Officer Chat
    @SwitchProperty({
        name: "Officer Chat Format",
        description: "Basculez le format Bridge Chat pour le chat des officiers.",
        category: "Officer Chat",
        subcategory: "General"
    })
    officerChatFormat = true;

    @TextProperty({
        name: 'Bot name',
        description: 'Nom du bot',
        category: 'Officer Chat',
        subcategory: 'General',
        placeholder: 'Minecraft Username',
    })
    officerBotName = 'DesterBot';
    
    // ! officer >
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §3Officer > §7Format",
        category: "Officer Chat",
        subcategory: "§3Officer >"
    })
    officerArrowFormat = true;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Sélectionnez un remplaçant',
        category: 'Officer Chat',
        subcategory: "§3Officer >",
        options: ['Officer >', 'Discord >', 'Bridge >', 'Bridge Bot >'],
    })
    officerArrowOption = 0;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Officer Chat',
        subcategory: "§3Officer >",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerArrowColor = 3;
    
    // ! [RANK]
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §3[RANK] §7Format",
        category: "Officer Chat",
        subcategory: "§3[RANK]"
    })
    officerRankFormat = true;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: 'Sélectionnez un remplaçant',
        category: 'Officer Chat',
        subcategory: "§3[RANK]",
        options: ['[DISCORD]', '[Discord]', '[OFFICER]', '[Officer]'],
    })
    officerRankOption = 0;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Officer Chat',
        subcategory: "§3[RANK]",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerRankColor = 3;
    
    // ! discordUsername
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Basculer le format du nom d'utilisateur Discord",
        category: "Officer Chat",
        subcategory: "§fDiscord Username Format",
    })
    officerDiscordUsernameFormat = true;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Officer Chat',
        subcategory: "§fDiscord Username Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerDiscordUsernameColor = 9;
    
    // ! » 
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Sélectionnez un remplaçant',
        category: 'Officer Chat',
        subcategory: "§fDiscord message split",
        options: [': ', ' » ', ' > '],
    })
    officerDiscordMessageSplitOption = 1;
    
    // ! message
    // ? Dropdown
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Basculer le format du message Discord",
        category: "Officer Chat",
        subcategory: "§fDiscord message Format"
    })
    officerDiscordMessageFormat = true;
    
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Sélectionnez une couleur de remplacement.',
        category: 'Officer Chat',
        subcategory: "§fDiscord message Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerDiscordMessageColor = 15;

    // ! Command Handler
    @SwitchProperty({
        name: "Command Handler Format",
        description: "Basculer le format Bridge Chat pour les commandes.",
        category: "Command Handler",
        subcategory: "General"
    })
    commandHandlerFormat = true;

    // ! Event Handler
    @SwitchProperty({
        name: "Event Handler Chat Format",
        description: "Changer le format pour les événements.",
        category: "Event Handler",
        subcategory: "General"
    })
    eventHandlerFormat = true;

    @SelectorProperty({
        name: "[EVENT] Color",
        description: 'Sélectionnez une couleur de titre.',
        category: 'Event Handler',
        subcategory: "§f[EVENT]",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventColor = 12;

    @SelectorProperty({
        name: "Event Information Color",
        description: 'Sélectionnez une couleur.',
        category: 'Event Handler',
        subcategory: "§fEvent",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventMessageColor = 15;

    @SelectorProperty({
        name: "Event Arrow Color",
        description: 'Sélectionnez une couleur.',
        category: 'Event Handler',
        subcategory: "§fEvent",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventArrowColor = 15;

    @SelectorProperty({
        name: "Event Time Color",
        description: 'Sélectionnez une couleur.',
        category: 'Event Handler',
        subcategory: "§fEvent",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventTimeColor = 15;

    @SwitchProperty({
        name: "Event Title",
        description: "Basculer le titre pour les événements.",
        category: "Event Handler",
        subcategory: "Title"
    })
    eventHandlerTitle = true;

    @SelectorProperty({
        name: "Event Title Color",
        description: 'Sélectionnez une couleur.',
        category: 'Event Handler',
        subcategory: "Title",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventTitleColor = 12;

    constructor() {
        this.initialize(this);
    }
}

export default new Settings;
