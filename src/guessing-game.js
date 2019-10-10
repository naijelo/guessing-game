class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.right = max;
        this.left = min;
    }

    guess() {
//округлить
        return this.mid = Math.ceil((this.right + this.left) / 2);
    }

    lower() {
// ответ БОЛЬШЕ нужного значения, сдвигаем границу влево
        this.right = this.mid;
    }

    greater() {
// ответ МЕНЬШЕ нужного значения, сдвигаем границу вправо
        this.left = this.mid;
    }
}

module.exports = GuessingGame;
