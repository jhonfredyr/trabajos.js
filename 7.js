  function areaRectangulo(p1, p2, p3, p4) {
    let puntos = [p1, p2, p3, p4];

    let suma1 = 0;
    let suma2 = 0;

    // Fórmula del área para cualquier polígono
    for (let i = 0; i < puntos.length; i++) {
        let a = puntos[i];
        let b = puntos[(i + 1) % puntos.length];
        suma1 += a.x * b.y;
        suma2 += a.y * b.x;
    }

    let area = Math.abs(suma1 - suma2) / 2;
    return area;
    }

    // Ejemplo
    let A = {x: 1, y: 1};
    let B = {x: 5, y: 1};
    let C = {x: 5, y: 4};
    let D = {x: 1, y: 4};

    console.log(areaRectangulo(A, C, B, D)); 
    //esta dificil
