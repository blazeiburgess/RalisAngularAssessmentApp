class CreateGeneralLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :general_links do |t|
      t.string :title
      t.text :description
      t.text :href
      t.text :archive
      t.integer :entity_id

      t.timestamps
    end
  end
end
