import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
  },
  [LinkPreset.Blog]: {
    name: i18n(I18nKey.blog),
    url: '/blog/',
  },
  [LinkPreset.Projects]: {
    name: i18n(I18nKey.projects),
    url: '/projects/',
  },
  [LinkPreset.Publications]: {
    name: i18n(I18nKey.publications),
    url: '/publications/',
  },
}
