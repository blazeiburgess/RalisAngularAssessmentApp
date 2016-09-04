var Note =  function(noteJSON) {
  this.id = noteJSON.id;
  this.title = noteJSON.title;
  this.body = noteJSON.body;
  this.entity_id = noteJSON.entity_id;
  this.section_id = noteJSON.section_id;
}
