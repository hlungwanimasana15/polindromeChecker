const StoreHistory = [];
const historyElem = document.getElementById('history');

const element = document.getElementById("btn"); element.addEventListener("click",
    function () {

        let txt = document.getElementById('input-text').value;
        checkPalindrome(txt);
    });

function checkPalindrome(txt) {


    let txt_new = txt.replace(/[\W_]/g, '').toLowerCase();
    let len = txt_new.length;
     let halfLen = Math.floor(len/2);
    let display = document.getElementById("display");
    let i;
    let status = "";

    for(i=0; i < halfLen; i++){
        console.log(txt_new[i], ' ', txt_new[len-1-i]);
        if(txt_new[i] !== txt_new[len-1-i]){
            status="Not a palindrome:false";
            display.textContent="No! its not a palindrome";
            console.log('no match'); 

            break;

        }else if(txt_new[i] === txt_new[len-1-i]) {
            status="its a Palindrome:true";
            display.textContent="Yes! its a palindrome";
            
        }
    
        // console.log(status);
        // console.log(txt_new[i], ' =? ', txt_new[len -1 - i], ' ?===', txt_new[len - 1]);

    }

    StoreHistory.push(`<li>${txt_new} : ${status}</li>`);
    console.log(StoreHistory);
    let displayHistory = "";
    for (let i of StoreHistory) {
        displayHistory += i
    }
    historyElem.innerHTML = displayHistory;
    return ;
};


