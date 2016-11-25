require_relative 'config/application'

begin
  require 'dotenv/tasks'
rescue LoadError
end

Rails.application.load_tasks

task default: %i(spec cucumber)
