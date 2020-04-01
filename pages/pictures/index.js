import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import Image from '../../components/Image'
import images from '../../images'

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

export default () => {
  let [isOpen, setOpen] = useState(false)
  let [photoIndex, setPhotoIndex] = useState(0)
  const imgs = Object.values(images)
  const cs = Math.round(imgs.length / 3)
  const chunks = chunk(imgs, cs)
  const getIndex = (main) => imgs.findIndex((img) => img.main === main)

  return (
    <>
      <div className="cf">
        <div className="fl w-50 w-third-ns">
          {chunks[0].map((img) => (
            <a
              href={img.main}
              className="db w-100"
              key={img.main}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(getIndex(img.main))
                setOpen(true)
              }}
            >
              <Image data={img} />
            </a>
          ))}
        </div>
        <div className="fl w-50 w-third-ns">
          {chunks[1].map((img) => (
            <a
              href={img.main}
              className="db w-100"
              key={img.main}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(getIndex(img.main))
                setOpen(true)
              }}
            >
              <Image data={img} />
            </a>
          ))}
        </div>
        <div className="fl w-50 w-third-ns">
          {chunks[2].map((img) => (
            <a
              href={img.main}
              className="db w-100"
              key={img.main}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(getIndex(img.main))
                setOpen(true)
              }}
            >
              <Image data={img} />
            </a>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={imgs[photoIndex].main}
          nextSrc={imgs[(photoIndex + 1) % imgs.length].main}
          prevSrc={imgs[(photoIndex + imgs.length - 1) % imgs.length].main}
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
