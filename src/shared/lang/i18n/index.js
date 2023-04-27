import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import {TR_AZ} from 'shared/lang/locales/az'
import {TR_EN} from 'shared/lang/locales/en'
import {TR_RU} from 'shared/lang/locales/ru'

i18next.use(initReactI18next).init({
    resources:{
        az:TR_AZ,
        en:TR_EN,
        ru:TR_RU
    },
    lng:"az",
    interpolation:{
        escapeValue:false
    }
})