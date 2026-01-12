let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.calculator button');
let sciBox = document.getElementById('scientific');
let toggleBtn = document.getElementById('toggleSci');

let string = "";


toggleBtn.addEventListener('click', () => {
    sciBox.classList.toggle('show');
});

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let val = e.target.innerHTML;

        if (val === '=') {
            try {
                string = eval(string);
                input.value = string;
                input.style.color = "green";
            } catch {
                input.value = "Error";
                input.style.color = "red";
                string = "";
            }
        }

        else if (val === 'AC') {
            string = "";
            input.value = "";
            input.style.color = "black";
        }

        else if (val === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }

        else if (val === 'sin') {
            string = Math.sin(eval(string) * Math.PI / 180);
            input.value = string;
            input.style.color = "blue";
        }

        else if (val === 'cos') {
            string = Math.cos(eval(string) * Math.PI / 180);
            input.value = string;
            input.style.color = "blue";
        }

        else if (val === 'tan') {
            string = Math.tan(eval(string) * Math.PI / 180);
            input.value = string;
            input.style.color = "blue";
        }

        else {
            string += val;
            input.value = string;
            input.style.color = "black";
        }
    });
});
