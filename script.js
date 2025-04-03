function solveQuadratic() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let result = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = "<strong>Solution:</strong><br>Please enter valid numbers for a, b, and c.";
        return;
    }

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.innerHTML = `<strong>Solution:</strong><br>The roots are real and different. <span class="inline-result">Root 1: ${root1.toFixed(4)}, Root 2: ${root2.toFixed(4)}</span>`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        result.innerHTML = `<strong>Solution:</strong><br>The roots are real and equal. <span class="inline-result">Root 1 and Root 2: ${root.toFixed(4)}</span>`;
    } else {
        let realPart = (-b / (2 * a)).toFixed(4);
        let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
        result.innerHTML = `<strong>Solution:</strong><br>The roots are complex and different. <span class="inline-result">Root 1: ${realPart} + ${imaginaryPart}i, Root 2: ${realPart} - ${imaginaryPart}i</span>`;
    }
}
