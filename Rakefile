require_relative 'config/application'

begin
  require 'dotenv/tasks'
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
rescue LoadError
end

Rails.application.load_tasks
