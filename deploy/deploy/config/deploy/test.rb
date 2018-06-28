
#set :user, "#{`whoami`.strip}"

set :user, "laravel-vuejs"

set :branch, "master"

set :domain, "dev.laravel-vuejs.com"

server '138.68.253.178', user: fetch(:user), roles: %w{app}

role :server, %w{138.68.253.178}

set :deploy_to, '/home/#{fetch(:user)}/domains/#{fetch(:domain)}/public_html'

set :tmp_dir, '/home/laravel-vuejs/tmp'

set :linked_files, %w{dist/pwa-mat/.htaccess dist/pwa-mat/.htpasswd}

