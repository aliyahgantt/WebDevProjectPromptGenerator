var Item = [






'Test 1',
'Test 2',
'Test 3',
'Test 1',
'Test 2',
'Test 1',
'Test 2',
'Test 1',
'Test 2'







]

function newItem() {
var randomNumber = Math.floor(Math.random() * (Item.length));
document.getElementById('itemDisplay').innerHTML = Item[randomNumber];

}
