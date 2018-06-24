lock '3.11.0'

set :application, 'vuejs-wordpress-theme'
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

namespace :vuejsWordpressTheme do
  task :build do
    on roles(:server) do
      within release_path do
        execute "cd #{release_path} && yarn && yarn build"
      end
    end
  end
end


after "deploy:updating", "medi1NewsSpa:build"
