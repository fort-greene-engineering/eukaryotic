import React, { useRef } from 'react'

import BlockContent from '@components/block-content'
import VideoLoop from '@components/video-loop'
import VimeoLoop from '@components/vimeo-loop'
import Photo from '@components/photo'
import { useInView, m } from 'framer-motion'

const Hero = ({ data = {} }) => {
  const { content, bgType, photos, videos, vimeo } = data

  const ref = useRef()
  const inView = useInView(ref, { once: true })

  const renderBackground = (type) => {
    switch (type) {
      case 'photo':
        return <PhotoBackground photos={photos} />
      case 'video':
        return <VideoBackground videos={videos} />
      case 'vimeo':
        return <VimeoBackground id={vimeo.id} title={vimeo.title} />
      default:
        return null
    }
  }

  return (
    <section ref={ref} className="hero">
      {content && (
        <m.div
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero--overlay"
        >
          <div className="hero--content">
            <BlockContent blocks={content} />
          </div>
        </m.div>
      )}

      {renderBackground(bgType)}
    </section>
  )
}

const PhotoBackground = ({ photos }) => {
  return (
    <>
      {photos?.desktopPhoto && (
        <Photo
          photo={photos.desktopPhoto}
          width={1600}
          srcSizes={[800, 1000, 1200, 1600]}
          sizes="100vw"
          layout="fill"
          className="hero--bg is-desktop"
        />
      )}
      {photos?.mobilePhoto && (
        <Photo
          photo={photos.mobilePhoto}
          width={800}
          sizes="100vw"
          layout="fill"
          className="hero--bg is-mobile"
        />
      )}
    </>
  )
}

const VideoBackground = ({ videos }) => {
  return (
    <>
      {videos?.desktopVideo && (
        <VideoLoop
          video={videos?.desktopVideo}
          className="hero--bg is-desktop"
        />
      )}
      {videos?.mobileVideo && (
        <VideoLoop video={videos?.mobileVideo} className="hero--bg is-mobile" />
      )}
    </>
  )
}

const VimeoBackground = ({ id, title }) => {
  return (
    <>
      <div className="hero--bg is-desktop">
        <VimeoLoop title={title} id={id} />
      </div>
      <div className="hero--bg is-mobile">
        <VimeoLoop title={title} id={id} />
      </div>
    </>
  )
}

export default Hero
