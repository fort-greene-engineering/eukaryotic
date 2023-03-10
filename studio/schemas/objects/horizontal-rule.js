import { Minus } from 'phosphor-react'

import HR from '../../components/hr'

export default {
  title: 'Horizontal Rule',
  name: 'horizontalRule',
  type: 'object',
  icon: Minus,

  fields: [
    {
      type: 'string',
      name: 'horizontalRule',
      components: {
        input: HR,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Horizontal Rule',
      }
    },
  },
}
