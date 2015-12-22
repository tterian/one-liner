source 'https://rubygems.org'

# Standard Rails packaging
gem 'rails', '4.2.1'
gem 'sass-rails', '~> 5.0'
gem 'rails-api'
gem 'active_model_serializers'

# Project-specific gems
gem 'devise_token_auth'
gem 'pg'
gem 'bower-rails'

gem 'spring', :group => :development

group :development, :test do
	gem 'spring'
end

group :production, :staging do
	gem 'rails_12factor'
	gem 'rails_stdout_logging'
	gem 'rails_serve_static_assets'
end