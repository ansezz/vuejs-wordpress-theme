# Peach env

set :user, "#{`whoami`.strip}"
#set :user, "root"

server '138.68.253.178', user: fetch(:user), roles: %w{app}

role :server, %w{138.68.253.178}

set :deploy_to, '/home/laravel-vuejs/domains/dev.laravel-vuejs.com/public_html'

set :linked_files, %w{dist/pwa-mat/.htaccess dist/pwa-mat/.htpasswd}

