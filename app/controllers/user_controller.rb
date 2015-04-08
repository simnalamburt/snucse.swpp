class UserController < ApplicationController
  def main
  end

  def signup
    user = User.new
    user.username = params[:id]
    user.password = params[:passwd]
    user.count = 1
    user.save

    render json: {
      user_name: user.username,
      login_count: 1
    }
  end
end
