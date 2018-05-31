FactoryBot.define do
  factory :review do
    reviewer            { Faker::FunnyName.name }
    comment             { Faker::Lorem.sentence }
    rating              { Faker::Number.rand(3)}

    trait :good do
      rating 3
    end

  end

end