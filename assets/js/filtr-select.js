var toggle = document.querySelector('[name="courses"]');

toggle.addEventListener('change', function() { 
    var chosenClass = this[this.selectedIndex].value;
    var items = document.querySelectorAll('.item');

    Array.prototype.forEach.call(items, function(item) {
        var child = item.children[0];
        var childClasses = child.className.split(' ');

        if (childClasses.indexOf(chosenClass) === -1) {
            item.style.display='none';
        } else {
            item.style.display='flex';
        }
    });
});