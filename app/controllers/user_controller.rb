class UserController < ApplicationController
  def signup
    user = User.new
    user.username = params[:id]
    user.password = params[:passwd]
    user.count = 1
    user.save

    render json: {
      user_name: user.username,
      login_count: user.count
    }
  end

  def login
    user = User.where(username: params[:id]).first()
    user.count += 1
    user.save

    render json: {
      user_name: user.username,
      login_count: user.count
    }
  end
end
