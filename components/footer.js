import React from 'react'

import Newsletter from '@components/newsletter'
import ThemeSwitch from '@components/theme-switch'
import Menu from '@components/menu'
import Icon from '@components/icon'
import CustomLink from '@components/link'

const Footer = ({ data = {} }) => {
  if (!data) return null
  const { blocks } = data

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer--grid">
        {blocks.map((block, key) => {
          return (
            <div key={key} className="footer--block">
              {block.title && <p className="is-h3">{block.title}</p>}

              {block.social && (
                <div className="menu-social">
                  {block.social.map((link, key) => {
                    if (link._type === 'socialLink') {
                      return (
                        <a
                          key={key}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                        </a>
                      )
                    }
                    if (link._type === 'navPage') {
                      return <CustomLink link={link} />
                    }
                  })}
                </div>
              )}

              {/* Put our extras in the last block */}
              {key === 0 && (
                <div className="footer--extras">
                  <ThemeSwitch />
                </div>
              )}
              {key === 1 && (
                <div className="footer--extras">
                  <div className="footer--disclaimer">
                    <p>
                      &copy; {new Date().getFullYear()}. Knickerbocker +
                      LLanguage
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
