var Section =  function(sectionJSON) {
  console.log(sectionJSON);
  this.id = sectionJSON.id; 
  this.name = sectionJSON.name;
  this.description = sectionJSON.description;
  this.entity_id = sectionJSON.entity_id;
}
