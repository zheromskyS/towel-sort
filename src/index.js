module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let array = [];

    matrix.map((matrixElement, index) => {
        if (index % 2 === 1) {
            matrixElement.reverse();
        }
    });

    matrix.forEach((matrixElement) =>
        matrixElement.forEach((element) => array.push(element)),
    );

    return array;
};
