// Promise Example

const delay = (seconds) => 
    new Promise((resolve, reject) => {
        if (typeof seconds !== 'number') {
            reject(
                new Error('seconds must be a number')
            )
        }
        setTimeout(resolve, seconds * 1000)
    }
    );

    console.log('Zero seconds');
    delay(1).then(() => console.log('one second'));
    delay('one').then(() => console.log('one second'));
    //delay(5).then(() => console.log('one seconds'));
