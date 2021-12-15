import { renderBlock } from './lib.js'

interface Rectangle {
  width: number,
  height: number
}
interface Circle {
  radius: number,
  center: number
}

export abstract class MyGraphicsPrimitive2D {
  rectangularArea: Rectangle;

  constructor(
    width: number,
    height: number
  ) {
    this.rectangularArea.width = width;
    this.rectangularArea.height = height;
  }
  moveToRight(): void {
    console.log('Сместили фигуру')
  }
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  abstract square: number;

  constructor(width: number, height: number) {
    super(width, height)
  }

}

export class MyCircle extends MyAreaPrimitive2D {
  center: number
  radius: number
  square: number

  constructor(center: number, radius: number, width: number, height: number) {
    super(width, height)
    this.center = center
    this.radius = radius
    this.square = 3.14 * (radius * radius)

  }
}

export class MyRectangle extends MyAreaPrimitive2D {
  width: number
  height: number
  square: number
  upperLeftBorder: number
  lowerRightBorder: number

  constructor(
    width: number,
    height: number,
    upperLeftBorder: number,
    lowerRightBorder: number,
  ) {
    super(width, height)
    this.upperLeftBorder = upperLeftBorder
    this.lowerRightBorder = lowerRightBorder
    this.square = width * height
  }
}
