/*
RANDOMLY is a library to get random number and string.
    we may use this:
        -> BETWEEN: is used to get random number and string between number and string.
        -> RANDOM: is used to get random number, string, special character or mix.
*/
export const randomly = {
    between: {
        number: (min, max) => {
            min = Number(min) ; max = Number(max)
            max++
            return Math.trunc(Math.random() * (max - min)) + min
        },
        string: (min, max) => {
            min = String(min) ; max = String(max)
            min = alphabetToNumber(min); max = alphabetToNumber(max)
            return numberToAlfhabet(randomly.between.number(min, max))
        }
    },
    random: {
        number: numbers => {
            numbers = Number(numbers)
            const randomValue = []
            const randomNumber = to => {
                for (let index = 0; index < to; index++) {
                    randomValue[index] = randomly.between.number(0, 9)
                }
            }
            numbers ? randomNumber(numbers) : randomNumber(18)
            return Number(randomValue.join(''))
        },
        string: numbers => {
            numbers = Number(numbers)
            const randomValue = []
            const randomString = to => {
                for (let index = 0; index < to; index++) {
                    randomValue[index] = numberToAlfhabet(randomly.between.number(1, 26))
                }
            }
            numbers ? randomString(numbers) : randomString(18)
            return randomValue.join('')
        },
        boolean: () => {
            switch (randomly.between.number(0, 1)) {
                case 1:
                    return true
                case 0:
                    return false
                default:
                    return undefined
            }
        },
        specialCharacters: numbers => {
            numbers = Number(numbers)
            const randomValue = []
            const randomSpecialCharacter = to => {
                for (let index = 0; index < to; index++) {
                    randomValue[index] = numberToSpecialCharacter(randomly.between.number(0, 12))
                }
            }
            numbers ? randomSpecialCharacter(numbers) : randomSpecialCharacter(18)
            return randomValue.join('')
        },
        mix: numbers => {
            numbers = Number(numbers)
            const randomValue = []
            const randomMIx = to => {
                for (let index = 0; index < to; index++) {
                    switch (randomly.between.number(1, 3)) {
                        case 1:
                            randomValue[index] = randomly.between.string('a', 'z')
                            break;
                        case 2:
                            randomValue[index] = randomly.between.number(0, 9)
                            break;
                        case 3:
                            randomValue[index] = randomly.random.specialCharacters(1)
                            break;
                        default:
                            break;
                    }
                }
            }
            numbers ? randomMIx(numbers) : randomMIx(18)
            return randomValue.join('')
        }
    }
}

function numberToAlfhabet(number) {
    switch (number) {
        case 1:
            return 'a'
        case 2:
            return 'b'
        case 3:
            return 'c'
        case 4:
            return 'd'
        case 5:
            return 'e'
        case 6:
            return 'f'
        case 7:
            return 'g'
        case 8:
            return 'h'
        case 9:
            return 'i'
        case 10:
            return 'j'
        case 11:
            return 'k'
        case 12:
            return 'l'
        case 13:
            return 'm'
        case 14:
            return 'n'
        case 15:
            return 'o'
        case 16:
            return 'p'
        case 17:
            return 'q'
        case 18:
            return 'r'
        case 19:
            return 's'
        case 20:
            return 't'
        case 21:
            return 'u'
        case 22:
            return 'v'
        case 23:
            return 'w'
        case 24:
            return 'x'
        case 25:
            return 'y'
        case 26:
            return 'z'
        default:
            return undefined
    }
}

function alphabetToNumber(alphabet) {
    switch (alphabet) {
        case 'a':
            return 1
        case 'b':
            return 2
        case 'c':
            return 3
        case 'd':
            return 4
        case 'e':
            return 5
        case 'f':
            return 6
        case 'g':
            return 7
        case 'h':
            return 8
        case 'i':
            return 9
        case 'j':
            return 10
        case 'k':
            return 11
        case 'l':
            return 12
        case 'm':
            return 13
        case 'n':
            return 14
        case 'o':
            return 15
        case 'p':
            return 16
        case 'q':
            return 17
        case 'r':
            return 18
        case 's':
            return 19
        case 't':
            return 20
        case 'u':
            return 21
        case 'v':
            return 22
        case 'w':
            return 23
        case 'x':
            return 24
        case 'y':
            return 25
        case 'z':
            return 26
        default:
            return undefined
    }
}

function numberToSpecialCharacter(index) {
    switch (index) {
        case 0:
            return '$'
        case 1:
            return '@'
        case 2:
            return '#'
        case 3:
            return '£'
        case 4:
            return '$'
        case 5:
            return '§'
        case 6:
            return '%'
        case 7:
            return '&'
        case 8:
            return '?'
        case 9:
            return '+'
        case 10:
            return '*'
        case 11:
            return 'º'
        case 12:
            return 'ª'
        default:
            return index
    }
}