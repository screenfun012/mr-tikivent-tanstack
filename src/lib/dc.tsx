// @ts-nocheck
/*
 * Runtime za stranice iz src/pages — ista semantika kao DC runtime (support.js) na kom je dizajn napravljen:
 *  - logika (class Component extends DCLogic) NIJE React komponenta; hostuje je omotač (createDCPage)
 *  - setState odmah upisuje u this.state (sinhrono), pa okida render omotača
 *  - componentDidUpdate dobija samo prevProps (bez prevState)
 *  - greške u lifecycle metodama se loguju i ne ruše stranicu
 *  - template vrednosti = { ...props, ...renderVals() }
 * NE MENJATI — od ovoga zavise sve animacije.
 */
import * as React from 'react'

export class DCLogic {
  constructor(props) {
    this.props = props || {}
    this.state = {}
    this.__host = undefined
  }
  setState(update, cb) { this.__host && this.__host.__setLogicState(update, cb) }
  forceUpdate() { this.__host && this.__host.forceUpdate() }
  componentDidMount() {}
  componentDidUpdate(_prevProps) {}
  componentWillUnmount() {}
  renderVals() { return {} }
}

export function createDCPage(Logic, view, defaultProps = {}, displayName = 'DCPage') {
  class DCHost extends React.Component {
    constructor(props) {
      super(props)
      this.state = { __v: 0 }
      this.logic = new Logic({ ...defaultProps, ...props })
      this.logic.__host = this
    }
    __setLogicState(update, cb) {
      const prev = this.logic.state
      const patch = typeof update === 'function' ? update(prev) : update
      this.logic.state = { ...prev, ...patch }
      this.setState(s => ({ __v: s.__v + 1 }), cb)
    }
    componentDidMount() { try { this.logic.componentDidMount() } catch (e) { console.error(e) } }
    componentDidUpdate(prevProps) {
      this.logic.props = { ...defaultProps, ...this.props }
      try { this.logic.componentDidUpdate(prevProps) } catch (e) { console.error(e) }
    }
    componentWillUnmount() { try { this.logic.componentWillUnmount() } catch (e) { console.error(e) } }
    render() {
      const L = this.logic
      let vals
      try { vals = { ...L.props, ...(L.renderVals() || {}) } } catch (e) { console.error(e); vals = { ...L.props } }
      return view(vals)
    }
  }
  DCHost.displayName = displayName
  return DCHost
}

const kebabToCamel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
export function cssToObj(css) {
  const o = {}
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':')
    if (i < 0) continue
    const prop = decl.slice(0, i).trim()
    o[prop.startsWith('--') ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim()
  }
  return o
}
const cssCache = new Map()
export function __css(s) {
  let o = cssCache.get(s)
  if (!o) { o = cssToObj(s); if (cssCache.size > 5000) cssCache.clear(); cssCache.set(s, o) }
  return o
}
export const __style = x => (typeof x === 'string' ? __css(x) : x)
export const __dv = x => (x === undefined ? '' : x)
export const __dc = x => (x === undefined ? false : x)
export const __arr = x => (Array.isArray(x) ? x : [])
/** {{ x }} u tekstu — isto kao runtime: string/broj u <span class="sc-interp">, element/niz kako jeste, null/bool/undefined ništa. */
export function __t(x) {
  if (x === undefined || x === null || typeof x === 'boolean') return null
  if (React.isValidElement(x) || Array.isArray(x)) return x
  return React.createElement('span', { className: 'sc-interp' }, String(x))
}

/** Stranice koriste window/localStorage — renderuju se samo u browseru (kao i do sada). */
export function ClientOnly({ children }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return mounted ? children : null
}
