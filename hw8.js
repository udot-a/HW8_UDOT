// ************************* REQUIRED ******************************

var paragraph = document.createElement('p');
paragraph.innerText = 'Time will be displayed here!!!'
paragraph.style = ` padding:20px;`
required.appendChild(paragraph);
const timer = (period) => {
    let count = 0;
    return setTimeout(function tick() {
        paragraph.innerText = new Date().toLocaleTimeString()
        count++;
        count <= period ? setTimeout(tick, 1000) : paragraph.innerText = 'Time will be displayed here!!!';
    }, 1000)
}
setPeriod.onclick = (event) => {
    let period = Number(input.value);
    if (isNaN(period) || period <= 0 || period > 100) {
        alert('Введите число от 1 до 100')
        input.value = ''
        return null
    }
    timer(period)
    input.value = ''

}

// ******************* ADDITIONAL #1 *******************************************
var typeMessage = (function (velocity) {
    container=additonalOne.appendChild(document.createElement('p'))
    container.style = `color: magenta;`
    container.id = 'symbolOutputString'
    var index = 0
    return function (message) {
        setTimeout(function tick() {
            container.innerText += message.slice(index, index + velocity)
            index += velocity;
            index < message.length?setTimeout(tick, 1000):index=0; 
        }, 1000)
    }
})(1)
typeSymb.onclick = (event)=>{
    
    outputStr.value==''? alert('Введите строку для посимвольного вывода!!!') :typeMessage(outputStr.value)
    outputStr.value = ''
}
outputStr.onkeypress = (event)=>symbolOutputString.innerText=''
// ******************* ADDITIONAL #2 *******************************************

