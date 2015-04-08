Rails.application.routes.draw do
  root 'user#main'
  post 'signup' => 'user#signup'
  post 'login' => 'user#login'
  get 'welcome' => 'user#welcome'
end
