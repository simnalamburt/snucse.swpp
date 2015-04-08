class UserController < ApplicationController
  def signup
    user = User.new
    user.username = params[:id]
    user.password = params[:passwd]
    user.count = 1
    if user.save
      render json: {
        user_name: user.username,
        login_count: user.count
      }
    else
      msg = user.errors.messages

      e1 = msg[:username] && msg[:username] != ['has already been taken']
      e2 = !msg[:password].nil?
      e3 = msg[:username] && msg[:username] == ['has already been taken']

      render json: {
        error_code:
          e1 ? -1 :
          e2 ? -2 :
          e3 ? -3 : 0
      }, status: 412
    end
  end

  def login
    user = User.where(username: params[:id], password: params[:passwd]).first()
    unless user
      return render json: { error_code: -4 }, status: 412
    end

    user.count += 1
    user.save

    render json: {
      user_name: user.username,
      login_count: user.count
    }
  end

  def delete_all
    User.delete_all

    head :ok
  end
end
