class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        render json: find_user
    end

    def update
        user = find_user
        user.update!(user_params)
    end

    def create
        render json: User.create!(user_params)
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :email, :age, :gender)
    end
end
