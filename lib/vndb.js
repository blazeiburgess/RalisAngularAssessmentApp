var name = document.querySelector('.stripe').children[0].children[0].children[1].innerHTML;
var aliases = document.querySelector('.stripe').children[0].children[0].children[1].innerHTML;
var length = document.querySelector('.stripe').children[0].children[2].children[1].innerHTML;
// below method does not filter html tags
var desc = document.querySelector('.vndesc p').innerHTML.replace(/<br>/g, '').replace(/<a.+>/g, '').replace(/"/g, '\'')
var href = window.location.href

var tags = document.querySelector('#vntags').children
var pushableTags = [];
for (var i = 0; i < tags.length; i++) {
  pushableTags.push(tags[i].children[0].innerHTML)
}

console.log('ent = ""');
console.log('ent = Entity.find_or_create_by({:name => "' + name + ' (' + aliases + ', ' + length + ')", :description => "' + desc + '"})\n')
console.log('ent.general_links.create({:title => "vndb.org", :href => "' + href + '"})');
console.log("ent.categories << Category.find_or_create_by({:name => 'visual novel'})");
for (var i = 0; i < pushableTags.length; i++) {
  console.log('ent.categories << Category.find_or_create_by({:name => "' + pushableTags[i].toLowerCase() + '"})');
}
console.log('ent.save')
