import { useEffect, useState } from "react"

export default function useOnScreen(ref, hasAnimationPerformed, threshold, rootMargin) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { rootMargin }
    )

    useEffect(() => {
        if (!hasAnimationPerformed) {
            observer.observe(ref.current)
        }
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}