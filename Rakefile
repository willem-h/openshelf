begin
  require 'dotenv/tasks'
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
rescue LoadError
end

task default: %i(rubocop spec)
