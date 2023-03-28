const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++
        } else if(styles.contains('decrease')){
            count--
        } else{
            count = 0
        }
        
        if(count===0){
            value.style.color = 'black'
        } else if(count > 0){
            value.style.color = 'green'
        } else {
            value.style.color = 'red'
        }
        value.textContent = count
    })
})