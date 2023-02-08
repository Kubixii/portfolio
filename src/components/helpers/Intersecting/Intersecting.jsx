import { cloneElement, useEffect, useRef, useState } from 'react'

import useOnScreen from '../../../hooks/useOnScreen'

const Intersecting = ({
    children,
    animationClassName = null,
    initialStateClassName,
    delay = 0,
    threshold = '0.5',
    rootMargin = '0% -25%',
    wrapAroundContainer = false
}) => {
    const element = useRef()
    const [hasAnimationPerformed, setHasAnimationPerformed] = useState(false)
    const isVisible = useOnScreen(element, hasAnimationPerformed, threshold, rootMargin)

    const wrappingElement = <div></div>;

    useEffect(() => {
        if (isVisible) {
            setHasAnimationPerformed(true)
        }
    }, [isVisible])

    const styles = hasAnimationPerformed ? animationClassName : null;
    const hasdelay = delay === 0 ? null : { animationDelay: `${delay}s` }
    const inlineStyle = { ...children.props?.style, ...hasdelay }
    const newClasses = `${children.props?.className} ${initialStateClassName} ${styles}`
    const newWrappingClasses = `${initialStateClassName} ${styles}`

    const newElement = cloneElement(children, { ...element.props, className: newClasses, ref: element, style: inlineStyle })
    const newWrappingElement = cloneElement(wrappingElement, { ...element.props, children: children, className: newWrappingClasses, ref: element, style: inlineStyle })

    return wrapAroundContainer ? newWrappingElement : newElement
}

export default Intersecting;