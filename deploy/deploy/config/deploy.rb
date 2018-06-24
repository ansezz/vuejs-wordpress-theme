lock '3.11.0'

set :application, 'app'
set :repo_url, 'git@github.com:ansezz/vuejs-wordpress-theme.git'
set :branch, 'master'

set :format, :pretty
set :log_level, :debug
set :pty, true

set :ssh_options, {
#    verify_host_key: :never,
    port: 22
}

set :keep_releases, 3

namespace :httpd do
  task :htaccess do
    on roles(:server) do
      if fetch(:stage) == :test
        upload! "../config/test/.htaccess" , "/home/laravel-vuejs/domains/dev.laravel-vuejs.com/public_html/shared/dist/pwa-mat/.htaccess"
      end
    end
  end
  task :htpasswd do
     on roles(:server) do
       upload! "../config/.htpasswd", "/home/laravel-vuejs/domains/dev.laravel-vuejs.com/public_html/shared/dist/pwa-mat/.htpasswd"
     end
  end
  task :restart do
    on roles(:server) do
      print "Restaring httpd..."
      execute "sudo service httpd restart"
    end
  end
end

namespace :app do
  task :build do
    on roles(:server) do
      within release_path do
        execute "cd #{release_path} && yarn && quasar build -m pwa"
      end
    end
  end
  task :done do
      on roles(:server) do
        print "Done :D"
      end
  end
end


after "deploy:updating", "httpd:htaccess"
after "httpd:htaccess", "httpd:htpasswd"
after "httpd:htpasswd", "app:build"
after "app:build", "httpd:restart"
after "deploy:finished", "app:done"
