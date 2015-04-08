class UserController < ApplicationController
  def main
  end

  def signup
    id = params[:id]
    passwd = params[:passwd]

    render json: {
      user_name: id,
      login_count: 1
    }
  end
end
