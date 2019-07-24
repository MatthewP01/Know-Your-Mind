class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.string :name
      t.string :description
      t.string :conditions
      t.string :location
      t.string :image_url

      t.timestamps
    end
  end
end
