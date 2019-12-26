const { SUBSCRIBE_API, PUBLIC_KEY } = process.env;

/**
 * notificationSubscription
 *
 * @param {object} ServiceWorkerRegistration - serviceWorker.register
 * @param {string} publicKey result base64String a public vavid key
 */

async function subscription(register, publicKey) {
  let isSubscribed = false;
  let swRegistration = null;

  swRegistration = register;

  try {
    const subscription = await swRegistration.pushManager.getSubscription();
    isSubscribed = !(subscription === null);
    if (isSubscribed) {
      console.log('User is subscribed');
    } else {
      console.log('User subscribe');
      try {
        const subscriptionData = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: publicKey,
        });
        console.log('User is subscribed');
        await fetch(SUBSCRIBE_API, {
          method: 'POST',
          body: JSON.stringify(subscriptionData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        isSubscribed = true;
        // Thanks for subscribing
        console.log('Thanks for subscribing!');
        // notificationComponent(NOTIFICATION_MESSAGE_SUBSCRIBING);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

/**
 * urlBase64ToUint8Array
 *
 * @param {string} base64String a public vavid key
 */

export function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function subscribeToNotifications() {
  const convertedVapidKey = urlBase64ToUint8Array(PUBLIC_KEY);

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.ready.then(registration => {
      // registration.unregister();
      subscription(registration, convertedVapidKey);
    });
  }
}
