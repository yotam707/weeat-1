FactoryBot.define do
  factory :restaurant do
    name                { Faker::FunnyName.two_word_name }
    cuisine             { Faker::FunnyName.name }
    address             { Faker::Address.full_address }
    accepts_tenbis      false
    max_delivery_time   "13:26:06"

    trait :asian do
      cuisine "Asian"
    end

    trait :italian do
      cuisine "Italian"
    end

  end

end