Rails.application.routes.draw do
  root 'user#main'
  get 'welcome' => 'user#welcome'

  post 'signup' => 'user#signup'
  post 'login' => 'user#login'
  post 'clearData' => 'user#delete_all'
end
