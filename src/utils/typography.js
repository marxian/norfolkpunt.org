import Typography from 'typography'
import lawtonTheme from 'typography-theme-lawton'

lawtonTheme.googleFonts = [
  {
    name: 'Vollkorn',
    styles: ['400', '400i', '700', '800'],
  },
]
lawtonTheme.headerFontFamily = ['Vollkorn', 'serif']
lawtonTheme.bodyFontFamily = ['Vollkorn', 'serif']

const typography = new Typography(lawtonTheme)

export default typography
