app.component('mega-calc', {
    template:
    /*html*/
    `<div class="calc-container">
        <p>Сумма заказа: <input type="number" v-model="orderSumm"> руб.</p>
        <p>Обещают бонусов: <input type="number" v-model="bonusPromise"> %</p>
        <p>Промокод: <input type="number" v-model="promocode"> руб.</p>
        <p>Оплата бонусами: <input type="number" v-model="bonusPay"> руб.</p>
        <p>Вернут бонусов: <span> {{ bonusBack }} </span> руб.</p>
        <p>Спишут с карты: <span> {{ realPayment }} </span> руб.</p>
        <p>Хочу конвертировать бонусы в рубли: <input type="checkbox" v-model="toggle"> </p>
        <p v-if="toggle">
            <p> Без пакета услуг: <input type="radio" name="sber" v-model="selectedOption" :value="'withoutPackage'"></p>
            <p> СберПрайм+: <input type="radio" name="sber" :value="'sberPrime'" v-model="selectedOption"></p>
            <p> СберПремьер: <input type="radio" name="sber" :value="'sberPremier'" v-model="selectedOption"></p>
            <p> СберПервый: <input type="radio" name="sber" :value="'sberFirst'" v-model="selectedOption"></p>
            <p> Sber Private Banking: <input type="radio" name="sber" :value="'sberPrivate'" v-model="selectedOption"></p>
        </p>
         <p>Отдаю бонусов: <input type="number" v-model="bonusGive"> руб. Получаю: <span> {{ moneyReturn }} </span> руб.</p>
    </div>`,
    data() {
        return {
            orderSumm: '',
            promocode: '',
            bonusPromise: '',
            bonusPay: '',
            bonusGive: '',
            toggle: '',
            // withoutPackage: '',
            // sberPrime: '',
            // sberPremier: '',
            // sberFirst: '',
            // sberPrivate: '',
            selectedOption: 'sberFirst'
        }
    },
    computed: {
        bonusBack() {
            return (this.orderSumm - this.promocode - this.bonusPay) * this.bonusPromise / 100
        },
        realPayment() {
            return this.orderSumm - this.bonusPay - this.bonusPay
        },
        moneyReturn (selectedOption) {
            
            if (this.selectedOption === 'withoutPackage') {
               return this.bonusGive * 0.5 
            }
            if (this.selectedOption === 'sberPrime') {
                return this.bonusGive * 0.6
            }
            if (this.selectedOption === 'sberPremier') {
                return this.bonusGive * 0.7
            }
            if (this.selectedOption === 'sberFirst' || this.selectedOption === 'sberPrivate') {
                return this.bonusGive * 0.8
            }
            
            
        }
       

        
    },
    // methods: {
    //     handleOptionChange(option) {
    //         if (option === 'withoutPackage') {
    //             percent = 0.5;
    //         }
    //         if (option === 'sberPrime') {
    //             percent = 0.6;
    //         }
    //         if (option === 'sberPremier') {
    //             percent = 0.7;
    //         }
    //         if (option === 'sberFirst' || option === 'sberPrivate') {
    //             percent = 0.8;
    //         }
    //         return percent;
    //       }
    // }







})