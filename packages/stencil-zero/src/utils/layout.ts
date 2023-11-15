export function assignRole(tagName) {
  const roleMap = {
    header: 'banner',
    footer: 'contentinfo',
    main: 'main',
    nav: 'navigation',
    article: 'article',
    section: 'region',
    search: 'search',
    aside: 'complementary',
  }
  return tagName ? roleMap[tagName] : 'none'
}

export function applySpacingStyles(props) {
  if (!props) return

  const spacingStyles = {
    marginTop: !props.mt ? props.m : props.mt,
    marginBottom: !props.mb ? props.m : props.mb,
    marginRight: !props.mr ? props.m : props.mr,
    marginLeft: !props.ml ? props.m : props.ml,
    paddingTop: !props.pt ? props.p : props.pt,
    paddingBottom: !props.pb ? props.p : props.pb,
    paddingRight: !props.pr ? props.p : props.pr,
    paddingLeft: !props.pl ? props.p : props.pl,
    display: 'block',
  }

  props.p && (spacingStyles['padding'] = props.p)
  props.m && (spacingStyles['margin'] = props.m)

  return spacingStyles
}

export function applyBoxStyles(props) {
  if (!props) return

  const boxStyles = {
    display: props.block ? 'block' : 'flex',
    flex: props.flex,
    flexDirection: props.row ? 'row' : 'column',
    justifyContent: props.justify,
    alignItems: props.align,
    gap: props.gap,
    rowGap: props.rowGap,
    columnGap: props.columnGap,
    flexWrap: props.wrap && 'wrap',
    zIndex: props.zIndex,
    height: props.h,
    width: props.w,
    maxHeight: props.h,
    maxWidth: props.w,
    borderWidth: props.borderWidth,
    borderStyle: props.borderStyle,
    borderColor: props.colorfull ? props.colorfull : props.borderColor,
    borderRadius: props.borderRadius,
    backgroundColor: props.background,
    boxShadow: props.boxShadow,
    cursor: props.cursor,
    pointerEvents: props.pointerEvents,
  }
  return { ...applySpacingStyles(props), ...boxStyles }
}

export function getParentBoxesCount(el: HTMLElement, counter) {
  if (el.parentElement.tagName === 'HTML') {
    return `_${counter}`
  } else if (el.tagName.includes('BOX') && el.hasAttribute('name')) {
    counter++
    return getParentBoxesCount(el.parentElement, counter)
  } else {
    return getParentBoxesCount(el.parentElement, counter)
  }
}

export function enableColoredBoxes(el) {
  if (!el.root.hasAttribute('name')) return ''

  const boxLevelColors = {
    _1: '#000000',
    _2: '#6876FC',
    _3: '#38BDF8',
    _4: '#01B598',
    _5: '#99DA2F',
    _6: '#FBBF24',
    _7: '#FB923D',
    _8: '#F472B6',
    _9: '#C084FC',
    _10: '#9A1799',
    _11: '#595959',
  }

  let boxColor = boxLevelColors[getParentBoxesCount(el.root, 0)]
  el.root.style['borderColor'] = boxColor
  return boxColor
}
