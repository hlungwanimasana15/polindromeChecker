 const StoreHistory=[];
 

const element = document.getElementById("btn");element.addEventListener("click",
function (){
    let txt = document.getElementById('input-text').value;
    checkPalindrome(txt);
});

function checkPalindrome(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let len=txt_new.length;
    let halfLen = Math.floor(len/2);
    let display = document.getElementById("display");
    let i;

    for(i=0; i < halfLen; i++){
        if(txt_new[i] !== txt_new[len-1-i]){
         display.textContent="No! its not a palindrome";
        }else{
        display.textContent="Yes! its a palindrome";}
    }
    
    StoreHistory.push(txt_new);
    console.log(StoreHistory);

    return;
}

;


