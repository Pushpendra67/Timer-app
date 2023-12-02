const daysElement=document.querySelector(".days");
const hoursElement=document.querySelector(".hours");
const minutesElement=document.querySelector(".minutes");
const secondsElement=document.querySelector(".seconds");
const heading=document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");

const second=1000;
const minute=second*60;
const hour=minute*60;
const day=24*hour;

const timerfunction=()=>{
    let now=new Date(),
    dd=String(now.getDate()).padStart(2,"0"),
    mm=String(now.getMonth()+1).padStart(2,"0"),
    yyyy=now.getFullYear();

// const verifyday=prompt("Enter the day").padStart(2,"0");
// const verifymonth=prompt("Enter the Month").padStart(2,"0");
// if((verifyday>=1 && verifyday<=31))
// {
//     const enteredDay=verifyday;
//     // const enteredMonth=verifymonth;
// }
// else {
//     alert("please enter the correct date or correct month")
// }
    const enteredDay=prompt("Enter the date").padStart(2,"0");
    // 
    const enteredMonth=prompt("Enter the Month").padStart(2,"0");

    now=`${mm}/${dd}/${yyyy}`;
     let targetDate=`${enteredMonth}/${enteredDay}/${yyyy}`;

     if(now>targetDate)
     {
        targetDate=`${enteredMonth}/${enteredDay}/${yyyy+1}`;
     }

    const intervalid= setInterval(()=>{
        const timer= new Date(targetDate).getTime();
        const today= new Date().getTime();

        const difference =timer-today;
        const leftDay=Math.floor(difference/day),
         leftHour=Math.floor((difference%day)/hour),
        leftMinute=Math.floor((difference%hour)/minute),
         leftSecond=Math.floor((difference%minute)/second);

         daysElement.innerText=leftDay;
         hoursElement.innerText=leftHour;
         minutesElement.innerText=leftMinute;
         secondsElement.innerText=leftSecond;


         if(difference<0)
         {
            counterTimer.style.display="none";
            heading.innerText="Time over ";
            clearInterval(intervalid);
         }
     }, 0);
};
timerfunction();