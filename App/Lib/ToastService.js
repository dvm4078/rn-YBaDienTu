import { Toast } from 'native-base';

const showToast = (message, position = 'top', duration = 1500) => {
  Toast.show({
    text: message,
    duration,
    position,
    buttonText: 'OK',
  });
};

export default showToast;
