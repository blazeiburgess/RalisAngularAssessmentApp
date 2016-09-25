var title = $('h4.pagetitle').text().replace(/"/g, "'");
// below makes full synopsis
$('#read_more').click();
var description = $('.synopsis').text().replace(/"/g, "'").replace(/Show Less/, '');
function addCats () {
  for (var i = 0; i < arguments.length; i++) { 
    console.log('ent.categories << Category.find_or_create_by({:name => "' + arguments[i] + '"})');
  }
}

console.log('ent = ""');
console.log('ent = Entity.find_or_create_by(name: "' + title + '", description: "' + description + '")');
console.log('ent.categories << Category.find_or_create_by({:name => "book"})');
