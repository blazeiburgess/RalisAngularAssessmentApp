class CreateLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :links do |t|
      t.string :title
      t.text :description
      t.text :href
      t.text :archive
      t.integer :subsection_id

      t.timestamps
    end
  end
end
