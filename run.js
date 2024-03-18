//sidebar

const menuItems = document.querySelectorAll('.menu-item');

// messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const messsage = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector
('.customize-theme');
const fontSizes = document.querySelectorAll
('.choose-size span');
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll
('.chhose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');




//========sidebar========
//remove active class for all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
   item.classList.remove('active');
    })
}

//=========notifications=======
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');

    if (item.id !== 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
      document.querySelector('#notifications .notification-count').style.display = 'block';
    } else {
      // Toggle the display of the notifications popup
      const notificationsPopup = document.querySelector('.notifications-popup');
      if (notificationsPopup.style.display === 'block') {
        // If the notifications popup is already visible, hide it
        notificationsPopup.style.display = 'none';
        document.querySelector('#notifications .notification-count').style.display = 'block';
      } else {
        // If the notifications popup is hidden, show it
        notificationsPopup.style.display = 'block';
        document.querySelector('#notifications .notification-count').style.display = 'none';
      }
    }
  });
});


//=============messages============
//searches chats

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  messsage.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  });
};
messageSearch.addEventListener('input', searchMessage);




messagesNotification.addEventListener('click', () => {
  // Highlight messages
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  
  // Hide notification count
  messagesNotification.querySelector('.notification-count').style.display = 'none';

  // Set a timeout to revert the highlighting and show the notification count
  setTimeout(() => {
    // Remove box shadow
    messages.style.boxShadow = 'none';

    // Display notification count
    messagesNotification.querySelector('.notification-count').style.display = 'block';
  }, 2000);
});


// theme customization
//open model
const openThemeModel = () => {
  themeModel.style.display = 'grid';
}

const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
      themeModel.style.display = 'none';
    }
}

//close model
themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click',openThemeModel);



//=============fonts==================

//remove active class from span or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  });
}

fontSizes.forEach(sizeElement => {
  sizeElement.addEventListener('click', () => {
    removeSizeSelector();

    // Rename the variable to avoid conflict
    let selectedFontSize;
    sizeElement.classList.toggle('active');

    if (sizeElement.classList.contains('font-size-1')) {
      selectedFontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (sizeElement.classList.contains('font-size-2')) {
      selectedFontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (sizeElement.classList.contains('font-size-3')) {
      selectedFontSize = '16px';
      root.style.setProperty('--sticky-top-left', '2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (sizeElement.classList.contains('font-size-4')) {
      selectedFontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    } else if (sizeElement.classList.contains('font-size-5')) {
      selectedFontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-10rem');
      root.style.setProperty('--sticky-top-right', '-33rem');
    }

    // Apply the selected font size to your content
    // For example, update the font size of a specific element:
    document.body.style.fontSize = selectedFontSize;
   
      //change the main html font size
    document.querySelector('html').style.fontSize = fontSize;
  });

});

//remove active one on clicking another
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}

//change primary colors 

colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primary;
    changeActiveColorClass();

  if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');

    root.style.setProperty('--primary-color-hue', primaryHue);
  });
});



//theme background value
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//chnges background colorr
const changeBG = () => {
  root.style.setProperty('--light-color-lightness',lightColorLightness);
  root.style.setProperty('--white-color-lightness',whiteColorLightness);
  root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click', () => {
  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  window.location.reload();

});

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness  = '15%';

  //add active class
  Bg2.classList.add('active');
  //remove active class from the others
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();

});

Bg3.addEventListener('click',() => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness  = '0%';

  //add active class
  Bg3.classList.add('active');
  //remove active class from the others
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBG();

});




    




