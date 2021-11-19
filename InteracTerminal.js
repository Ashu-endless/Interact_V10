const terminal = document.querySelector('#terminal')
export function InteractMessage(mssg,color){
    terminal.innerText = mssg
    terminal.style.backgroundColor = color
    setTimeout(() => {
        terminal.innerText = ""
        terminal.style.backgroundColor = "#2f142f"    
    }, 3000);
    
}