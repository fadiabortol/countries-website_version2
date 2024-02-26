export class MyService{
    counter: number = 0;
    constructor(){
       // alert('MyService constructor');
    }
    increment(){
        this.counter+=1;
        alert(this.counter);
    }
    decrement(){
        this.counter-=1;
        alert(this.counter);
    }
}