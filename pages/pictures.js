import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'

import Img from 'react-cloudinary-lazy-image'
import { getPictures } from '../lib/cms'

function Image({ id }) {
  return (
    <Img
      cloudName={'norfolkpunt'}
      imageName={id.split('/').pop()}
      fluid={{
        maxWidth: 300,
        height: 300,
      }}
      urlParams="c_fill,g_auto"
    />
  )
}

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

export default ({ pictures: imgs }) => {
  let [isOpen, setOpen] = useState(false)
  let [photoIndex, setPhotoIndex] = useState(0)
  const cs = Math.round(imgs.length / 3)
  const chunks = chunk(imgs, cs)

  return (
    <>
      <div className="cf">
        <div className="fl w-50 w-third-ns">
          {chunks[0].map((img) => (
            <a
              href={img}
              className="db w-100"
              key={img}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(imgs.indexOf(img))
                setOpen(true)
              }}
            >
              <Image id={img} />
            </a>
          ))}
        </div>
        <div className="fl w-50 w-third-ns">
          {chunks[1].map((img) => (
            <a
              href={img}
              className="db w-100"
              key={img}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(imgs.indexOf(img))
                setOpen(true)
              }}
            >
              <Image id={img} />
            </a>
          ))}
        </div>
        <div className="fl w-50 w-third-ns">
          {chunks[2].map((img) => (
            <a
              href={img}
              className="db w-100"
              key={img}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(imgs.indexOf(img))
                setOpen(true)
              }}
            >
              <Image id={img} />
            </a>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={imgs[photoIndex]}
          nextSrc={imgs[(photoIndex + 1) % imgs.length]}
          prevSrc={imgs[(photoIndex + imgs.length - 1) % imgs.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imgs.length - 1) % imgs.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imgs.length)
          }
        />
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const pictures = getPictures()
  return {
    props: {
      pictures,
    },
  }
}
