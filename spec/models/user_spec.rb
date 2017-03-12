require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'with a valid name and email' do
#   let(:user) do
#     double(
#       :user,
#       email: 'user@example.com',
#       name: 'Example User'
#     )

    let(:user) do
      build(
        :user,
        email: 'user@example.com',
        name: 'Example User'
      )
    end

    subject { user }

    it 'is valid' do
      is_expected.to be_valid
    end
  end
end
