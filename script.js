// Digital_Clock//padstart()==> only using string doesn't work in number that's why i'm using tostring()method

function clockcontain(){
    const now = new Date();
    let hour = now.getHours()
    let meri = hour >=12 ? "PM" :"AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2,0);
    let minute= now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);
    const timetorun = `${hour}:${minute}:${seconds} ${meri}`;
    document.getElementById("clock").textContent=timetorun;
}
clockcontain(); 
setInterval(clockcontain,1000);