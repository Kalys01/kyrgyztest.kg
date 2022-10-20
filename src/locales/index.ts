import { Locales } from './locales'

import ru from './ru.json'
import en from './en.json'

export const defaultLocale = Locales.RU

export const messages = {
    [Locales.RU]: ru,
    [Locales.EN]: en
}
