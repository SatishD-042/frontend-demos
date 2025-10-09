let firstPress = true;
let input = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        if (firstPress) {
            const display = document.getElementById("display");
            display.style.transition = 'border-radius 0.1s';
            
            // Wait 1 second before changing the border radius
            setTimeout(() => {
                display.style.borderRadius = '40px';
            }, 100);

            firstPress = false;
        }
    });
});

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }

        
    })
})


