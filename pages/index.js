import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Image from '../components/Image'

export default () => (
  <>
    <BackgroundImage
      className="dt tc h5 vh-50-l w-100"
      Tag="header"
      data={{
        lqip: require('../images/line.jpg?lqip'),
        fluid: require('../images/line.jpg?resize&sizes[]=200&sizes[]=600&sizes[]=1000&sizes=2000'),
      }}
    ></BackgroundImage>
    <p className="tc f1-l f3-m measure pa1">
      Pointed at both ends, 22ft long, 22 meters of sail, no maximum spinnaker
      size, no minimum weight.
    </p>
    <div className="center mw7 pv0 ph2">
      <article className="bt bb b--black-10">
        <div className="db pv4 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <Image
                className="db"
                data={{
                  lqip: require('../images/twos.jpg?lqip'),
                  fluid: require('../images/twos.jpg?resize&sizes[]=200&sizes[]=600&sizes[]=1000'),
                }}
              />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <p className="f5 f4-l measure lh-copy mt0">
                <span className="b">The Norfolk Punt</span> was derived from the
                flat-bottomed gun punts that roamed the Broadland waters in the
                mid-to-late 19th century. However, at the turn of the 20th
                Century, in order to get to and from the hunting grounds more
                efficiently, the punters developed their craft to carry a basic
                mast and sail for travelling with the wind. It is from these
                humble beginnings that one of the country’s most exciting and
                powerful racing dinghy classes was born.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </>
)
