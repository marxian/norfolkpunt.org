const glob = require('glob')
const fsPromises = require('fs').promises
const sizeOf = require('image-size')

const fluid = '?resize&sizes[]=200&sizes[]=600&sizes[]=1000'
const lqip = '?lqip'

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
  return list
}

async function indexPunts() {
  const puntDirs = glob.sync('./pages/boats/*/')
  const puntList = await Promise.all(
    puntDirs.map(async base => {
      let data = require(base + '/details.json')
      let images = glob.sync(base + '/*.{jpg,png}')
      data.images = []
      data.coverImage = null
      let coverMatch = new RegExp(`${data.slug}.*`)
      images.forEach(img => {
        if (coverMatch.test(img)) {
          data.coverImage = img
        } else {
          data.images.push(img)
        }
      })
      return data
    })
  )
  const punts = {}
  puntList.forEach(p => (punts[p.slug] = p))
  await fsPromises.writeFile('./punts.json', JSON.stringify(punts, null, '\t'))

  const imageList = shuffle(glob.sync('./pages/**/*.{jpg,png}'))
  const imageData = `module.exports = {\n${imageList
    .map(img => {
      let { width, height } = sizeOf(img)
      return `'${img}': { lqip: require('${img}${lqip}'), main: require('${img}'), fluid: require('${img}${fluid}'), aspectRatio: ${width /
        height} }`
    })
    .join(',\n')}\n}`
  await fsPromises.writeFile('./images.js', imageData)
}

async function buildPictures() {
  const imageList = shuffle(glob.sync('./pages/pictures/*.{jpg,png}'))
  const imageData = `module.exports = {\n${imageList
    .map(
      img =>
        `'${img}': { lqip: require('${img}${lqip}'), fluid: require('${img}${fluid}') }`
    )
    .join(',\n')}\n}`
  await fsPromises.writeFile('./pictures.js', imageData)
}

indexPunts()

buildPictures()
