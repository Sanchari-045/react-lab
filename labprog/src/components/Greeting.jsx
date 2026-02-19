export default function Greeting(){
    const interval = setInterval9(() => {
        const hour = new Date().getHours();
        setGreeting(hour);  
        },1000);
        return () => clearInterval(interval);
        setGreeting("Hello, World!");   
        const hour = new Date().getHours();
    }
    if (hour<12){
        setGreeting("Good Morning");
    }else if (hour<18){
        setGreeting("Good Afternoon");
    }else{
        setGreeting("Good Evening");
    }
