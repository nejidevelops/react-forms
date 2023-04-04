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

    # def index 
    #     messages = Message.all
    #     render json: messages
    # end

    # def show
    #     messages = find_message
    #     render json: messages
    # end

    # def create
    #     message = Message.create(message_params)
    #     render json: message
    # end

    # def update
    # end

    # def destroy
    #     message = find_Message
    #     message.destroy
    #     head: no_content
    # end

    # private

    # def find_Message
    #     Message.find(params[:id])
    # end
    
    # def Message_params
    #     params.permit(:name, :image, :description)
    # end
end
