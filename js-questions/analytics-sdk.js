/*

Implement an analytics SDK that exposes log events, it takes in events and queues them, and then starts sending the events. The SDK should adhere the following properties.Send each event after a delay of 1 second and this logging fails every n % 5 times.Send the next event only after the previous one resolves.When the failure occurs attempt a retry.
*/

const events = [];

const sleep = (n) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (n % 5 === 0) {
        rej();
      } else {
        res();
      }
    }, 1000);
  });
};

class SDK {
  logEvent(event) {
    events.push(event);
  }

  async send() {
    let timer = 0;
    while (events.length) {
      const event = events[0];
      try {
        timer++;
        await sleep(timer);
        console.log(`Analytics sent ${event}`);
        events.shift();
      } catch (error) {
        timer = 0;
        console.log("-----------------------");
        console.log("Failed to send event " + event);
        console.log("Retrying sending event " + event);
        console.log("-----------------------");
      }
    }
  }
}

const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();
