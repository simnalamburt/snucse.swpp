class UserController < ApplicationController
  def main
  end

  def signup
    render plain: '용사님..! AJAX 요청을 보내는것에 성공하셨군요..!'
  end
end
