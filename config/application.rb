require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Openshelf
  class Application < Rails::Application
    config.api_only = true
  end
end
