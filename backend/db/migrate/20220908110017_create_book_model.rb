class CreateBookModel < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |b|
      b.string :title 	#a text string up to 256 characters long
      b.text :description	# a long text string
      b.string :image_url  #a text string up to 256 characters long
    end 
  end
end
