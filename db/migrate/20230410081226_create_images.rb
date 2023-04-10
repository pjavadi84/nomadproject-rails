class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :author
      t.integer :width
      t.integer :height
      t.string :url
      t.string :download_url
      t.references :gallery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
