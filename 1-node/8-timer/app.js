let num = 1;
const interval = setInterval(()=>{
  console.log(num++);
}, 1000);

setTimeout(()=>{
  console.log('Time out!');
  clearInterval(interval); // interval initialization
}, 6000);