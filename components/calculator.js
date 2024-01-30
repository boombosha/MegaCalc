app.component('mega-calc', {
    template:
    /*html*/
    `<div class="calc-container">
        <p> Сумма заказа: <input type="number" v-model.number="orderSumm"> руб.</p>
        <p> Обещают бонусов: <input type="number" v-model.number="bonusPromise"> %</p>
        <p> Промокод: <input type="number" v-model.number="promocode"> руб.</p>
        <p> Оплата бонусами: <input type="number" v-model.number="bonusPay"> руб.</p>
        <div class="alert" v-show="(orderSumm-promocode)<bonusPay">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <strong>Сумма оплаты бонусами не может превышать сумму заказа</strong>
        </div>    
        <p> Вернут бонусов: <span> {{ bonusBack }} </span> руб.</p>
        <p> Спишут с карты: <span> {{ realPayment }} </span> руб.</p>
        <p> <span class="checkbox-name">Хочу конвертировать бонусы в рубли:</span>  
            <label class="checkbox style-e">
                <input type="checkbox" v-model="toggle" checked="checked"/>
                <div class="checkbox__checkmark"></div>
                <div class="checkbox__body"></div>
            </label>
        </p>
        <p v-if="toggle">
            <p> Без пакета услуг: <label><input type="radio" name="sber" v-model="selectedOption" :value="'withoutPackage'"></label></p>
            <p> СберПрайм+: <label><input type="radio" name="sber" :value="'sberPrime'" v-model="selectedOption"></label></p>
            <p> СберПремьер: <label><input type="radio" name="sber" :value="'sberPremier'" v-model="selectedOption"></label></p>
            <p> СберПервый: <label><input type="radio" name="sber" :value="'sberFirst'" v-model="selectedOption"></label></p>
            <p> Sber Private Banking: <label><input type="radio" name="sber" :value="'sberPrivate'" v-model="selectedOption"></label></p>
            <p> Отдаю бонусов: <input type="number" v-model="bonusGive"> руб. Получаю: <span class="moneyReturn"> {{ moneyReturn }} </span> руб.</p>
        </p>       
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
            selectedOption: 'withoutPackage'
        }
    },
    computed: {
        bonusBack() {
            return (this.orderSumm - this.promocode - this.bonusPay) * this.bonusPromise / 100
        },
        realPayment() {
            if ( (this.orderSumm - this.promocode - this.bonusPay) > 0 ) {
                return this.orderSumm - this.promocode - this.bonusPay
            }
            else {
                return '---'
            }
        },
        moneyReturn () {
            
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

})