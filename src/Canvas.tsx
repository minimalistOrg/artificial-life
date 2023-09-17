import { useEffect, useRef } from "react"
import { drawBarnsleyFern } from "./utils/barnsleyFern"

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = (canvasContext: CanvasRenderingContext2D) => {
    canvasContext.fillStyle = '#4caf50'
    drawBarnsleyFern({ canvasContext, iterations: 40000})
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

  return <canvas width={1200} height={800} ref={canvasRef} />
}
