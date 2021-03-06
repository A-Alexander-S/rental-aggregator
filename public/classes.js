export class MyGraphicsPrimitive2D {
    constructor(width, height) {
        this.rectangularArea.width = width;
        this.rectangularArea.height = height;
    }
    moveToRight() {
        console.log('Сместили фигуру');
    }
}
export class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    constructor(width, height) {
        super(width, height);
    }
}
export class MyCircle extends MyAreaPrimitive2D {
    constructor(center, radius, width, height) {
        super(width, height);
        this.center = center;
        this.radius = radius;
        this.square = 3.14 * (radius * radius);
    }
}
export class MyRectangle extends MyAreaPrimitive2D {
    constructor(width, height, upperLeftBorder, lowerRightBorder) {
        super(width, height);
        this.upperLeftBorder = upperLeftBorder;
        this.lowerRightBorder = lowerRightBorder;
        this.square = width * height;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE1BQU0sT0FBZ0IscUJBQXFCO0lBR3pDLFlBQ0UsS0FBYSxFQUNiLE1BQWM7UUFFZCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBZ0IsaUJBQWtCLFNBQVEscUJBQXFCO0lBR25FLFlBQVksS0FBYSxFQUFFLE1BQWM7UUFDdkMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN0QixDQUFDO0NBRUY7QUFFRCxNQUFNLE9BQU8sUUFBUyxTQUFRLGlCQUFpQjtJQUs3QyxZQUFZLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDdkUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQTtJQUV4QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sV0FBWSxTQUFRLGlCQUFpQjtJQU9oRCxZQUNFLEtBQWEsRUFDYixNQUFjLEVBQ2QsZUFBdUIsRUFDdkIsZ0JBQXdCO1FBRXhCLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFBO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQTtJQUM5QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5pbnRlcmZhY2UgUmVjdGFuZ2xlIHtcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXJcbn1cbmludGVyZmFjZSBDaXJjbGUge1xuICByYWRpdXM6IG51bWJlcixcbiAgY2VudGVyOiBudW1iZXJcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE15R3JhcGhpY3NQcmltaXRpdmUyRCB7XG4gIHJlY3Rhbmd1bGFyQXJlYTogUmVjdGFuZ2xlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5yZWN0YW5ndWxhckFyZWEud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnJlY3Rhbmd1bGFyQXJlYS5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgbW92ZVRvUmlnaHQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ9Ch0LzQtdGB0YLQuNC70Lgg0YTQuNCz0YPRgNGDJylcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTXlBcmVhUHJpbWl0aXZlMkQgZXh0ZW5kcyBNeUdyYXBoaWNzUHJpbWl0aXZlMkQge1xuICBhYnN0cmFjdCBzcXVhcmU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpXG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTXlDaXJjbGUgZXh0ZW5kcyBNeUFyZWFQcmltaXRpdmUyRCB7XG4gIGNlbnRlcjogbnVtYmVyXG4gIHJhZGl1czogbnVtYmVyXG4gIHNxdWFyZTogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoY2VudGVyOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMuc3F1YXJlID0gMy4xNCAqIChyYWRpdXMgKiByYWRpdXMpXG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXlSZWN0YW5nbGUgZXh0ZW5kcyBNeUFyZWFQcmltaXRpdmUyRCB7XG4gIHdpZHRoOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgc3F1YXJlOiBudW1iZXJcbiAgdXBwZXJMZWZ0Qm9yZGVyOiBudW1iZXJcbiAgbG93ZXJSaWdodEJvcmRlcjogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICB1cHBlckxlZnRCb3JkZXI6IG51bWJlcixcbiAgICBsb3dlclJpZ2h0Qm9yZGVyOiBudW1iZXIsXG4gICkge1xuICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpXG4gICAgdGhpcy51cHBlckxlZnRCb3JkZXIgPSB1cHBlckxlZnRCb3JkZXJcbiAgICB0aGlzLmxvd2VyUmlnaHRCb3JkZXIgPSBsb3dlclJpZ2h0Qm9yZGVyXG4gICAgdGhpcy5zcXVhcmUgPSB3aWR0aCAqIGhlaWdodFxuICB9XG59XG4iXX0=