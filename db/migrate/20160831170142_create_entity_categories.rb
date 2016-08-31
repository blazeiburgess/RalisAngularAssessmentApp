class CreateEntityCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :entity_categories do |t|
      t.integer :entity_id
      t.integer :category_id

      t.timestamps
    end
  end
end
