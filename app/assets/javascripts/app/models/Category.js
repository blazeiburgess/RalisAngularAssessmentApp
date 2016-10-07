var Category =  function(categoryJSON) {
  this.id = categoryJSON.id;
  this.name = categoryJSON.name;
  this.entities = categoryJSON.cats || [];
  this.entitiesCount = this.entities.length;
}
