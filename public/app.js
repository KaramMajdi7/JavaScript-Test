import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplates } from './classes/ListTemplates.js';
// Form
const form = document.querySelector('.new-item-form');
// Selectors
const type = document.querySelector('#type');
// Inputs
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    form.reset();
});
