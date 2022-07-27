export default class PasswordGenerator {
    constructor(length=12) {
        this._length = length
    }

    with_uppercase = true
    with_numbers = true
    with_symbols = true

    _length

    _proportions = {
        lowercase: 0.4,
        uppercase: 0.2,
        numbers: 0.3,
        symbols: 0.1,
    }

    _letters_dict = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"
    ]

    _numbers_dict = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    ]

    _symbols_dict = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
        "-", "_", "=", "+", "~", "`", "[", "]", "{", "}",
        ";", ":", ",", ".", "<", ">", "/", "?"
    ]

    get length() {
        return this._length
    }

    set length(newVal) { 
        this._length = newVal
    }

    get proportions() {
        return this._proportions
    }

    get letters() {
        return this._letters_dict
    }

    get letters_uppercase() {
        return this._letters_dict.map(l => l.toUpperCase())
    }

    get numbers() {
        return this._numbers_dict
    }

    get symbols() {
        return this._symbols_dict
    }

    get lower_length() {
        const lower_length = Math.ceil(this.length * this.proportions.lowercase)
        return lower_length + (
            this.length 
            - lower_length 
            - this.upper_length 
            - this.numbers_length 
            - this.symbols_length)
    }

    get upper_length() {
        return this.with_uppercase 
            ? Math.ceil(this.length * this.proportions.uppercase) 
            : 0
    }

    get numbers_length() {
        return this.with_numbers
            ? Math.ceil(this.length * this.proportions.numbers)
            : 0
    }

    get symbols_length() {
        return this.with_symbols
            ? Math.ceil(this.length * this.proportions.symbols)
            : 0
    }

    get pass_lower() {
        return this._index_to_char(
            this._get_random_list(this.lower_length, this.letters.length), 
            this.letters
        )
    }

    get pass_upper() {
        return this._index_to_char(
            this._get_random_list(this.upper_length, this.letters_uppercase.length), 
            this.letters_uppercase)
    }

    get pass_numbers() {
        return this._index_to_char(
            this._get_random_list(this.numbers_length, this.numbers.length),
            this.numbers)
    }

    get pass_symbols() {
        return this._index_to_char(
            this._get_random_list(this.symbols_length, this.symbols.length),
            this.symbols)
    }

    _index_to_char(list, dict) {
        return list.map(i => dict[i])
    }

    _get_random_int(max) {
        return Math.floor(Math.random() * max)
    }
    
    _get_random_list(length, max) {
        const list = []
        for (let i = 0; i < length; i++) {
            list.push(
                this._get_random_int(max)
            )
        }
        return list
    }

    _shuffle(array) {
        let currentIndex = array.length
        let randomIndex = null
      
        while (currentIndex != 0) {
          randomIndex = this._get_random_int(currentIndex)
          currentIndex--
      
          [
              array[currentIndex], 
              array[randomIndex]
          ] = [
              array[randomIndex], 
              array[currentIndex]
          ]
        }
      
        return array;
    }

    generate() {
        return this._shuffle([
            ...this.pass_lower,
            ...this.pass_upper,
            ...this.pass_numbers, 
            ...this.pass_symbols
        ]).join('')
    }
}
