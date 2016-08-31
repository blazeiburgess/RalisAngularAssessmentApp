class CreateGeneralNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :general_notes do |t|
      t.string :title
      t.text :body
      t.integer :entity_id

      t.timestamps
    end
  end
end
