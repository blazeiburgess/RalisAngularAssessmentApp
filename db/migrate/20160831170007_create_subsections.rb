class CreateSubsections < ActiveRecord::Migration[5.0]
  def change
    create_table :subsections do |t|
      t.string :name
      t.text :description
      t.integer :section_id

      t.timestamps
    end
  end
end
