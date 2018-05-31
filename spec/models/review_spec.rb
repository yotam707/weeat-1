require 'rails_helper'

RSpec.describe Review, type: :model do
  # Association test
  # ensure an item record belongs to a single todo record
  it { should belong_to(:restaurant).dependent(:destroy) }
  # Validation test
  # ensure rating is between 0 and 3
end
