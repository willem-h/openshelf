ruby '2.3.1'
source 'https://rubygems.org'

gem 'analytics-ruby', '~> 2.0.0', require: 'segment/analytics'
gem 'rake'

group :development, :test do
  gem 'dotenv'
  gem 'rubocop'
  gem 'simplecov'
end

group :test do
  gem 'rspec'
end

group :production do
  gem 'appsignal'
  gem 'lograge'
end
