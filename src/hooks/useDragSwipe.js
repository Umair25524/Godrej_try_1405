import { useState, useCallback, useRef } from 'react'

export function useDragSwipe(onSwipe, threshold = 50) {
  const [dragStart, setDragStart] = useState(null)
  const [dragDelta, setDragDelta] = useState(0)
  const startRef = useRef(null)
  const deltaRef = useRef(0)

  const begin = useCallback((event) => {
    const clientX = event.clientX ?? event.touches?.[0]?.clientX
    if (clientX == null) return
    startRef.current = clientX
    deltaRef.current = 0
    setDragStart(clientX)
    setDragDelta(0)
    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId)
    }
  }, [])

  const update = useCallback((event) => {
    if (startRef.current === null) return
    const clientX = event.clientX ?? event.touches?.[0]?.clientX
    if (clientX == null) return
    const delta = clientX - startRef.current
    deltaRef.current = delta
    setDragDelta(delta)
  }, [])

  const end = useCallback((event) => {
    if (startRef.current !== null && Math.abs(deltaRef.current) > threshold) {
      onSwipe(deltaRef.current < 0 ? 1 : -1)
    }
    startRef.current = null
    deltaRef.current = 0
    setDragStart(null)
    setDragDelta(0)
  }, [onSwipe, threshold])

  return {
    dragStart,
    dragDelta,
    handlers: {
      onPointerDown: begin,
      onPointerMove: update,
      onPointerUp: end,
      onPointerCancel: end,
      onTouchStart: begin,
      onTouchMove: update,
      onTouchEnd: end,
    }
  }
}