var fs = require('fs')
var image = process.argv[2]
var slug = image.replace('.jpg', '')
var out = {
  mugshot: slug,
  boats: [slug],
}
fs.writeFileSync(image + '.meta.json', JSON.stringify(out, null, '\t'))
