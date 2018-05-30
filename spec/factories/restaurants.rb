FactoryBot.define do
  factory :restaurant do
    name                { Faker::FunnyName.two_word_name }
    cuisine             { Faker::FunnyName.name }
    address             { Faker::Address.full_address }
    accepts_tenbis      false
    max_delivery_time   "13:26:06"
    rating              { Faker::Number.rand(3) + Faker::Number.decimal(2).to_d % 1 }

    trait :asian do
      cuisine "Asian"
    end

    trait :italian do
      cuisine "Italian"
    end

  end

end