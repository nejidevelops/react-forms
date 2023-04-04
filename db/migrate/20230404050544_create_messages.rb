class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :name
      t.string :email
      t.string :phonenumber
      t.string :address
      t.string :department
      t.string :occupation
      t.boolean :availability

      t.timestamps
    end
  end
end
