'use babel'

/* @flow */

import {Intentions$Suggestion$Highlight} from '../types'

export function create(intention: Intentions$Suggestion$Highlight, length: number): HTMLElement {
  const element = document.createElement('intention-inline')
  let tries = 0
  element.style.opacity = '0'
  element.textContent = '_'.repeat(length)
  requestAnimationFrame(function checkStyle() {
    if (++tries === 20) { return }
    const styles = getComputedStyle(element)
    if (styles.lineHeight && styles.width !== 'auto') {
      element.style.opacity = '1'
      element.style.width = styles.width
      element.style.height = styles.height
      element.style.top = '-' + styles.lineHeight
    } else requestAnimationFrame(checkStyle)
  })
  return element
}