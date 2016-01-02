source 'https://rubygems.org'

# Standard Rails packaging
gem 'rails', '4.2.1'
gem 'sass-rails', '~> 5.0'
gem 'rails-api'
gem 'active_model_serializers'

# Project-specific gems
gem 'omniauth'
gem 'httparty'
gem 'devise_token_auth'
gem 'pg'
gem 'public_activity'
gem 'bower-rails'

gem 'spring', :group => :development

group :development, :test do
	gem 'spring'
end

group :production, :staging do
	gem 'rails_12factor'
end


# Makes sense for Wondows env only
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]