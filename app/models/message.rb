class Message < ApplicationRecord
    validates :name, :email, :phonenumber, :address, :department, :occupation, :availability, presence: true
end
