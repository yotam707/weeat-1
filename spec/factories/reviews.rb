FactoryBot.define do
  factory :review do
    reviewer            { Faker::FunnyName.name }
    comment             { Faker::Lorem.sentence }
    rating              { Faker::Number.rand(3)}

    restaurant          { FactoryBot.create(:restaurant, :asian) }

    trait :good do
      rating 3
    end

    trait :bad do
      rating 1
    end

    trait :missing_rating do
      rating nil
    end
  end

end