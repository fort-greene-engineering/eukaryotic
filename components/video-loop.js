import React, { useRef, useState, useEffect } from 'react'
import cx from 'classnames'

const VideoLoop = ({ video, className, ...rest }) => {
  if (!video) return null

  return (
    <div className={cx('video-loop', className)} {...rest}>
      <video autoPlay loop muted playsInline>
        <source src={video.url} type={video.type} />
      </video>
    </div>
  )
}

export default VideoLoop
