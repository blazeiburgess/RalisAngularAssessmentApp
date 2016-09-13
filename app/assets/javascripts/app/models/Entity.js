var Entity =  function(entityJSON) {
  this.id = entityJSON.id;
  this.name = entityJSON.name;
  this.description = entityJSON.description;
  this.upvotes = entityJSON.upvotes;
  this.sections = entityJSON.sections;
  this.categories = entityJSON.categories;
  this.generalLinks = entityJSON.general_links;
  this.generalNotes = entityJSON.general_notes
}
