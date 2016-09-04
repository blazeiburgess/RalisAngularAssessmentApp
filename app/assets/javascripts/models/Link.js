var Link =  function(linkJSON) {
  this.id = linkJSON.id;
  this.title = linkJSON.title;
  this.description = linkJSON.description;
  this.href = linkJSON.href;
  this.archive = linkJSON.archive;
  this.entity_id = linkJSON.entity_id;
  this.subsection_id = linkJSON.subsection_id;
}
