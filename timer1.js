const alarmClock = process.argv.slice(2);
const timer = () => {
  let alarmClockSort = alarmClock.sort();
  for (let i = 0; i < alarmClock.length; i++) {
    if (alarmClockSort === NaN || alarmClock <= -1) {
      process.stdout.write('');
    } else {

      setTimeout(() => {
        // couldnt get the system to beep :(
        process.stdout.write('\n . \n');
      }, alarmClockSort[i] * 1500);
    }
  }
}

