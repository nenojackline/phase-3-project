class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/books' do
    book = Book.all
    book.to_json(include: :author)
  end

  post "/books" do
    new_book = Book.create(title: params[:title], description: params[:description], image_url: params[:image_url], publisher: params[:publisher], author_id: params[:author_id], category_id: params[:category_id])

    if params[:author_id]
      author_instance = Author.find_by(id: params[:author_id])
      new_book.author = author_instance
      new_book.save
    end
    new_book.save
    new_book.to_json(include: :author)
  end

  put '/books/:id' do 
    book = Book.find_by(id: params[:id])
    book.update(title: params[:title]) if params[:title]
    book.update(description: params[:description]) if params[:description]
      book.to_json(include: :author)
  end
  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(
    title: params[:title],
      description: params[:description],
      image_url: params[:image_url],
      author_id: params[:author_id]
    )
    book.to_json
  end

  delete '/books/:id' do 
    book = Book.find_by(id: params[:id])
    book.destroy
    book.to_json
  end



  post '/authors' do
    new_author = Author.create(name: params[:name], city: params[:city])
    new_author.to_json
  end

  get '/authors' do
    author = Author.all
    author.to_json   
  end

  post "/book/author/:book_id/:author_id" do
    book = Book.find_by(id: params[:book_id])
    author_instance = Author.find_by(id: params[:author_id])
    book.author = author_instance
    book.save
    book.to_json(include: :author)
  end

  get '/categories' do
    category = Category.all
    category.to_json   
  end

  post '/categories' do
    new_category = Category.create(category_name: params[:category_name])
    new_category.to_json
  end
  
  patch '/categories/:id' do
    category = Category.find(params[:id])
    category.update(
      category_name: params[:category_name],
      category_id: params[:category_id],
    )
    category.to_json
  end


end