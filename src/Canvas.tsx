import { useEffect, useRef } from "react"

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = (canvasContext: CanvasRenderingContext2D) => {
    canvasContext.fillStyle = '#000000'
    canvasContext.beginPath()
    canvasContext.arc(50, 100, 20, 0, 2 * Math.PI)
    canvasContext.fill()
  }

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      const context = canvas.getContext('2d')

      if (context) {
        draw(context)
      }
    }
  }, [])

  return <canvas ref={canvasRef} />
}
