
const highlightable = []

document.querySelectorAll('div, p, a, span, h1, h2, h3, h4, h5, h6, li').forEach(function(element) {
    
    if (element.textContent.length > 0 && ( element.style.display !== 'none' || element.style.visibility === 'visible') ){
        highlightable.push(element);
    }
});

selection_time = 1000;

var intervalId = setInterval(function() {

    // Internal testing has concluded that randomly selecting a node to highlight will provide better results.
    const index = Math.floor(Math.random() * highlightable.length);
    let range = new Range();
    range.setStart(highlightable[index], 0);
    range.setEnd(highlightable[index], highlightable[index].children.length);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    // Internal testing has concluded that a sightly random interval will yield results faster.
    selection_time = 500 + Math.random() * 2000; // Let's avoid seizures as much as possible.

}, selection_time);