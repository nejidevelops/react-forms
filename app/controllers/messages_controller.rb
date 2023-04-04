class MessagesController < ApplicationController
    def index
        render json: Message.all
    end

    def create
        message = Message.create(message_params)
        render json: message    
    end

    private

    def message_params
        params.permit(:name, :email, :phonenumber, :address, :department, :occupation, :availability)
    end

end
