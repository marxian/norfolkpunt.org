import Typography from 'typography'
import 'typeface-vollkorn'
import lawtonTheme from 'typography-theme-lawton'

lawtonTheme.headerFontFamily = ['Vollkorn', 'serif']
lawtonTheme.bodyFontFamily = ['Vollkorn', 'serif']

const typography = new Typography(lawtonTheme)

export default typography
