
document.getElementById('translateButton').addEventListener('click', function() {
    const aText = document.getElementById('a');
    const bText = document.getElementById('b');
    const cText = document.getElementById('c');
    const dText = document.getElementById('d');
    const eText = document.getElementById('e');
    const fText = document.getElementById('f');
    const gText = document.getElementById('g');
    const hText = document.getElementById('h');

    if (aText.innerText === 'ОТДЕЛОМ ВНУТРЕННИХ ДЕЛ') {
       aText.innerText = 'MOSCOW CITY DEPARTMENT';
       bText.innerText = 'OF INTERNAL AFFAIRS';
       cText.innerText = 'LADONENKO';
       dText.innerText = 'ANASTASIA';
       eText.innerText = 'ALEKSANDROVNA';
        fText.innerText = 'F.';
        gText.innerText = 'C. KHARKIV';
        hText.innerText = 'KHARKIV REGION';
    } else {
        aText.innerText = 'ОТДЕЛОМ ВНУТРЕННИХ ДЕЛ';
        bText.innerText = 'ГОР. МОСКВА';
        cText.innerText = 'ЛАДОНЕНКО';
        dText.innerText = 'АНАСТАСИЯ';
        eText.innerText = 'АЛЕКСАНДРОВНА';
        fText.innerText = 'ЖЕН.';
       gText.innerText = 'ГОР. ХАРЬКОВ';
       hText.innerText = 'ХАРЬКОВСКАЯ ОБЛ.';
    }
});
