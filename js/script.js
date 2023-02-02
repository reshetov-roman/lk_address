class Address {
  constructor(buttonAddToAddress,countSavesAddressess,emptyAddress) {
    this.buttonAddToAddress = document.getElementById(buttonAddToAddress);
    this.countSavesAddressess = document.querySelector(countSavesAddressess);
    this.emptyAddress = document.getElementById(emptyAddress);
  }

  init() {
    let idBlock = 0;
        this.countSavesAddressess.childElementCount ? this.emptyAddress.remove() : '';
        return idBlock;
  }
  clickAddAddress() {
    const th = this;
    if(th?.buttonAddToAddress) {
      th.buttonAddToAddress.addEventListener('click', e => {
        const target = e.target,
              createBlock = document.createElement('li');
              createBlock.classList.add('page-address-wrapper__action');
              createBlock.id = this.init();
              createBlock.innerHTML = this.returnCartHtml();
              this.init();
              target.nextElementSibling.append(createBlock);
              target.remove(); // die to button
              this.countSavesAddressess.remove();
              this.emptyAddress.remove();
              this.getBlockActions();
              this.saveAllAddressess();
              this.maskedInputPhone();
              this.invalidForm();
      });
    }

  }

//   invalidForm() {
//     let required = document.querySelectorAll('[required]');
//     console.log(required);
//   }

   returnCartHtml() {
    return `
              <h6 class="page-address-wrapper__subtitle">Добавить новый адрес</h6>
              <div class="page-address-wrapper__flex">
                <form class="page-address-wrapper__form">
                  <div class="page-address-wrapper__form-control">
                    <input class="page-address-wrapper__form-control--field" required placeholder="Город" type="text">
                  </div>
                  <div class="page-address-wrapper__form-control">
                    <input class="page-address-wrapper__form-control--field" required placeholder="Область" type="text">
                  </div>
                  <div class="page-address-wrapper__form-control">
                    <input class="page-address-wrapper__form-control--field" required placeholder="Улица и дом" type="text">
                  </div>
                  <div class="page-address-wrapper__form-checkbox">
                    <label class="page-address-wrapper__form-checkbox--switch">
                      <input type="checkbox" class="page-address-wrapper__form-checkbox--checkbox" id="private-house">
                      <span class="page-address-wrapper__form-checkbox--slide"></span>
                    </label>
                    <label class="page-address-wrapper__form-checkbox--text" for="private-house">Частный дом</label>
                  </div>
                  <div class="page-address-wrapper__form-hide-fileds" id="form-hide-fileds">
                    <input class="page-address-wrapper__form-hide-fileds--field" type="text" placeholder="Кв/Офис">
                    <input class="page-address-wrapper__form-hide-fileds--field" type="text" placeholder="Подъезд">
                    <input class="page-address-wrapper__form-hide-fileds--field" type="text" placeholder="Этаж">
                  </div>
                  <h6 class="page-address-wrapper__subtitle">Данные получателя</h6>
                  <div class="page-address-wrapper__form-control">
                    <input class="page-address-wrapper__form-control--field" required placeholder="Имя и фамилия" type="text">
                  </div>
                  <div class="page-address-wrapper__form-control">
                    <input class="page-address-wrapper__form-control--field" id="phone" required placeholder="Мобильный телефон" type="text">
                  </div>
                  <div class="page-address-wrapper__form-buttons">
                    <input class="page-address-wrapper__form-buttons--cancel" id="form-button-cancel" type="button" value="Отменить">
                    <input class="page-address-wrapper__form-buttons--save" type="submit" value="Сохранить">
                  </div>
                </form>
                <div class="page-address-wrapper__map">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A40897d8495b6dd8d23a32053a121fa080a821f7604d354f59d0b3bb081bc058a&amp;source=constructor"
                      height="86.5%" width="100%" frameborder="0">
                  </iframe>
                </div>
              </div>
    `;
  
  }

  saveAllAddressess() {
    const buttonSave = document.querySelector('.page-address-wrapper__form-buttons--save');
        buttonSave.addEventListener('click', e => {
        console.log(e.target);
    });
  }

  maskedInputPhone() {
    $(document).ready(function() {
      $("#phone").mask("+7 (999) 99-99-999");
    }); 
  }

  reloadPage() {
    location.reload();
  }
  
  getBlockActions() {
    const privateHouse = document.getElementById('private-house'),
    formHideFileds = document.getElementById('form-hide-fileds'),
    formButtonCancel = document.getElementById('form-button-cancel');

    privateHouse.addEventListener('change', e => {
      if(e.target.checked) {
      formHideFileds.classList.add('active');
      }else {
      formHideFileds.classList.remove('active');
      }
    });

    formButtonCancel.onclick = this.reloadPage;
  }
  
  
}

const instanceAddress = new Address(
  'add-address',
  '.page-address-wrapper__saved-addresses',
  'empty-address'
);

instanceAddress.init();
instanceAddress.clickAddAddress();



