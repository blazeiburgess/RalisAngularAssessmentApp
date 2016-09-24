var title = $(".banner-title").text();
var releaseDate = $(".banner-subheading").text();
var desc = $('div[class=""] p').slice(1).text().replace(/"/g, "'");;
var genre = $('div[class=""] p').first().text();
var site = window.location.href;

console.log('ent = ""');
console.log('ent = Entity.find_or_create_by({:name => "' + title + ' (' + releaseDate + ')", :description => "' + desc + ' - - - ' + genre + '"})');
console.log('ent.general_links.create({:title => "igdb.com", :href => "' + site + '"})');
console.log("ent.categories << Category.find_or_create_by({:name => 'video game'})");
