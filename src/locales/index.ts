import { Locales } from './locales'

import kg from './kg.json'
import ru from './ru.json'
import en from './en.json'

export const defaultLocale = Locales.KG
 
export const messages = {
    [Locales.KG]: kg,
    [Locales.RU]: ru,
    [Locales.EN]: en
}
