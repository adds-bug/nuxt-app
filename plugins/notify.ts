import { Notify } from 'quasar';

export default defineNuxtPlugin(() => {
  Notify.registerType('success', {
    icon: 'check_circle',
    iconColor: 'white',
    iconSize: '2rem',
    color: 'positive',
    textColor: 'white',
    // position: 'top',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }],
    classes: 'flex flex-center text-subtitle1 text-weight-bold',
  });

  Notify.registerType('fail', {
    icon: 'warning',
    iconColor: 'white',
    iconSize: '2rem',
    color: 'negative',
    textColor: 'white',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }],
    classes: 'flex flex-center text-subtitle1 text-weight-bold',
  });

  Notify.registerType('fail_no_data', {
    icon: 'warning',
    iconColor: 'white',
    iconSize: '2rem',
    color: 'negative',
    textColor: 'white',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }],
    classes: 'flex flex-center text-subtitle1 text-weight-bold',
    position: 'top',
  });

  Notify.registerType('reselect', {
    icon: 'check_circle',
    iconColor: 'white',
    iconSize: '2rem',
    color: 'primary',
    textColor: 'white',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }],
    classes: 'flex flex-center text-subtitle1 text-weight-bold',
    position: 'top',
  });

  Notify.registerType('info', {
    icon: 'lightbulb_circle',
    iconColor: 'black',
    iconSize: '2rem',
    color: 'grey-3',
    textColor: 'black',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'black' }],
    classes: 'flex flex-center text-subtitle1 text-weight-bold',
    position: 'top-right',
  });

  Notify.registerType('currentBrand', {
    // icon: 'lightbulb_circle',
    // iconColor: 'black',
    // iconSize: '2rem',
    // color: 'grey-3',
    textColor: 'black',
    timeout: 0,
    actions: [{ icon: 'close', color: 'black' }],
    classes: 'flex flex-center text-subtitle1 text-weight-bold transparent',
    position: 'top-right',
  });
});
