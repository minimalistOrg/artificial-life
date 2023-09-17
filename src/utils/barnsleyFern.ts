// Pseudocode from https://en.wikipedia.org/wiki/Barnsley_fern#Pseudocode

export const drawBarnsleyFern = (
  {canvasContext, iterations}:
  {canvasContext: CanvasRenderingContext2D, iterations: number}
) => {
  let x = 0
  let y = 0

  const coefficients = [
    //a b  c     d  e  f
    [0, 0, 0.16, 0, 0, 0],
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [0.2, -0.26, 0.23, 0.22, 0, 1.6],
    [-0.15, 0.22, 0.26, 0.24, 0, 0.44]
  ]

  const probabilities = [0.1, 0.86, 0.93]

  canvasContext.translate(400, 100)
  canvasContext.scale(5, 5)

  for(let n=0; n < iterations; n++) {
    const randomNumber = Math.random()

    canvasContext.fillRect(x*10, y*10, 0.2, 0.2)

    if(randomNumber < probabilities[0]) {
      x = 0
      y = coefficients[0][2] * y
    } else if(randomNumber < probabilities[1]) {
      x = coefficients[1][0] * x + coefficients[1][1] * y
      y = coefficients[1][2] * x + coefficients[1][3] * y + coefficients[1][5]
    } else if (randomNumber < probabilities[2]) {
      x = coefficients[2][0] * x + coefficients[2][1] * y
      y = coefficients[2][2] * x + coefficients[2][3] * y + coefficients[2][5]
    } else {
      x = coefficients[3][0] * x + coefficients[3][1] * y
      y = coefficients[3][2] * x + coefficients[3][3] * y + coefficients[3][5]
    }
  }
}
