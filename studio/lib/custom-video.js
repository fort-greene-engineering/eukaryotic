import { VideoCamera } from 'phosphor-react'
export default ({ ...props } = {}) => {
  return {
    title: 'Video',
    name: 'video',
    type: 'file',
    icon: VideoCamera,
    options: {
      hotspot: true,
    },
    accept: 'video/*',
    fields: [
      {
        title: 'Alternative text',
        name: 'alt',
        type: 'string',
        description: 'Important for SEO and accessiblity.',
      },
    ],
    preview: {
      select: {
        asset: 'asset',
        alt: 'asset.alt',
        customAlt: 'alt',
      },
      prepare({ alt, customAlt, asset }) {
        return {
          title: customAlt ?? alt ?? '(alt text missing)',

          media: asset,
        }
      },
    },
    ...props,
  }
}
