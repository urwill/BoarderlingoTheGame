class Polygon {
    _coordinates = [];

    constructor() {

    }

    getCoordinates() {
        return this._coordinates;
    }

    addPoint(x, y) {
        this._coordinates.push(new Object({ x: x, y: y }));
    }

    setOffset(imageHeight) {
        var offSet = windowHeight -imageHeight - (this._coordinates[0].y * 2);
		for(var index = 0; index < this._coordinates.length; index++) {
			this._coordinates[index].y += offSet;
		}
    }

    getRect() {
        var rect = [];
        var minX = this.getMinX();
        var maxX = this.getMaxX();
        var minY = this.getMinY();
        var maxY = this.getMaxY();
        rect.push(new Object({ x: minX, y: minY }));
        rect.push(new Object({ x: maxX, y: minY }));
        rect.push(new Object({ x: maxX, y: maxY }));
        rect.push(new Object({ x: minX, y: maxY }));
        return rect;
    }

    getMinX() {
        return this._coordinates.reduce((min, p) => p.x < min ? p.x : min, this._coordinates[0].x);
    }

    getMaxX() {
        return this._coordinates.reduce((max, p) => p.x > max ? p.x : max, this._coordinates[0].x);
    }

    getMinY() {
        return this._coordinates.reduce((min, p) => p.y < min ? p.y : min, this._coordinates[0].y);
    }

    getMaxY() {
        return this._coordinates.reduce((max, p) => p.y > max ? p.y : max, this._coordinates[0].y);
    }

    intersects(secondPolygon) {
        if(this._rectangleCollision(secondPolygon)) {
            return this._polygonCollision(secondPolygon);   //diese Funktion ist aufwendiger und soll nur verwendet werden, wenn sich die Rechtecke überschneiden
        }
        return false;
    }

    _rectangleCollision(secondPolygon) {
        var minX = this.getMinX();
        var maxX = this.getMaxX();
        var minY = this.getMinY();
        var maxY = this.getMaxY();

        var minX2 = secondPolygon.getMinX();
        var maxX2 = secondPolygon.getMaxX();
        var minY2 = secondPolygon.getMinY();
        var maxY2 = secondPolygon.getMaxY();

        if (minX < maxX2 &&
            maxX > minX2 &&
            minY < maxY2 &&
            maxY > minY2) {
                return true;
         }

         return false;
    }

    _polygonCollision(secondPolygon) {
        //return this.getPoints().some(item => secondPolygon.getPoints().includes(item));
        return this._findCommonElement(this.getPoints(), secondPolygon.getPoints());
    }

    _findCommonElement(array1, array2) {
        for(let i = 0; i < array1.length; i++) { 
            for(let j = 0; j < array2.length; j++) { 
                if(array1[i].x === array2[j].x && array1[i].y === array2[j].y) {
                    return true; 
                } 
            } 
        } 
        return false;  
    } 

    getPoints() {
        var points = [];
        var xDiff;
        var yDiff;
        for(var index = 0; index < this._coordinates.length - 1; index++) {
            points = points.concat(this._calcStraightLine(parseInt(this._coordinates[index].x), parseInt(this._coordinates[index].y), parseInt(this._coordinates[index + 1].x), parseInt(this._coordinates[index + 1].y)));
        }
        points = points.concat(this._calcStraightLine(parseInt(this._coordinates[this._coordinates.length - 1].x), parseInt(this._coordinates[this._coordinates.length - 1].y), parseInt(this._coordinates[0].x), parseInt(this._coordinates[0].y)));
        //alert(JSON.stringify(points));
        return points;
    }

    _calcStraightLine (x1, y1, x2, y2) {
        var coordinatesArray = new Array();
        // Define differences and error check
        var dx = Math.abs(x2 - x1);
        var dy = Math.abs(y2 - y1);
        var sx = (x1 < x2) ? 1 : -1;
        var sy = (y1 < y2) ? 1 : -1;
        var err = dx - dy;
        // Set first coordinates
        coordinatesArray.push(new Object({ x: x1, y: y1 }));
        // Main loop
        while (!((x1 == x2) && (y1 == y2))) {
            var e2 = err << 1;
            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
            // Set coordinates
            coordinatesArray.push(new Object({ x: x1, y: y1 }));
        }
        // Return the result
        return coordinatesArray;
    }
}