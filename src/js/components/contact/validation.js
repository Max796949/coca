export const useValid = () => {
  const form = document.querySelector('.get-started__form');
  const formInputs = document.querySelectorAll('.get-started__form-input');
  const inputEmail = document.querySelector('.get-started__form-email');
  const inputPhone = document.querySelector('.get-started__form-phone');



  //   Валидация на доменный суффкис
  function validCountry(country) {
    const re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
  }

  //   Валидация телефона
  function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
  }

  form.onsubmit = function () {
    const emailVal = inputEmail.value;
    const phoneVal = inputPhone.value;
    const emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

    formInputs.forEach(function (input) {
      if (input.value === '') {
        input.classList.add('error');
        console.log('input not filled');
      } else {
        input.classList.remove('error');
      }
    });

    // Запрет на отправку если пустой инпут
    if (emptyInputs.length !== 0) {
      console.log('inputs not filled');
      return false;
    }


    // Инвалид кантри
    if (validCountry(emailVal)) {
      console.log('email not valid');
      inputEmail.classList.add('error');
      return false;
    } else {
      inputEmail.classList.remove('error');
    }

    if (!validatePhone(phoneVal)) {
      console.log('phone not valid');
      inputPhone.classList.add('error');
      return false;
    } else {
      inputPhone.classList.remove('error');
    }
  };

  // Скобка экспорта
};
