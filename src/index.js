module.exports = function toReadable (number) {

        if (number === 0) {
         return 'zero';
        }

        const arrOther = ['', 'thousand', 'million', 'billion', 'trillion'];

        let word = '';

        let temp = 0;

        do {

            word = three(number % 1000) + ' ' + arrOther[temp] + ' ' + word;
            word = word.trim();
            number = Math.floor(number / 1000);
            temp++;

        } while (number > 0);

        //word = word[0].toUpperCase() + word.slice(1);

        return word;
    }

    function three(num) {

        let word = '';

        if (num > 99) {
            word += two(Math.floor(num / 100)) + ' hundred';
        }

        word += ' ' + two(num % 100);

        return word;
    }

    function two(num) {

        let word = '';

        const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if (num < 20) {
            word = arr[num];
        }

        if ((num >= 20) && (num < 100)) {
            word = `${ arrDozens[Math.floor(num / 10)] } ${ arr[num % 10] }`;
        }

        return word;
}
