@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :fname, :lname
    end
end