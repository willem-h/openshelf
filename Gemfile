ruby '2.3.1'
source 'https://rubygems.org'

gem 'pg'
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.0'
gem 'rake'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'dotenv'
  gem 'rubocop'
  gem 'simplecov'
end

group :development do
  gem 'listen'
  gem 'spring'
end

group :test do
  gem 'rspec'
end

group :production do
  gem 'lograge'
  gem 'rails_12factor'
end
